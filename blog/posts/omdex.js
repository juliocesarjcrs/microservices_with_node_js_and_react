const express = require('express');

const app = express();
const posts = {};
app.get('/posts', (req, res) =>{
  res.send(posts);
});
app.pot('/posts', (req, res) =>{});

app.listen(400, ()=>{
  console.log("listen port 4000");
})