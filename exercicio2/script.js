const primeiroNumero = Number(prompt("Digite o primeiro número: "));
const segundoNumero = Number(prompt("Digite o segundo número: "));

const letraA = primeiroNumero > segundoNumero;
console.log("Letra a:", letraA);

const letraB = primeiroNumero === segundoNumero;
console.log("Letra b:", letraB);

const letraC = primeiroNumero % segundoNumero === 0;
console.log("Letra c:", letraC);

const letraD = segundoNumero % primeiroNumero === 0;
console.log("Letra d:", letraD);
