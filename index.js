const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('*', (req, res, next) => {
   console.log(req.url);
   next();
})

app.get('/', (req, res) => {
  res.send('TEST')
})

app.listen(3000, ()=>{
  console.log("start...");
})
