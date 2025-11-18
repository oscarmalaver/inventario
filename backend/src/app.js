import express from "express";
import caregoriaRoutes from "./routes/categorias.routes.js"

const app = express();

app.set("port",5000);

app.use(caregoriaRoutes)

export default app;