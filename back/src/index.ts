import express from "express";
var cors = require('cors')

const app = express();
const data = {
  team : "VIEL",
  knowledge : "unlimited",
  location : "Lyon"  
};
app.use(cors());
app.get("/", (req, res) => {
  setTimeout(() => {
    res.send(data);
  }, 5000);
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
