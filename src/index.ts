if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import express from "express";
import { logger } from "./utils/logger";
import { Port, UserPoolId, ClientId } from "./constants";
import path from "path";
import fetch from "node-fetch";
import { registerController } from "./controllers/registerController";
import { loginController } from "./controllers/loginController";
import { helloSignController } from "./controllers/helloSign";
import { signatureRequestController } from "./controllers/signatureRequest";


global.fetch = fetch as any;

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/public")));

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", loginController);

app.get("/register", (req, res) => {

  res.render("register.ejs");
});

app.post("/register", registerController);

app.get("/change-password", (req, res) => {
   
  res.render("changePassword.ejs");
});

app.post("/register", registerController);

app.get("/helloSignInfo", helloSignController);

app.get("/signatureRequest", signatureRequestController);

app.listen(Port, () => {
  logger.info(`Service started at http://localhost:${Port}`);
});
