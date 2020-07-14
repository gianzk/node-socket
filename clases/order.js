
const fs = require('fs');

class Order{

  constructor() {
    this.obj = {
        data:[]
    }
    this.datafile = './../data/';
    let data = require('./../data/information.json');
    this.ultimo = data.ultimo;
  }

  registerOrder(data) {
    console.log(data);
    this.ultimo += 1;
    this.grabarArchivo();
    console.log('ss',this.initOrder(data));
  }

   initOrder(data) {
      return this.datafile + data.dni+this.ultimo+'.json';
   }

  detailOrder(code) {

  }

  update() {
    
  }

  grabarArchivo() {
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
