const path = require("path")
const express = require("express")
const hbs = require("hbs")

// Define path for express config
const app = express();
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// setup handlebars and views engine
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res)=>{
    res.render("index", {
        title: "Weather",
        name: "Ahmedoo Mukhtar"
    })
})

app.get("/about", (req, res)=>{
    res.render("about", {
        title: "About page",
        name: "Ahmedoo Mukhtar"
    })
})

app.get("/help", (req, res)=>{
    res.render("help", {
        title: "Help",
        name: "Ahmedoo Mukhtar",
        helpText: "This is a help message"
    })
})
app.get("/weather", (req, res)=>{
    res.send({
        forecast: "The weather is clear sky",
        location: "Kano, Nigeria"
    })
})

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "404 page",
        name: "Ahmedoo Mukhtar",
        errorMessage: "Help article not found"
    })
})

app.get("*", (req, res) => {
    res.render("404", {
        title: "404 page",
        name: "Ahmedoo Mukhtar",
        errorMessage: "Page not found"
    })
})
app.listen("3000", ()=> console.log("Server is up on port 3000"))