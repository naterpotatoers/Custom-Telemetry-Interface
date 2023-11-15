import os from "os";
import cors from "cors";
import express from "express";

const port = 5000;
const app = express();
const networkInterfaces = os.networkInterfaces();

let message: string = "Ready";
let status: string = "Ready";

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  status = JSON.stringify(req.query);
  console.log("GET /");
  res.send(message);
});

app.post("/", (req, res) => {
  message = req.body;
  console.log("POST /");
  res.send(status);
});

app.get("/status", (req, res) => {
  console.log("GET /status");
  res.send(status);
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
