import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
 const data = await prisma.user.findMany();

  res.json({
    message: "Get endpoint",
  });
});

app.post("/",async(require,res)=>{

    await prisma.user.create({
    data: {
      name: "John Doe",
      password: "password",
    },
  });
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});