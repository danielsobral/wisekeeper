import type { FastifyPluginCallback } from "fastify";

declare global {
  type PluginItem = {
    plugin: FastifyPluginCallback;
    options?: object;
  };
}

export {};
