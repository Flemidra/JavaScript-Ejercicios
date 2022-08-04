palindromo = (Palabra) => {
  let array = Palabra.split(""),
    res = false;
  if (array.join("") == array.reverse().join("")) return true;
};

let _Palabra = "salas";
palindromo(_Palabra) == true
  ? console.log(`${_Palabra}. Si es palindromo`)
  : console.log(`${_Palabra}. No es palindromo`);
