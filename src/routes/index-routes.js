// CONSTANTES

const express = require("express")
const router = express.Router()
const path = require("path")

router.use(express.static("public"))

// RUTAS

router.get("/", (req, res) =>
{
res.sendFile(path.join(__dirname, "../views/inicio.html"));
})

// EXPORTAR MODULO

module.exports = router