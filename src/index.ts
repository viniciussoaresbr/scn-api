import express from "express";
import "dotenv/config";
import { router } from "./routes";
import cors from "cors";
import { databaseConnection } from "./database";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//rotas
app.use(router);

app.listen(3001);

//conectando ao banco de dados
databaseConnection();
