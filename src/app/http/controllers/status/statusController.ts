import type { FastifyRequest, FastifyReply } from "fastify";

class StatusController {
  static async status(request: FastifyRequest, reply: FastifyReply) {
    return { status: "healthy" };
  }
}

export default StatusController;
