const server = require("./server.js");

server.listen((port = 5000), () => {
  console.log(`\n Listening on port ${port}\n`);
});
