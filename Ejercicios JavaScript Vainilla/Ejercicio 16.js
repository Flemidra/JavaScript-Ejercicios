descuento = (Numero, Desc) => {
  return Numero - Numero * (Desc / 100);
};

let _Numero = 1000,
  _Desc = 20;

console.log(
  `El monto original es: ${_Numero} y se aplicara un descuento del ${_Desc}%. Y su valor total es: ${descuento(
    _Numero,
    _Desc
  )}`
);
