var express = require('express')
var app = express();

app.listen(8080)
console.log("Express Started")

app.use(express.static(__dirname))
