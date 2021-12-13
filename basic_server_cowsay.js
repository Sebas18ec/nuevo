const express = require("express");
const http = require('http');
var cowsay = require("cowsay")
const hostname = '127.0.0.1';
const port = 8080;

// New app using express module
const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.json());

const server = http.createServer ((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/txt')
  res.end(
    cowsay.say({
    text: "Hello World!",
    e:"00",
    T: "U "

    })
  );
  
  });  



/*app.get('/', function (req, res) {
  res.send(cowsay.say({
    text:req.query.quote,
    e:"00",
    T: "U"
})
)
});

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

