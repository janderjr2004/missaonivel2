function TryParseInt(str) {
    var retValue = 0;
    if(str !== null && str != undefined) {
        if(str.length > 0) {
            if (!isNaN(str)) {
                retValue = parseInt(str);
            }
        }
    }
    return retValue;
}

/** Troca os valores de 2 posições de um vetor
 @param vetor Vetor que irá realizar as trocas
 @param posicoes Posições
*/
swap = (vetor, posicoes) => {
}

/** Embaralha os elementos de um vetor
@param vetor Vetor em que ocorrerá as trocas
@param qtdTrocas Quantidade de trocas
*/
shuffle = (vetor, qtdTrocas) => {
}

/** Ordena valores do vetor */
bubble_sort = (vetor) => {
}

/** Ordena valores do vetor */
selection_sort = () => {
}

/** Ordena vetor */
quick_sort = (vetor, posicao_inicial, posicao_final) => {
}

/** Função apoio ao quick_sort */
particionamento = (vetor, posiciao_inicial, posiciao_final, valor_pivot) => {
}

/** Funcoes do trecho scripts no html */
function add() {
 
 var valorCampo = document.getElementById("valor").value;
 
 var listaValores = document.getElementById("valores");
 
 var node = document.createElement('li');  
 node.innerHTML = valorCampo;
 
 listaValores.appendChild(node);
}

function ordenar() {

 var listaValores = document.getElementById("valores");
 
 var ordenacaoSelecionada = document.getElementById("opcao_ordenacao").selectedIndex;
 
 var meu_vetor = [];
 listaValores.childNodes.forEach(li => {
    var resultado_parse = TryParseInt(li.innerText);
    if (resultado_parse > 0)
        meu_vetor.push(li.innerText.toString());
        console.log(meu_vetor)
 });

// console.log('Meu Vetor: ' + JSON.stringify(meu_vetor)) 

 switch (ordenacaoSelecionada) {
 
     case 0:
       bubble_sort(meu_vetor);
   break;
   
   case 1:
       selection_sort();
   break;
   
   case 2:
       quick_sort(meu_vetor, 1, 2);
   break;
 
 }
}

function misturar() {
   var listaValores = document.getElementById("valores");
   //debugger;
   var ordenacaoSelecionada = document.getElementById("opcao_ordenacao").selectedIndex;

   var meu_vetor = [];
   function shuffle(a) {
       let n = a.length;
       for (let i = 0; i < n; i++) {
           let swap = i + Math.floor(Math.random() * (n - i - 1));
           let aux = a[i];
           a[i] = a[swap];
           a[swap] = aux;
       }
   }
   
   let array = [listaValores];
   shuffle(array);
   for (let i = 0; i < array.length; i++) console.log(array[i]);
}