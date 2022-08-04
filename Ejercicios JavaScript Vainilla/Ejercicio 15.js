convertBinario = (Numero) => {
  let n = Numero;
  const num = [];
  for (let i = 0; n > 0; i++) {
    num.push(n % 2);
    n = parseInt(n / 2);
  }
  return num.reverse().join("");
};

convertDecimal = (Numero) => {
  const num = Array.from(String(Numero), Number);
  let res = 0;
  for (let i = num.length; i > 0; i--) {
    res += num[i - 1] * Math.pow(2, num.length - i);
  }
  return res;
};

let NumeroBinario = 1101,
  NumeroDecimal = 20;

console.log(
  `La conversion del numero decimal a binario es ${convertBinario(
    NumeroDecimal
  )}`
);

console.log(
  `La conversion del numero binario a decimal es ${convertDecimal(
    NumeroBinario
  )}`
);
