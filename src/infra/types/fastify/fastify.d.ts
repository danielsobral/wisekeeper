import "fastify";

declare module "fastify" {
  interface FastifyInstance {
    registerPlugins(
      plugins: Array<{
        plugin: any;
        options?: object;
      }>,
    ): Promise<void>;
  }
}
