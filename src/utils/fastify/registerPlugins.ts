import type { FastifyInstance } from "fastify";

export async function registerPlugins(
  app: FastifyInstance,
  plugins: PluginItem[]
) {
  for (const { plugin, options = {} } of plugins) {
    await app.register(plugin, options);
  }
}
