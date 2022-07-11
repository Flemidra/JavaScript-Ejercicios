factorial = (Numero) => {
  let resultado = 1;
  if (Numero < 0) return 0;
  else {
    for (let i = 1; i <= Numero; i++) resultado = resultado * i;
    return resultado;
  }
};

let _Numero = 5;
console.log(`El factorial de ${_Numero}. Es: ${factorial(_Numero)}`);
