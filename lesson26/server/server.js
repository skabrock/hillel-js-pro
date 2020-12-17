const PORT = 3001;

const http = require("http");
const data = require("./data.json");

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8",
  });

  if (req.url === "/") {
    return res.end("Home page");
  } else if (req.url === "/test") {
    console.log(data);
    return res.end(JSON.stringify(data));
  }

  return res.end("It works!");
});

server.listen(PORT);
console.log("Listening on http://localhost:" + PORT);
