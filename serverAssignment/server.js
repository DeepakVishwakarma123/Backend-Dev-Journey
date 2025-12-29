const serverObj = require("http");
const path = require("path");
const fs = require("fs");
const port = 6001;

//server creation

// console.log(serverObj);
//its pritns all whole server object

let server = serverObj.createServer((req, res) => {
  let currentPathName = __dirname;
  if (req.url === "/") {
    currentPathName = currentPathName + `${req.url}index.html`;
  } else {
    //expecting you're givnig me full url
    currentPathName = currentPathName + `${req.url}`;
  }

  fs.readFile(currentPathName, (err, data) => {
    console.log("now", currentPathName);

    console.log("err value now", err);

    if (err) {
      console.log("error code is", err.code);
      //we send alert file in case of file not foudn error
      res.writeHead(403, { "content-type": "text/html" });
      let fileBuffer = fs.readFileSync(
        "/home/deepak/Desktop/Backend Development/serverAssignment/alert.html"
      );
      res.end(fileBuffer);
    } else {
      let mimetype = {
        ".html": "text/html",
        ".mp3": "audio/mpeg",
      };
      let extname = path.extname(currentPathName);
      let contentType = mimetype[extname];

      //we again send mp3 file as browser requests
      res.writeHead(200, { "content-type": contentType });
      res.end(data);
    }
  });
});
server.listen(port, () => {
  console.log(`server is listening ${port}`);
});
