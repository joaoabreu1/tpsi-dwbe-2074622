function reverseWords(str){

    var reversedStr = "";
    var splittedStr = str.split(" ");

    for (let i = 0; i < splittedStr.length; i++){

        const word = splittedStr[i];

        for (let j = word.length - 1; j >= 0; j--){
            // console.log(word[j])
            reversedStr += word[j];
        }

        // console.log(" ")
        reversedStr += " ";
    }

    return reversedStr;

}

// console.log(reverseWords("Hoje e Domingo"));


function contaletra(str){ // função para contar vogais de uma determinada frase

    str = str.toLowerCase(); // converte a string para minúsculas
    var contador = 0; // conta o número de vogais presentes na string


    for (let i = 0; i < str.length; i++){

        const letter = str[i];

        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){

            contador+=i;
        }

    }

    return contador;
}

// console.log(contaletra("Ola"));


function countChar(str, char){
    var count = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++){
        if(str[i] == char){ // condição que verifica se determinado caracter (char) existe na string e se existir, quantas vezes existe.
            count++;
        }
    }
    
    return count; // retorna o valor de quantas vezes o char existe na string
}

// console.log(countChar("OlaOlaOla", "o"));



function criaRetangulo(largura, altura){ // criar um retângulo
    
    var linha = ""; // variável para determinar a largura da coluna
    for (i = 0; i < largura; i++){
        linha += "*";
    }
    for (j = 0; j < altura; j++){
        console.log(linha);
    }

}

// criaRetangulo(10,10);


function criaTriangulo(largura, altura){ // criar um triangulo

    var linha = ""; // variável para determinar a largura da coluna

    for (i = 0; i < largura; i++){
        linha += "*";
        console.log(linha);
    }
    
}

// criaTriangulo(10,10);


