//importando express 
const express = require ('express');

//inicializando o express
const app = express();

//utilizando o metodo json do express para fazer o parse do body da requisição
app.use(express.json());

//rota raiz
app.get('/', (req, res) => {
  res.send("Hello World");
});

//Servidor rodando na porta 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});