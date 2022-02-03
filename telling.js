var http = require('http');
const { parse } = require('path/posix');
var ledig = 5;
const server = http.createServer(async (req, res) => {
    const buffers = [];
  
    for await (const chunk of req) {
      buffers.push(chunk);
    }
  
    const data = Buffer.concat(buffers).toString();
    ledig = ledig + (JSON.parse(data).telling);
    console.log(ledig); // 'telling'
    res.end();
  })
server.listen(8000);
