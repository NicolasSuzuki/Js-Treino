/* componentes funcionais são utilizados, na maioria das vezes no react para que o codigo ser mais limpo e legível;
    é importante que se entenda como criar uma função padrão e uma função como componente, ambos vão ter a mesma 'função' :D

   site para ler um teco melhor: https://tableless.com.br/entendendo-componentes-funcionais/
   
   para demonstrar melhor to deixando duas funções, escritas como funcao e como componente
   dentro delas vou criar alguns exemplos de como se utilizar algumas funções de manipulaçao de arrays e strings, demoro? >.<
*/

//Imprimir letra por letra de uma string
function printLetterByLetterFunction(stringToPrint) {
    //usando for
    let i = 0; //estou usando let para declarar a variavel 'i' por o valor dela vai ser alterado dentro do for :)
    for(i; i<stringToPrint.length; i++){
        console.log(stringToPrint[i], 'using for');
    }
    
    //usando map
    stringToPrint.split("").map(elementoDoArray => console.log(elementoDoArray)) 
    //SOBRE SPLIT -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
    //nesse caso o split cria um array separando cara elemento pelo que há entre as aspas duplas ("")
    //nos retornando a palavra, vamos usar 'teste' como exemplo, desse jeito: ['t','e','s','t','e'] 
    //se quisermos separar a string por espaços então, usariamos algo como: stringToPrint.split(" ")
    //e assim, levando a string 'teste de palavras com espaco' como exemplo, a gnt teria recebido como retorno: ['teste', 'de', 'palavras', 'com', 'espaco'] 
}

const printLetterByLetterComponent = (stringToPrint) => {
    //usando for
    let i = 0; 
    for(i; i<stringToPrint.length; i++){
        console.log(stringToPrint[i], 'using for');
    }
    //usando map
    stringToPrint.split("").map(elementoDoArray => console.log(elementoDoArray));
}

//Imprimir letras ordenadas de uma string
function printLetterByLetterSorterFunction(stringToPrint) {
    //usando for
    let i = 0; 
    const arrayAuxToSortTheLetters = [] //usando const, pois iremos manipular O array e nao a variavel (tem explicacao melhor, isso é algo que eu entendi na pratica e nao na teoria):)
    for(i; i<stringToPrint.length; i++){
        arrayAuxToSortTheLetters.push(stringToPrint[i]);
    }

    arrayAuxToSortTheLetters.sort().map(elementoDoArray => console.log(elementoDoArray));
    
    //usando map
    stringToPrint.split("").map(elementoDoArray => console.log(elementoDoArray)) 
}
const printLetterByLetterSorterComponent = (stringToPrint) => {
    //usando for
    let i = 0; 
    const arrayAuxToSortTheLetters = [] //usando const, pois iremos manipular O array e nao a variavel (tem explicacao melhor, isso é algo que eu entendi na pratica e nao na teoria):)
    for(i; i<stringToPrint.length; i++){
        arrayAuxToSortTheLetters.push(stringToPrint[i]);
    }

    arrayAuxToSortTheLetters.sort().map(elementoDoArray => console.log(elementoDoArray));

    //usando map
    stringToPrint.split("").sort().map(elementoDoArray => console.log(elementoDoArray));
}

// LEMBRANDO QUE...
// Os codigos feitos a cima são só uma das VARIAS solucoes existentes para fazer as funçoes
// Sinta-se livre para procurar outras soluções para engatilhar sua mente com diversas solucoes :)