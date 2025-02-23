import { Hono } from "hono";
import { prisma } from "../../lib/prisma";

const app = new Hono();

app.get("/", async (c) => {
  // Read all tools
  const tools = await prisma.tool.findMany();
  return c.json(tools);
});

app.post("/", async (c) => {
  // Create a new tool
  const { name, memo, brand, kind, authorId } = await c.req.json();
  const newTool = await prisma.tool.create({
    data: { name, memo, brand, kind, authorId },
  });
  return c.json(newTool, 201);
});

app.put("/", async (c) => {
  // Update a tool
  const { id, updatedName, updatedMemo, updatedBrand, updatedKind } = await c.req.json();
  const updatedTool = await prisma.tool.update({
    where: { id },
    data: { name: updatedName, memo: updatedMemo, brand: updatedBrand, kind: updatedKind },
  });
  return c.json(updatedTool);
});

app.delete("/", async (c) => {
  // Delete a tool
  const { toolId } = await c.req.json();
  await prisma.tool.delete({
    where: { id: toolId },
  });
  return c.text("deleted");
});

export default app;
