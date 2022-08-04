contadorRepeticiones = (Cadena, Busqueda) => {
  let arrayCadena = Cadena.toLowerCase().split(" "),
    contador = 0;
  Busqueda.toLowerCase();
  arrayCadena.forEach((element) => {
    if (element == Busqueda) contador++;
  });

  return contador;
};

let _Cadena = "hola mundo adios mundo",
  _Busqueda = "mundo";

console.log(contadorRepeticiones(_Cadena, _Busqueda));
