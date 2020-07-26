const http = require('http')

const app = http.createServer((req, res) => {
  res.end('Hello World')
});


app.listen(5000, '127.0.0.1')

console.log('Server is running on port 3000')


