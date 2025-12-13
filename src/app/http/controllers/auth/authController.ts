import type { FastifyRequest, FastifyReply } from "fastify";

class AuthController {
  static async logIn(request: FastifyRequest, reply: FastifyReply) {
    return { auth: true };
  }
}

export default AuthController;
