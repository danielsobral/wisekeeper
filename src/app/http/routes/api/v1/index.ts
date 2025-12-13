import type { FastifyInstance } from "fastify";
import authRoutes from "app/http/routes/api/v1/auth.js";

export default async function v1Routes(app: FastifyInstance) {
  app.register(authRoutes, { prefix: "/auth" });
}
