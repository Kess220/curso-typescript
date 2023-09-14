import express from "express";
import router from "@routers/router";

const app = express();

app.use(router);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is up and running");
});
