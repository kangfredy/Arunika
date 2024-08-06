import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: `localhost:${process.env.APP_PORT}`,
};

const outputFile = "./swagger.json";
const routes = ["./src/routes/*.ts"];

swaggerAutogen()(outputFile, routes, doc);
