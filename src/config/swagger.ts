import type { FastifySwaggerUiOptions } from "@fastify/swagger-ui";

export const swaggerOptions: object = {
  openapi: {
    openapi: "3.0.0",
    info: {
      title: "Wisekeeper API",
      description:
        "Gain greater control of your personal finances with Wisekeeper API.",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    tags: [
      { name: "auth", description: "Auth related end-points" },
      { name: "user", description: "User related end-points" },
    ],
    components: {
      securitySchemes: {
        apiKey: {
          type: "apiKey",
          name: "apiKey",
          in: "header",
        },
      },
    },
    externalDocs: {
      url: "https://github.com/danielsobral/wisekeeper",
      description: "Find more info in our repositori",
    },
  },
};

export const swaggerUIOptions: FastifySwaggerUiOptions = {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "list",
    deepLinking: true,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
};
