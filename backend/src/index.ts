import express, { Express, json } from "express";
import { vegetables } from "./router";
import "./db/connection";
var cors = require("cors");

const app: Express = express();
const port: number = 8080;
app.use(cors());
app.options("*", cors());
app.use(json());

app.use("/v1", vegetables);

app.listen(port, () =>
  console.log("listening on port:http://localhost:" + port)
);
