import type { FastifyInstance } from "fastify";
import AuthController from "@controllers/auth/authController.js";

async function authRoutes(fastify: FastifyInstance) {
  fastify.get("/", AuthController.logIn);
}

export default authRoutes;
