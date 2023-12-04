"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const port = 3000;
const app = (0, express_1.default)();
const networkInterfaces = os_1.default.networkInterfaces();
let command = {};
let status = {};
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "2mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
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
        for (const network of networkInterface) {
            if (network.family === "IPv4" && !network.internal) {
                console.log(`Network: http://${network.address}:${port}`);
            }
        }
    }
});
