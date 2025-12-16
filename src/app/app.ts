import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import swagger from "@fastify/swagger";
import routes from "@routes/routes.js";
import registerPluginsPlugin from "@plugins/decorators/registerPluginsPlugin.js";
import { swaggerOptions } from "@config/swagger.js";
import { scalarOptions } from "@config/scalar.js";
import scalar from "@scalar/fastify-api-reference";
import { fastifyCorsPlugin } from "@plugins/fastify/cors.js";

const app = fastify({
  logger: false,
}).withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

await app.register(registerPluginsPlugin);

await app.registerPlugins([
  { plugin: fastifyCors, options: fastifyCorsPlugin },
  { plugin: swagger, options: swaggerOptions },
  { plugin: scalar, options: scalarOptions },
  { plugin: routes, options: {} },
]);

let environment = "http://localhost:3000/api/v1/auth";

export { app, environment };
