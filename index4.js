const fs = require('fs');
const path = require('path');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const express = require('express');
const morgan = require('morgan');

const server = express();

//bodyParser
server.use(express.json());
server.use(morgan('default'))
// server.use(morgan('dev'))
// server.use(express.urlencoded());
server.use(express.static('public'))

// Middleware for all
// server.use((req, res, next) => {
//   console.log(req.get('User-Agent'), req.method, req.ip, req.hostname, new Date());
//   next();
// });
//Middleware for rout level
const auth = (req, res, next) => {
//   console.log(req.query);
//   if (req.body.password==="123") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
next()
};



// API Endpoints - Routes
server.get('/product/:id',auth, (req, res) => {
    console.log(req.params)
  res.json({ type: 'GET' });
});

server.post('/',auth, (req, res) => {
  res.json({ type: 'POST' });
});

server.put('/', (req, res) => {
  res.json({ type: 'PUT' });
});

server.delete('/', (req, res) => {
  res.json({ type: 'DELETE' });
});

server.patch('/', (req, res) => {
  res.json({ type: 'PATCH' });
});

server.get('/demo', (req, res) => {
  // res.send('<h1>hello</h1>');
  // res.sendFile(path.join(__dirname, 'index.html'));
  // res.json(products);
  // res.sendStatus(404);
  // res.status(201).send('<h1>hello</h1>')
});

server.listen(8080, () => {
  console.log('Server started');
});
