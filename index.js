const http = require('http')

const server = http.createServer(function(req, res) {
  if (req.method == 'POST') {
    console.log('POST')
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        var data = JSON.parse(body)
        res.end(`Hello ${data.name}, Welcome to WeJapa Internships`);
    });
  } else {
    console.log('GET')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hello World, Welcome to WeJapa Internships')
  }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
