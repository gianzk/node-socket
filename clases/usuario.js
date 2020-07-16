

class User {
  constructor() {
    this.personas = [];
  }

  agregarPersonas(id, nombre, order) {
    let persona = { id, nombre, order };
    this.personas.push(persona);
    return this.personas;
  }

  getPersonasChat(order) {
    let personasOrder = this.personas.filter(persona => persona.order === order);
    return personasOrder;
  }

  getPersona(id) {
    let persona = this.personas.filter(persona => persona.id === id)[0];
    return this.personas;
  }

  borrarPersona(id) {

    let personaBorrada = this.getPersona(id);

    this.personas = this.personas.filter(persona => persona.id != id);

    return personaBorrada;

  }


}



module.exports = {
  User
};
