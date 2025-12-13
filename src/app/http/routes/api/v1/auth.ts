import type { FastifyInstance } from "fastify";
import AuthController from "app/http/controllers/auth/authController.js";

async function authRoutes(fastify: FastifyInstance) {
  fastify.get("/", AuthController.logIn);
}

export default authRoutes;
