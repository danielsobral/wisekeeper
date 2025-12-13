import fastify from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import routes from "@routes/routes.js";
import registerPluginsPlugin from "@plugins/decorators/registerPluginsPlugin.js";
import { swaggerOptions, swaggerUIOptions } from "@config/swagger.js";

const app = fastify({
  logger: false,
});

await app.register(registerPluginsPlugin);

await app.registerPlugins([
  { plugin: swagger, options: swaggerOptions },
  { plugin: swaggerUi, options: swaggerUIOptions },
  { plugin: routes, options: {} },
]);

let environment = "http://localhost:3000/api/v1/auth";

export { app, environment };
