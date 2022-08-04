eliminacionCaracteres = (Cadena, Busqueda) => {
  return Cadena.replace(new RegExp(Busqueda, "g"), "");
};

let _Cadena = "xyz1, xyz2, xyz3, xyz4, xyz5",
  _Busqueda = "xyz";

console.log(eliminacionCaracteres(_Cadena, _Busqueda));
