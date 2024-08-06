import express from "express";
import * as swaggerUI from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import { apiRoute } from "./src/routes";
import { globalConfig } from "./src/config";

const app = express();
apiRoute(app);
const port = process.env.APP_PORT ?? 3000;
if (globalConfig.ENABLE_SWAGGER) {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
}

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port} 🫡`);
});
