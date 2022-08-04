const acortadorDeTexto = (Cadena, NumCaracteres) => {
  typeof Cadena === "string" && Cadena.length > 0
    ? console.log(Cadena.slice(0, NumCaracteres))
    : console.log(`Cadena Invalida`);
};

let _Cadena = "Hola Mundo",
  Longitud = 4;
acortadorDeTexto(_Cadena, Longitud);
