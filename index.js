const express = require('express');

const app = express();

const port = 3000;

//Definindo uma rota simples
app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

app.get('/meunome', (req, res) => {
  res.send('Jamerson Avelino da Cunha');
});

app.get('/rota2/:num', (req, res) => { //Recebe o parametro 1
  const numero = parseInt(req.params.num);
  res.send(`O numero que você passou é ${numero}`);
})

//Iniciando o servidor 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);

});