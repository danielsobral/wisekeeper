import fastify from "fastify";
import swagger from "@fastify/swagger";
import routes from "@routes/routes.js";
import registerPluginsPlugin from "@plugins/decorators/registerPluginsPlugin.js";
import { swaggerOptions } from "@config/swagger.js";
import { scalarOptions } from "@config/scalar.js";
import scalar from "@scalar/fastify-api-reference";

const app = fastify({
  logger: false,
});

await app.register(registerPluginsPlugin);

await app.registerPlugins([
  { plugin: swagger, options: swaggerOptions },
  { plugin: scalar, options: scalarOptions },
  { plugin: routes, options: {} },
]);

let environment = "http://localhost:3000/api/v1/auth";

export { app, environment };
