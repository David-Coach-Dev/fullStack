const pruebaCtrl = {};

//obtener
pruebaCtrl.obtener = (req, res) => {
  res.send("Funcionando desdde get");
};

//crear
pruebaCtrl.crear =async (req, res) => {
  const { nombre, apellido, salario } = req.boby;
  const nuevoRegistro = newEmpleado({
    nombre,
    apellido,
    salario,
  });
  await nuevoRegistro.save();
  res.json({
    mensaje: "Empleado guardado",
  });
};

//actualizar
pruebaCtrl.actualizar = (req, res) => {
  res.send("Funcionando desde put");
};

//Eliminar
pruebaCtrl.Eliminar = (req, res) => {
  res.send("Funcionando desde delete");
};
module.exports = pruebaCtrl;
