import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";
import { Hono } from "hono";

export const user = new Hono()
  .get("/", async (c) => {
    try {
      const users = await prisma.user.findMany();
      return c.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      return c.json({ error: "Failed to fetch users" }, 500);
    }
  })
  .get("/:id", async (c) => {
    try {
      const userId = c.req.param("id");
      const user: User | null = await prisma.user.findUnique({
        where: { id: userId },
      });
      if (!user) {
        return c.json({ error: "User not found" }, 404);
      }
      return c.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      return c.json({ error: "Failed to fetch user" }, 500);
    }
  });
