import express from "express";
import { apiRoute } from "./src/routes";

const app = express();
apiRoute(app);
const port = process.env.APP_PORT ?? 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port} 🫡`);
});
