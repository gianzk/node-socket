
const fs = require('fs');

class Order{

  

  constructor() {
    let data = require('./../data/data.json');

  }
  
  registerOrder(data) {
    console.log(data);
    data.order.push({ "name": "gioanmad" });
  }
  detailOrder(code) {
      
  }

}

module.exports = {
  Order
}
