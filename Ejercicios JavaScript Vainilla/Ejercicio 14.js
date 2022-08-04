convertidorTemp = (Temperatura, Escala) => {
  if (Escala.toLowerCase() == "c" || Escala.toLowerCase() == "f") {
    if (Escala.toLowerCase() == "f") {
      return Temperatura * 1.8 + 32;
    } else {
      return (Temperatura - 32) / 1.8;
    }
  }
};

let _Escala = "C",
  _Temperatura = 40;

if (_Escala.toLowerCase() != "c" && _Escala.toLowerCase() != "f")
  console.log(`La escala "${_Escala}", no es una escala permitida`);
else
  console.log(
    `La conversion de escala tiene el resultado de: ${convertidorTemp(
      _Temperatura,
      _Escala
    )}`
  );
