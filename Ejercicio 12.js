numPrimo = (Numero) => {
  if (Numero == 0 || Numero == 1 || Numero == 4) return false;
  for (let i = 2; i < Numero; i++) {
    if (Numero % i === 0) {
      return false;
    }
  }
  return true;
};

let _Numero = 19;
numPrimo(_Numero) == true
  ? console.log(`El numero ${_Numero} es primo`)
  : console.log(`El numero ${_Numero} no es primo`);
