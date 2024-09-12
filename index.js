const express = require('express');

const app = express();

const port = 3000;

//Definindo uma rota simples
app.get('/', (req, res) => {
  res.send('Jamerson Avelino da Cunha');
});

//Iniciando o servidor 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);

});