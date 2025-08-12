// CONSTANTES

const express = require("express")
const app = express()
const path = require("path")
const methodOverride = require("method-override")

const indexRouter = require("./routes/index-routes")

// VISTAS 

app.set("views", path.resolve(__dirname, "./src/views"))

// IMAGENES

app.use(express.static(path.resolve(__dirname, "./public/img")))

// URL ENCODE

app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

// RUTAS

app.use("/", indexRouter)

// SERVIDOR

app.listen("3000", function() 
{
console.log("Servidor corriendo en el puerto 3000!")
})