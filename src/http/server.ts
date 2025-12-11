import fastify from "fastify";

const server = fastify({
  logger: true,
});

await server.register(import("@fastify/swagger"));
await server.register(import("@fastify/swagger-ui"));

server.get("/", async (request, reply) => {
  return { hello: "World" };
});

const start = async () => {
  await server.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(1);
    }
    server.log.info(`http server listening on ${address}`);
  });
};
start();
