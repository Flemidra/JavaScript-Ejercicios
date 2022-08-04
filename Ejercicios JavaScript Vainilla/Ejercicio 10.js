capicua = (Numero) => {
  let test = Numero.toString();

  if (
    Numero.toString().split("").join() ==
    Numero.toString().split("").reverse().join()
  )
    console.log("Si es capicua");
  else console.log("No es capicua");
};

let _Numero = 2002;
capicua(_Numero);
