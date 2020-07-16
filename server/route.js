const express = require('express');
const router = express.Router();
const { Order } = require('./../clases/order');

const orderTotal = new Order();


router.get('/', (req, res) => {
  const newdata = {
    "dni": "77213321",
    "data": 212,
    "data2": 1213
  }
  orderTotal.registerOrder(newdata);
  res.json({
    message: "dasda",
    data: "data"
  })
});

router.get('/get/demo', (req, res) => {
    
  let body = req.body;
  console.log(body);
  res.json({
    status: true,
    data:'hola'
  })

});

router.post('/post/demo', (req, res) => {
  let body = req.body;
  const ultimo = orderTotal.ultimo;
  const codigo = body.dni + ultimo;
  orderTotal.registerOrder(body);

  res.json({
    status: true,
    data: ultimo
  });

});

module.exports = router;
