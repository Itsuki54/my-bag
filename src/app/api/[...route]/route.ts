import { Hono } from "hono";
import { handle } from "hono/vercel";
import { tool } from "./tool";
import { user } from "./user";
export const runtime = "nodejs";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const route = app.route("/user", user).route("/tool", tool);

export type AppType = typeof route;

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
