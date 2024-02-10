const express = require("express");
const mongoose = require("mongoose");
const listItem = require("./schema");
const app = express();
app.use(express.json());
const PORT = 3333;

async function connectDataBase() {
  await mongoose.connect(
    `mongodb+srv://mateus:Mateus0386@supermarket-list.ybcxbrs.mongodb.net/`
    //"mongodb+srv://mateus:Mateus0386@livraria.aynj3tq.mongodb.net/livraria"
  );
  //await mongoose.connect("mongodb://localhost:27017");
}

app.get("/", (req, res) => {
  res.send("Hello. This is supermaket list aplication!");
});

app.get("/list-item", async (req, res) => {
  const itens = await listItem.find();
  return res.json(itens);
});

app.post("/list-item", async (req, res) => {
  const newItem = await listItem.create({
    name: req.body.name,
    quantity: req.body.quantity,
    checked: req.body.checked,
  });
  return res.json(newItem);
});

app.delete("/list-item/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  return res.json(id);
});

app.listen(PORT, () => {
  connectDataBase().catch((error) => {
    console.log(`Erro ao conectar com banco de dados: ${error}`);
  });
  console.log(`Sucesso. Servidor rodando na porta ${PORT}.`);
});
