import { jsonSchemaTransform } from "fastify-type-provider-zod";

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
      { name: "status", description: "Information on services status" },
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
  Transform: jsonSchemaTransform,
};
