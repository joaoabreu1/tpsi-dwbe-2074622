//função para calcular a nota final com validação de valores
function calculateGrade(p1, p2, freq) {
    var nf = (p1 * 0.30) + (p2 * 0.40) + (freq * 0.30)

    console.log("A nota final é: " + nf); //imprime o valor da nota final

    if (nf >= 9.5)
        console.log("Aluno Aprovado \n");
    else
        console.log("Aluno Reprovado \n");

}

// //chama a função com os valores pretendidos
// calculateGrade(12, 12, 12)
// calculateGrade(8, 10, 7)
// calculateGrade(19, 18, 19)
// calculateGrade(12, 12, 12)










function calcmes(mes) {

    switch (mes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("Insira um mês válido.");
    }
}

// console.log(calcmes(1));





function calcular(num1, num2, op)
{
    var soma = num1 + num2;
    var sub = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;

    if (op == "+")
        {
            console.log("Soma: " + soma);
        }
        else if (op == "-") 
            {
                console.log("Subtração: " + sub);
            }
            else if (op == "*") 
                {
                    console.log("Multiplicação: " + mult);
                }
                else if (op == "/") 
                    {
                        console.log("Divisão: " + div);
                    }
                    else 
                        {
                            console.log("Operação inválida");
                        }   
}

// console.log(calcular(10, 5, "/"));
// console.log(calcular(10, 5, "*"));
// console.log(calcular(10, 5, "-"));   
// console.log(calcular(10, 5, "+"));





function multiplo(num) 
{
    while (num <= 20) {
        if (num % 5 == 0) {
            contador = 1
            console.log(contador + " * " + num + " = " + num);
        }
        contador++;
        num++;
    }
    return num;
}

// console.log(multiplo(5));






function somaint(limite)
{
    var soma = 0;

    for (var i = 0; i <= limite; i++) 
    {
        soma += i;
    }

    return(soma);
}

// console.log(somaint(5));




function frac(num){
    
    factorial = 1;
    for (var i=num; i>=1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

// console.log(frac(10));





var array = [2, 3, 5, 10];

array.push(7); //adiciona um elemento ao array
array.pop(7); //remove o último elemento do array

var size = array.length; //tamanho do array

var firstElem = array[0]; //primeiro elemento do array
var firstElem = array[array.length - 1]; //ultimo elemento do array




function min(array) {
    var index = 1;
    var m = array[0];

    while (index < array.length){
        if (m > array[index]){
            m = array[index];
        }
        index++;
    }
    return m; //retorna o valor mais baixo
}

console.log("O valor mínimo no array: [" + array + "] é: " + min(array));

function max(array) {
    var index = 1;
    var m = array[0];

    while (index < array.length){
        if (m < array[index]){
            m = array[index];
        }
        index++;
    }
    return m; //retorna o valor mais alto
}

console.log("O valor máximo no array: [" + array + "] é: " + max(array));


function med(array) {
    var index = 1;
    var m = array[0];

    while (index < array.length){
        m += array[index];
        index++;
    }

    var med = m / array.length
    return med; //retorna o valor da média
}

console.log("O valor da média no array: [" + array + "] é: " + med(array));
