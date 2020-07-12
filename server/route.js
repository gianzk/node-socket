const express = require('express');
const router = express.Router();
const { Order } = require('./../clases/order');

const orderTotal = new Order();


router.get('/', (req, res) => {
  const newdata = {
    "data": 212,
    "data2": 1213
  }
  orderTotal.registerOrder(newdata);
  res.json({
    message: "dasda",
    data:"data"
  })
});


module.exports = router;
