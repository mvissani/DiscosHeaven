// CONSTANTES

const express = require("express")
const router = express.Router()
const path = require("path")

router.use(express.static("public"))

// RUTAS

// Inicio
router.get("/", (req, res) =>
{
res.sendFile(path.join(__dirname, "../views/inicio.html"));
})

// Mi Cuenta
router.get("/mi-cuenta", (req, res) =>
{
res.sendFile(path.join(__dirname, "../views/micuenta.html"));
})

// Productos
router.get("/productos", (req, res) =>
{
res.sendFile(path.join(__dirname, "../views/productos.html"));
})

// Carrito
router.get("/mi-carrito", (req, res) =>
{
res.sendFile(path.join(__dirname, "../views/carrito.html"));
})

// Ofertas

router.get("/ofertas", (req, res) =>
{
res.sendFile(path.join(__dirname, "../views/ofertas.html"));
})

// Populares

router.get("/populares", (req, res) =>
{
res.sendFile(path.join(__dirname, "../views/populares.html"));
})

// Recomendaciones

router.get("/recomendaciones", (req, res) =>
{
res.sendFile(path.join(__dirname, "../views/recomendaciones.html"));
})

// EXPORTAR MODULO

module.exports = router