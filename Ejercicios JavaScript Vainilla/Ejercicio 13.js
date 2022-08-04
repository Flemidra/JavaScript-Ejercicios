par = (Numero) => {
  if (Numero % 2 == 0) return true;
  else return false;
};

let _Numero = 3;

par(_Numero) == true
  ? console.log(`El numero ${_Numero} es par`)
  : console.log(`El numero ${_Numero} es impar`);
