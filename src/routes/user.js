const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

//create users
router.post("/clientes", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//editar todos
router.get("/clientes", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//editar unitario
router.get("/clientes/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/clientes/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


//actualizar usuario

router.put("/clientes/:id", (req, res) => {
  const { id } = req.params;
  const { nomb_cliente, telefono, ciudad, calle, numero, estado, fecha_nacimiento } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { nomb_cliente, telefono, ciudad, calle, numero, estado, fecha_nacimiento } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;
