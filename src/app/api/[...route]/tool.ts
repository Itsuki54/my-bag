import { prisma } from "@/lib/prisma";
import { zValidator } from "@hono/zod-validator";
import type { Tool } from "@prisma/client";
import { Hono } from "hono";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { authOptions } from "../auth/[...nextauth]/route";
import { getSession } from "@/lib/session";

const toolSchema = z.object({
  name: z.string().min(1),
  memo: z.string().min(1),
  brand: z.string().min(1),
  kind: z.string().min(1),
});

export const tool = new Hono()
  .get("/", async (c) => {
    try {
      const session = await getSession();
      console.log(session, "session");
      const user = session?.user;
      if (!user) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      const tools = await prisma.tool.findMany({
        where: {
          authorId: user.id,
        },
      });
      return c.json(tools);
    } catch (error) {
      console.error("Error fetching tools:", error);
      return c.json({ error: "Failed to fetch tools" }, 500);
    }
  })
  .get("/:id", async (c) => {
    try {
      const toolId = c.req.param("id");
      const tool: Tool | null = await prisma.tool.findUnique({
        where: { id: toolId },
      });
      if (!tool) {
        return c.json({ error: "tool not found" }, 404);
      }
      return c.json(tool);
    } catch (error) {
      console.error("Error fetching tool:", error);
      return c.json({ error: "Failed to fetch tool" }, 500);
    }
  })
  .post("/", zValidator("json", toolSchema), async (c) => {
    try {
      const session = await getServerSession(authOptions);
      const user = session?.user;
      const { name, memo, brand, kind } = await c.req.json();
      if (!session) {
        return c.json({ error: "Unauthorized" }, 401);
      }
      const authorId = user?.id;
      const newTool = await prisma.tool.create({
        data: { name, memo, brand, kind, authorId },
      });
      return c.json(newTool, 201);
    } catch (error) {
      console.error("Error creating tool:", error);
      return c.json({ error: "Failed to create tool" }, 500);
    }
  });
