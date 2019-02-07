let express = require("express");
const app = express();
const port = 8081;
app.use(express.static("Client/build"));
//app.get("/", (req: any, res: any) => {
//res.sendFile("Client/build/index.html");
//});
app.listen(8081, () => console.log(`Listening on port ${port}`));
