
require("dotenv").config();

//Create a server that can send back static files
const http = require("http");
const url = require("url");
const fs = require("fs");

//npm i mime-types
const lookup = require("mime-types").lookup;
// logger
const {Logger} = require("@lo-agency/logger")

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.on("data", function (data) {


      Logger.debug(data.toString())

      // console.log(data.toString());
      fs.appendFile("information.txt", data.toString(), function (err) {
        if (err) {

          Logger.error(err)

          return

      
        }
      })
    })
    res.writeHead(200);
    res.end("you are registered");

  } else {
    //handle the request and send back a static file
    //from a folder called `public`
    let parsedURL = url.parse(req.url, true);
    //remove the leading and trailing slashes
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

    if (path == "") {
      path = "index.html";
    }

    // console.log(`Requested path ${path} `);
    Logger.info(`requested path ${path}`)


    let file = __dirname + "/public/" + path;
    //async read file function uses callback
    fs.readFile(file, function (err, content) {
      if (err) {

        Logger.error(`file not found ${file}`)
        res.writeHead(404);
        res.end();
      } else {
        //specify the content type in the response

        // console.log(`Returning ${path}`);
        Logger.info(`returning ${path}`)

        res.setHeader("X-Content-Type-Options", "nosniff");
        let mime = lookup(path);
        res.writeHead(200, { "Content-type": mime });
        res.end(content);
      }
    });
  }

});

server.listen(7000, "localhost", () => {
  // console.log("Listening on port 7000");
  Logger.info(`listening on port 7000`)
});

