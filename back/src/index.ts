import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
const start = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res("okay");
    }, 10000);
  });
  app.listen(5000, () => {
    console.log("server started");
  });
};

start();
