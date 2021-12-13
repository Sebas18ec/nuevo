const express = require("express");//LIBRERIA EXPRESS
const http = require('http');
var cowsay = require("cowsay")//LIBRERIA COWSAY
const hostname = '127.0.0.1';
const port = 8080;

// New app using express module
const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.json());

//GET
app.get('/cowsay', function (req, res) {
  res.send(cowsay.say({
    text:req.query.quote,
    e:"00",
    T: "U"
})
)
});
//POST
/*
app.post('/cowsay', function(request, response){
  response.send(cowsay.say({
      text:request.query.quote,
      e:"00",
      T: "U"
  })
  )
});
*/
app.listen(port,hostname);
console.log(`Server running at http://${hostname}:${port}/`);

