
// Basic knowledge on port, server, networking

import http from "http";
import chalk from "chalk";
import winston from "winston";
// creation of basic server
const server = http.createServer((req, res) => {
    // res.writeHead(200);
    // res.end("Backend is working!");

    // console.log(req);
    // console.log("this is response", res);

    // if(req.url == "/apple"){
    //     res.writeHead(200);
    //     res.end("apple")
    // }
    // else if (req.url == "/books"){
    //     res.writeHead(200);
    //     res.end("Books");
    // }
    // else{
    //     res.writeHead(200);
    //     res.end("others");
    // }

    // switch(req.url){
    //     case "/";
    //     if(){
    //         if(){
    
    //         }
    // }
  
    // }
    res.writeHead(200);
    res.end("Backend is working!");
    // console.log(req);
    // console.log(res);
    console.log(chalk.bgCyan("hello this is chalk"));

})

server.listen(8000, ()=> {
    console.log("Server has started!");
});

/**
 * IP address
 * Port
 * Networking
 */

const logger = winston.createLogger(
    {
        transports: [
            new winston.transports.console(),
            new winston.transports.File({ filename: "logged.log" })
        ],
    }
)

logger.info({
    "message": "database has been something wrong"
})


