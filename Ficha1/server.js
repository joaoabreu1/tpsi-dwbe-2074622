// // entradas
// //var p1 = 9;
// //var p2 = 7;
// //var freq = 1;


//função para calcular a nota final com validação de valores
// function calculateGrade(p1, p2, freq) {
//     var nf = (p1 * 0.30) + (p2 * 0.40) + (freq * 0.30)

//     console.log("A nota final é: " + nf); //imprime o valor da nota final

//     if (nf >= 9.5)
//         console.log("Aluno Aprovado \n");
//     else
//         console.log("Aluno Reprovado \n");

// }

//chama a função com os valores pretendidos
// calculateGrade(12, 12, 12)
// calculateGrade(8, 10, 7)
// calculateGrade(19, 18, 19)
// calculateGrade(12, 12, 12)










// function calcmes(mes) {

//     switch (mes) {
//         case 1:
//             console.log("Janeiro");
//             break;
//         case 2:
//             console.log("Fevereiro");
//             break;
//         case 3:
//             console.log("Março");
//             break;
//         case 4:
//             console.log("Abril");
//             break;
//         case 5:
//             console.log("Maio");
//             break;
//         case 6:
//             console.log("Junho");
//             break;
//         case 7:
//             console.log("Julho");
//             break;
//         case 8:
//             console.log("Agosto");
//             break;
//         case 9:
//             console.log("Setembro");
//             break;
//         case 10:
//             console.log("Outubro");
//             break;
//         case 11:
//             console.log("Novembro");
//             break;
//         case 12:
//             console.log("Dezembro");
//             break;
//         default:
//             console.log("Insira um mês válido.");
//     }
// }

// calcmes(1);

function calcular(num1, num2, op)
{
    var soma = num1 + num2;
    var sub = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;

    if (op == "+") {
    console.log("Soma: " + soma);
    }
    else if (op == "-") {
    console.log("Subtração: " + sub);
    }
        else if (op == "*") {
        console.log("Multiplicação: " + mult);
        }
            else if (op == "/") {
            console.log("Divisão: " + div);
            }
                else {
                    console.log("Operação inválida");
                }   
}

calcular(10, 5, "/");
calcular(10, 5, "*");
calcular(10, 5, "-");   
calcular(10, 5, "+");
