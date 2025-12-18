import type { FastifyInstance } from "fastify";
import StatusController from "@controllers/status/statusController.js";
import { statusDocs } from "@docs/api/v1/status/index.js";

async function statusRoutes(fastify: FastifyInstance) {
  fastify.get("/", statusDocs, StatusController.status);
}

export default statusRoutes;
