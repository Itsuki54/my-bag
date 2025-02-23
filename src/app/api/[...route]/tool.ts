import { prisma } from "@/lib/prisma";
import type { Tool } from "@prisma/client";
import { Hono } from "hono";

export const tool = new Hono()
  .get("/", async (c) => {
    try {
      const tools = await prisma.tool.findMany();
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
  });
