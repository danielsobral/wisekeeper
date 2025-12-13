import fastify from "fastify";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import routes from "@routes/routes.js";
import registerPluginsPlugin from "@plugins/decorators/registerPluginsPlugin.js";

const app = fastify({
  logger: false,
});

await app.register(registerPluginsPlugin);

await app.registerPlugins([
  { plugin: swagger, options: {} },
  { plugin: swaggerUi, options: {} },
  { plugin: routes, options: {} },
]);

let environment = "http://localhost:3000/api/v1/auth";

export { app, environment };
