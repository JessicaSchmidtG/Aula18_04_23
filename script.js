/*let array;
console.log('a. ', array);//undefined

array = null;
console.log('b. ', array);//null

array =[3,4,5,6,7,8,9,10,11,12,13];
console.log('c. ', array.length);//11

let i = 0
console.log('d. ',array[i]);//3

array[i+1] = 19
console.log('e. ',array);//1=19

const valor = array[i+6];
console.log('f. ', valor);//9

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
//VII TER PROVI! 14

//1. Faça um programa que pergunte ao usuário seu nome
//e seu e-mail. Emseguida, Imprima no console a seguinte mensagem:
//O e-mail 'emailDoUsuario' foi cadastrado com sucesso.
//Seja bem-vinda(o), 'nomeDoUsuario'!
let nomeUsuario = prompt("Qual seu nome?");
let emailUsuario = prompt("Qual seu e-mail?");
console.log("O e-mail "+emailUsuario+" foi cadastrado com sucesso!");
alert("O e-mail "+emailUsuario+ " foi cadastrado com sucesso!");
console.log("Seja bem-vinda(o)", nomeUsuario, "!");
alert("Seja bem-vinda(o) "+nomeUsuario+" !");
*/
//3.Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variavel, chamada "listaDeTarefas"
let array;
let listaDeTarefas = array;
//b)Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
array = [prompt("Digite a tarefa número 0: "), prompt("Digite a tarefa número 1: "), prompt("Digite a tarefa número 2: ")]
//c)Imprima o array no console
console.log(array);
//d)Peça ao usuário que digite o **indice** de uma tarefa
//que ele já realizou: 0, 1 ou 2
i = prompt("Digite o numero da tarefa que você já realizou: ")
//e)Remova da lista o item de indice que o usuário escolheu
array.splice(i,1)
//f)Imprima o array no console
console.log(array);

//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
/*2. Dado o array '[Banana", "Morango", "Abacaxi","Laranja", "Ameixa"]', 
faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
*/
//3.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida siga os passos
//a)Imprima no console o array completo
//b)Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, *uma embaixo da outra*
//c)Aqui vai um desafio:pergunte