
const app = require("express")();
const os = require("os");
const process = require("process");
const fs = require("fs")

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    let content = "";
    try {
        content = fs.readFileSync(process.env["PASSWORD_FILE"]);
    } catch (err) {

    }
    res.render('index', {
        data: {
            hostname: os.hostname(),
            secret: content,
            time: new Date(),
            color: process.env["COLOR"] ? process.env["COLOR"] : "black"
        }
    })
})

app.get("/host", (req, res) => {
    res.send({
        hostname: os.hostname(),
        time: new Date()
    })
})

app.get("/env/:name", (req, res) => {
    let response = {};
    response[req.params.name] = process.env[req.params.name];
    res.send(response)
})

app.listen(3000, () => {
    console.log("app started")
})