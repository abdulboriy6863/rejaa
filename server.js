const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://abdulboriy6863:Aa1122334455%40@cluster0.94bxndd.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifieldTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB ");
    else {
      console.log("MongoDB connection succed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 4004;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
