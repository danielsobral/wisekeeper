import { app as server, environment } from "@app";

const start = async () => {
  server.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      server.log.error(err);
      console.error(err);
      process.exit(1);
    }
    server.log.info(`HTTP server listening on ${address}`);
    console.log(`🔥 HTTP server running on ${environment}`);
    console.log(`📚 Docs available at http://localhost:3000/docs`);
  });
};
start();
