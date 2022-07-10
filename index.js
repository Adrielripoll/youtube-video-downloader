// const express = require('express')
// const cors = require('cors')
// const YoutubeController = require('./controllers/YoutubeController')
// const app = express()

// app.use(express.json())

// app.post('/download', YoutubeController.video)

// app.listen(3000, ()=>{console.log('Servidor rodando na porta 3000')})

const meses = [
    "janeiro",
    "feveiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ];
  
  function calc() {
    meses.forEach((mes) => {
      const arrayMes = [mes, 1, 2, 3, 4];
      const arrayAno = [];
  
      console.log(arrayAno.concat(arrayMes)) 
    });
  }
  
  calc();
  