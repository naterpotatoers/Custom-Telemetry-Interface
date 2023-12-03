import os from "os";
import cors from "cors";
import express from "express";

const port = 5000;
const app = express();
const networkInterfaces = os.networkInterfaces();

let command: any = {};
let status: any = {};

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("GET /");
  res.json(command);
});

app.post("/", (req, res) => {
  command = req.body;
  console.log("POST /");
  res.json(status);
});

app.get("/status", (req, res) => {
  console.log("GET /status");
  res.json(status);
});

app.post("/status", (req, res) => {
  status = req.body;
  console.log("POST /status");
  res.json(command);
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
  for (const key in networkInterfaces) {
    const networkInterface = networkInterfaces[key];
    for (const network of networkInterface as any) {
      if (network.family === "IPv4" && !network.internal) {
        console.log(`Network: http://${network.address}:${port}`);
      }
    }
  }
});
