"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.get("/", async (req, res) => {
    const data = await prisma.user.findMany();
    res.json({
        message: "Get endpoint",
    });
});
app.post("/", async (require, res) => {
    await prisma.user.create({
        data: {
            name: "John Doe",
            password: "password",
        },
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=index.js.map