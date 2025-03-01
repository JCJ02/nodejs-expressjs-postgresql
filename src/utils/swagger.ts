import { Express } from "express";
import swaggerJsDoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: Options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Lightweight Solutions - Invoice Application",
            description: "API Documentation",
            version: "2.0.0",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
                apiKeyAuth: {
                    type: "apiKey",
                    name: "x-api-key",
                    in: "header",
                },
            },
        },
        security: [
            {
                apiKeyAuth: [],
            },
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["src/routes/**/*.{js,ts}"],
};

const spec = swaggerJsDoc(options);

const swagger = (app: Express) => {
    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(spec, {
            customCssUrl:
                "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css",
            swaggerOptions: {
                authAction: {
                    bearerAuth: {
                        name: "bearerAuth",
                        schema: {
                            type: "http",
                            in: "header",
                            name: "Authorization",
                            scheme: "bearer",
                            bearerFormat: "JWT",
                        },
                        value: "Bearer ",
                    },
                },
            },
        })
    );
};

export default swagger;