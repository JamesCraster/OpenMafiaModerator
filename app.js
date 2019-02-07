"use strict";
var express = require("express");
var app = express();
var port = 8081;
app.use(express.static("Client/build"));
//app.get("/", (req: any, res: any) => {
//res.sendFile("Client/build/index.html");
//});
app.listen(8081, function () { return console.log("Listening on port " + port); });
