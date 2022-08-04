contVocalConsonante = (Texto) => {
  const Vocales = Texto.match(/[aeiou]/gi).length;
  const Consonantes = Texto.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  return [Vocales, Consonantes];
};

let _Texto = "Hola Mundo";
console.log(
  `Vocales: ${contVocalConsonante(_Texto)[0]} Consonantes: ${
    contVocalConsonante(_Texto)[1]
  }`
);
