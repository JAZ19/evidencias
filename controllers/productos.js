
var items = [
	{id: 1, name: 'product1'},
	{id: 2, name: 'product2'},
	{id: 3, name: 'product3'}
];

const inicio = (req, res) => {
  res.render('inicio.ejs', {
		titulo: 'Mi tienda Inicio'
	});
}

const getProductos = (req , res) => {
  res.render('productos.ejs', {
		titulo: 'Mis productos',
    items
	});
}
const addProducto = (req, res) => {
	var nuevoProducto = req.body.producto;
	console.log(nuevoProducto);

	items.push({
		id: items.length + 1,
		name: nuevoProducto
	});

	res.redirect('/productos');
};

module.exports = {
  inicio,
  getProductos,
  addProducto
};
