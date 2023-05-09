
console.log('Web serverni boshlash');
const express = require("express");
const app = express(); 
const http = require('http');
const fs = require('fs');

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  }else {
    user = JSON.parse(data);
  }
})

// 1 -bosqich: Kirish kodlari 
app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

// 2-bosqich: Sessionga bog'liq kodlar

// 3 - bosqich: viewsga bog'liq kodlar. Beckendda (view) frontend yasaymiz ejs yordamida

app.set("views", "views");
app.set("view engine", "ejs");

// 4 - bosqich: Routingga bog'liq kodlar
// post - ma'lumotni o'zi bilan olib kelib databasega o'sha ma'lumotni yozadi
app.post("/create-item", (req, res) => {
  // console.log(req.body);
  // console.log(req);
  // res.json({test: "success"}); // json shaklida ma'lumotni qaytarish(test: success qaytib keladi)
})

app.get("/author", (req, res) => {
  res.render("author", {user: user});
})
app.get("/", function(req, res) {
  res.render("harid");
})

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
  console.log(`The server is running succesfully on port: ${PORT}`);
});