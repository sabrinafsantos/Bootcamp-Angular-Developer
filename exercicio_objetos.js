/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. 
*/
/*
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {

        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, valorCombustivel){
    return distanciaEmKm * this.gastoMedioPorKm * valorCombustivel;

}
}

const corsa = new Carro('Chevrolet', 'prata', 1/9);
console.log (corsa.calcularGastoDePercurso(200, 5));

const civic = new Carro('Honda', 'preto', 1/15);
console.log (civic.calcularGastoDePercurso(200, 5));
*/

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa{
    nome;
    peso;
    altura;
 
    constructor(nome, peso, altura){
this.nome = nome;
this.peso = peso;
this.altura = altura;

    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
     const imc =  this.calcularImc = this.calcularImc();
     if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc <25) {
        return ('Peso normal')
     } else if (imc >= 25 &&  imc <30) {
        return ('Acima do peso')
     } else if (imc >= 30 && imc <40) {
        return ('Obeso')
     } else {
        return ('Obesidade grave')
     }
    }
}
    const jose  = new Pessoa('Jose', 70, 1.75);
    console.log(jose.classificarImc());

    const sabrina  = new Pessoa('Sabrina', 73, 1.60);
    console.log(sabrina.classificarImc());