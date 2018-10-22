//const soda = require('./soda.js')

class SodaMachine {
  constructor(args={}) {
    this.sodas = args.sodas;
    this.cash = args.cash;
  }

//автомат с газировкой вернет то число банок с газировкой 
//которое находится в ней
  currentInventoryCount() {
     return this.sodas.length;
  }

  //автомат с газировкой сможет найти одну 
  //газировку с данным брендом.

  findSoda(sodaBrand) {
    for(let i = 0; this.sodas.length; i++) {
      if (sodaBrand === this.sodas[i]) {
        return this.sodas[i];
      } else {
        return undefined;
      }    
    }

  }

  sell(sodaBrand) {
    

  }
}

//автомат с газировкой сможет продать газировку с данным 
// брендом. Когда газировка продается, она должна удаляться 
// из автомата для газировки, и цена газировки должна быть 
// добавлена к общей сумме в кассе автомата