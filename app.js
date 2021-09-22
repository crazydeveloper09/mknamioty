const express = require("express"),
    app = express();

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index", {home:""})
})

app.get("/cennik", (req, res) => {
    res.render("price", {price: ""})
})

app.get("/o-nas", (req, res) => {
    res.render("about", {about: ""})
})

app.get("/gallery", (req, res) => {
    res.render("gallery", {gallery:""})
})

app.get("/contact", (req, res) => {
    res.render("contact", {contact:""})
})

app.listen(3000)