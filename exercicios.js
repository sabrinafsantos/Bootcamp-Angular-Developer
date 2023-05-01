/* Uma função que escreve o nome 

function escrevaSeuNome (nome){
    console.log ('Meu nome é: ' + nome);

}

escrevaSeuNome('Sabrina');
escrevaSeuNome('Jefferson');
escrevaSeuNome('Roberto');
*/

/* Uma função que vê se é maior de idade 

function maiorIdade (idade) {
    if(idade < 18){
        console.log('Você é não é maior de idade');
    } else {
        console.log('Você é maior de idade');}
    } 

maiorIdade(58); */

/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

function usarDesconto(valor, desconto) {
return (valor - (valor * (desconto/100)));

}

function aplicarJuros( valor, juros){
    return (valor + (valor * (juros/100)));
}
const precoEtiqueta = 100;
const formaDePagamento = 2;

if (formaDePagamento === 1) {
    console.log(usarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2){
    console.log(usarDesconto  (precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
console.log(precoEtiqueta);
} else  {
console.log(aplicarJuros  (precoEtiqueta, 10));

}