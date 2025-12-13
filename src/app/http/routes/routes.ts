import type { FastifyInstance } from "fastify";
import v1Routes from "@routes/api/v1/index.js";

export default async function routes(app: FastifyInstance) {
  app.register(v1Routes, { prefix: "/api/v1" });
}
