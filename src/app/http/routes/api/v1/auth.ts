import type { FastifyInstance } from "fastify";
import AuthController from "@controllers/auth/authController.js";
import { logInDocs } from "@docs/api/v1/auth.js";

async function authRoutes(fastify: FastifyInstance) {
  fastify.get("/", logInDocs, AuthController.logIn);
}

export default authRoutes;
