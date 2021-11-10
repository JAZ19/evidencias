const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.js');



//router.get('/',(req,res) => res.send("<h1>Mi primer aplicacion Node.js</h1>"));

router.get('/',productosController.inicio);

router.post('/newProducto',productosController.addProducto);

router.get('/productos',productosController.getProductos);

router.get('/carrito',carrito.getAllProductos);

router.get('/carrito/deleteProducto',carrito.deleteProductoDelcarrito);

module.exports = router;
