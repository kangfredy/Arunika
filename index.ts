import express from "express";
import * as swaggerUI from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";
import { apiRoute } from "./src/routes";
import { globalConfig } from "./src/config";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
//define routes
apiRoute(app);
//define port
const port = process.env.APP_PORT ?? 3000;
//enable swagger
if (globalConfig.ENABLE_SWAGGER) {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
}

//start server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at port ${port} 🫡`);
});
