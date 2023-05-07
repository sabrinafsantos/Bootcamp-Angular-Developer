/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. 
*/

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