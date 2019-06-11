const http = require('http'),
      fs = require('fs');

const server = http.createServer((req,res) => {
  fs.readFile('../index.html', (err, html) => {
    res.write(html);
    res.end();
  });
});

server.listen(5000);
