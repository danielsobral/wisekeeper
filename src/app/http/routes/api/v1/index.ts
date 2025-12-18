import type { FastifyInstance } from "fastify";
import authRoutes from "@routes/api/v1/auth/index.js";
import statusRoutes from "@routes/api/v1/status/index.js";

export default async function v1Routes(app: FastifyInstance) {
  app.register(authRoutes, { prefix: "/auth" });
  app.register(statusRoutes, { prefix: "/status" });
}
