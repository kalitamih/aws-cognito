import express from "express";
import { logger } from "./utils/logger";
import { PORT } from "./constants";
import path from "path";

const app = express();

app.use(express.json());

app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/public")));

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  const { body } = req;
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register");

app.listen(PORT, () => {
  logger.info(`Service started at http://localhost:${PORT}`);
});
