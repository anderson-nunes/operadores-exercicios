const letraA = 5 > 20 && 5 < 2;
console.log(letraA);

const letraB = 5 === 5 || 5 === "5";
console.log(letraB);

const letraC = !(20 > 50);
console.log(letraC);

const letraD = !(20 > 50 || 50 > 60);
console.log(letraD);

////////////////////////////////////////////////////////////////////////////////

const salarioFevereiro = 3418.41;
const salarioMarco = 4124.1;
const salarioAbril = 1874.0;
const salarioMaio = 7000.0;
const salarioJunho = 9450.5;

const filhos = 2;

const salarioFixo = 2000;
const auxilioCreche = 45.5 * 2;

const salarioJaneiro = 5784.5;
const comissao = 0.1;

const descontoInss = 0.05;

const salarioFixoEBeneficio = salarioFixo + auxilioCreche;
console.log(`O salário benefício é de : ${salarioFixoEBeneficio}`);

//salário mês janeiro

const comissaoJaneiro = salarioJaneiro * comissao;
console.log(`Comissão no mês de janeiro é: ${comissaoJaneiro}`);

const salarioBrutoJaneiro = salarioFixoEBeneficio + comissaoJaneiro;
console.log(`O salário bruto no mês de janeiro é: ${salarioBrutoJaneiro}`);

const descontoINSSJaneiro = salarioBrutoJaneiro * descontoInss;
console.log(
  `Valor de desconto do INSS no mês de janeiro é: ${descontoINSSJaneiro}`
);

const salarioMesJaneiro = salarioBrutoJaneiro - descontoINSSJaneiro;
console.log(`O salário do mês de janeiro é: ${salarioMesJaneiro}`);

//salário mês fevereiro

const comissaoFevereiro = salarioFevereiro * comissao;
console.log(`Comissão no mês de fevereiro é: ${comissaoFevereiro}`);

const salarioBrutoFevereiro = salarioFixoEBeneficio + comissaoFevereiro;
console.log(`O salário bruto no mês de fevereiro é: ${salarioBrutoFevereiro}`);

const descontoINSSFevereiro = salarioBrutoFevereiro * descontoInss;
console.log(
  `O desconto do INSS no mês de fevereiro é: ${descontoINSSFevereiro}`
);

const salarioMesFevereiro = salarioBrutoFevereiro - descontoINSSFevereiro;
console.log(`O salário bruto no mês de fevereiro é: ${salarioMesFevereiro}`);

//salário mês março

const comissaoMarco = salarioMarco * comissao;
console.log(`Comissão no mês de março é: ${comissaoMarco}`);

const salarioBrutoMarco = salarioFixoEBeneficio + comissaoMarco;
console.log(`O salário bruto no mês de março é: ${salarioBrutoMarco}`);

const descontoINSSMarco = salarioBrutoMarco * descontoInss;
console.log(`O desconto do INSS no mês de março é: ${descontoINSSMarco}`);

const salarioMesMarco = salarioBrutoMarco - descontoINSSMarco;
console.log(`O salário bruto no mês de março é: ${salarioMesMarco}`);

//salário mês abril

const comissaoAbril = salarioAbril * comissao;
console.log(`Comissão no mês de abril é: ${comissaoAbril}`);

const salarioBrutoAbril = salarioFixoEBeneficio + comissaoAbril;
console.log(`O salário bruto no mês de abril é: ${salarioBrutoAbril}`);

const descontoINSSAbril = salarioBrutoAbril * descontoInss;
console.log(`O desconto do INSS no mês de abril é: ${descontoINSSAbril}`);

const salarioMesAbril = salarioBrutoAbril - descontoINSSAbril;
console.log(`O salário bruto no mês de abril é: ${salarioMesAbril}`);

//salário mês maio

const comissaoMaio = salarioMaio * comissao;
console.log(`Comissão no mês de maio é: ${comissaoMaio}`);

const salarioBrutoMaio = salarioFixoEBeneficio + comissaoMaio;
console.log(`O salário bruto no mês de maio é: ${salarioBrutoMaio}`);

const descontoINSSMaio = salarioBrutoMaio * descontoInss;
console.log(`O desconto do INSS no mês de maio é: ${descontoINSSMaio}`);

const salarioMesMaio = salarioBrutoMaio - descontoINSSMaio;
console.log(`O salário bruto no mês de maio é: ${salarioMesMaio}`);

//salário mês junho

const comissaoJunho = salarioJunho * comissao;
console.log(`Comissão no mês de junho é: ${comissaoJunho}`);

const salarioBrutoJunho = salarioFixoEBeneficio + comissaoJunho;
console.log(`O slário bruto no mês de junho é: ${salarioBrutoJunho}`);

const descontoINSSJunho = salarioBrutoJunho * descontoInss;
console.log(`O desconto do INSS no mês de junho é: ${descontoINSSJunho}`);

const salarioMesJunho = salarioBrutoJunho - descontoINSSJunho;
console.log(`O salário bruto no mês de junho é: ${salarioMesJunho}`);

const mediaSalario =
  (salarioMesJaneiro +
    salarioMesFevereiro +
    salarioMesMarco +
    salarioMesAbril +
    salarioMesMaio +
    salarioMesJunho) /
  6;
console.log(`A média salárial é: ${mediaSalario}`);

const mediaSalarialFixed = mediaSalario.toFixed(2);

console.log(
  `A média salarial do Fulano da Silva entre janeiro a junho é: ${mediaSalarialFixed}`
);
