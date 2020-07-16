
const fs = require('fs');

class Order {

  constructor() {
    this.obj = {
      data: []
    }
    this.datafile = './../data/';
    let data = require('./../data/information.json');
    this.ultimo = data.ultimo;
  }
  initOrder(data) {
    return this.datafile + data.dni + this.ultimo + '.json';
  }
  registerOrder(data) {
    this.ultimo += 1;
    this.grabarArchivoConfig();
    this.grabarOrder(data);
  }

  grabarOrder(order) {
    let jsonData = {
      name: order.name,
      lastName: order.lastName,
      dni: order.dni,
      pedido: order.pedido,
      cantidad: order.cantidad,
      address: order.address,
      city: order.city,
      zip: order.zip,
      status: 'DESPACHO'
    };
    jsonData = JSON.stringify(jsonData);
    const codigo = this.initOrder(order);
    const nameFile = './data/' + codigo.toString();
    fs.writeFileSync(nameFile, jsonData);
  }


  grabarArchivoConfig() {
    let jsonData = {
      ultimo: this.ultimo
    };
    jsonData = JSON.stringify(jsonData);
    fs.writeFileSync('./data/information.json', jsonData);
  }


}

module.exports = {
  Order
}
