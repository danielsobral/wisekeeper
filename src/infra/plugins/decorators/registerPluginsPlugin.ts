import type { FastifyInstance } from "fastify";
import { registerPlugins } from "@utils/fastify/registerPlugins.js";
import fp from "fastify-plugin";

export default fp(async function registerPluginsPlugin(
  fastify: FastifyInstance
) {
  fastify.decorate("registerPlugins", async function (plugins) {
    await registerPlugins(fastify, plugins);
  });
});
