const path = require('path')
const express = require('express')

const PORT = process.env.PORT || 3030;

const app = express()
console.log(path.join(__dirname,'..'));
const sttcpath = path.join(__dirname,'../public')
app.use(express.static(sttcpath))


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  }); 