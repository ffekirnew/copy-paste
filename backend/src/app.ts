import express from "express";

const app = express();
app.get("/hello", (_req, res) => {
  res.status(200).json({ message: "Hello, mom!" });
});

app.get("", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

export default app;
