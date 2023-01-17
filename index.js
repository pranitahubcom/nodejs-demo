const http = require('http');
const express = require('express');
// const { nextTick } = require('process');
const app = express();  
// app.get('', (req, res) => {
//   res.send('Hello World',req.query.name);
// })


const path = require ('path');

const publicpath = path.join(__dirname, 'public');
console.log(publicpath)
// app.use(express.static(publicpath));

// app.get('', (_, res) => {
//   res.sendFile(`${publicpath}/about.html`);
// })

// app.get('*', (_, res) => {
//   res.sendFile(`${publicpath}/notfound.html`);
// })


// app.get('/home', (req, res) => {
//   res.send(`Hello World' <a href="/about" target="_blank">About</a>`);
// })

app.set('view engine', 'ejs');


app.get('', (_, res) => {
  res.sendFile(`${publicpath}/about.html`);
})

app.get('*', (_, res) => {
  res.sendFile(`${publicpath}/notfound.html`);
})


app.get('/home', (req, res) => {
  res.send(`Hello World' <a href="/about" target="_blank">About</a>`);
})

// app.get('/about', (req, res) => {
//   res.send('Hellos World <a href="/home" target="_blank">home</a>' );
//   next()
// })
app.get('/formats', (req, res) => {
  res.jsonp(null)
// => callback(null)

res.jsonp({ user: 'tobi' })
// => callback({ "user": "tobi" })

res.status(500).jsonp({ error: 'message' })
// => callback({ "error": "message" })
  res.format({
    'text/plain': function () {
      res.send('hey')
    },
  
    'text/html': function () {
      res.send('<p>heys</p>')
    },
  
    'application/json': function () {
      res.send({ message: 'heysa' })
    },
  
    default: function () {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable')
    }

    
  })
})
app.get('/htmlrender', (req, res) => {
  res.send(`<h1>Hellos World</h1>`);
})
app.get('/inputrender', (req, res) => {
  res.send(`
  <input type="text" name="home" placeholder="Hello World" /> <button> Submit </button>
  `);
})
app.get('/jsonrender', (req, res) => {
  res.send([
{
  name:"sudarshana",
  email:"sujata@gmail.com",
  phone:"123456889",
},{
  name:"teji",
  email:"ta@gmail.com",
  phone:"123456889",
}]
  );
})

app.listen(5000);
// const colors = require('colors');
// const chalk = require("chalk");
// const chalk = require("chalk");
console.log("aayush")
// console.log(chalk.red.underline("aayush"))
// console.log(chalk.red("aayush"))
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write("<h1>helo good evening</h1>")
//     res.end('Hello Worldddddddddddddddddddddddddddddddddd\n');
//     console.log("req");
// }) .listen(8080);


// function dataControl(req, res) {          //this is normal function
//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write("<h1>helo good evening</h1>")
//     res.end();
// }
// http.createServer(dataControl).listen(8080);
// console.log("helo good night".bgCyan);
// console.log("helo good morings".red);
const  dataControl = (req, res) => {          //this is arrow function
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("<h1>helo good afternoon</h1>")
    res.end();
}
http.createServer(dataControl).listen(8080);


      // normal function to arrow function

      function test(a){
        return a*10;
      }

      const tests = (a) => a * 10; // arrow function
      
let a=100;
let b=0;
let c=300;
      console.log("first test");


      setTimeout(() =>
      {
        b =200;
        console.log("second test",b);
      }, 2000);

      console.log(" test",a+b+c);


      let d =[1,2,3,4];
      let e =[5,6];

      let waitingData =  new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(e);
      },2000)    
      })


      waitingData.then((data) => {
          console.log("data",d .concat(data));
      })
