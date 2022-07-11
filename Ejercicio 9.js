numRandom = (minimo, maximo) => {
  return Math.floor(Math.random() * (600 - 501)) + 501;
};

console.log(`Su numero aleatorio es: ${numRandom()}`);
