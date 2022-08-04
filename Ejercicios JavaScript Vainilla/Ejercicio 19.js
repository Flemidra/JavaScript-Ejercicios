nombreValido = (Nombre) => {
  if (/^[A-Za-z\s]+$/.test(Nombre)) return true;
  else return false;
};

let _Nombre = "David Contreras";

if (nombreValido(_Nombre) == true)
  console.log(`El nombre ${_Nombre} es valido`);
else console.log(`El nombre ${_Nombre} no es valido.`);
