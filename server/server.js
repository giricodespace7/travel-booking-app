// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write('Hello World');
//   res.end();
// });

// route('/login',(req,res)=>{
//   res.send("hello")
// });
const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("my first server creted in express");
});
app.listen(3000, () => {
  console.log("server statted check now");
});
