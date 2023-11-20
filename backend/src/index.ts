import express, { Express, json } from "express";
import { crud, user } from "./router";

const app: Express = express();
const port: number = 8080;
app.use(json());
app.use("/", user);
app.use("/user", user);
app.use("/crud", crud);

app.listen(port, () =>
  console.log("listening on port:http://localhost:" + port)
);
