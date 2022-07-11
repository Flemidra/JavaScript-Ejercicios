invertirTexto = (Cadena) => {
  let NuevaCadena = "";
  for (let i = Cadena.length - 1; i >= 0; i--)
    NuevaCadena = NuevaCadena.concat(Cadena[i]);

  return NuevaCadena;
};

let _Cadena = "Hola";
console.log(
  `Palabra Original: ${_Cadena}. Y su palabra invertida es: ${invertirTexto(
    _Cadena
  )}`
);
