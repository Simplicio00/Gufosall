//Função


// DECLARANDO FUNÇÃO

function soma(numero1,numero2){return numero1 + numero2;}

function multiplicacao(numero1, numero2){var total = numero1 * numero2
return total
}


//variável
    var pessoa = {primeironome: "Lucas", sobrenome: "S.Oliveira", cpf: "0192830454" }

//vetor:
    var carros = ["Uno","Celta", "Siena"];




    // USO DO DOM NO JAVASCRIPT

document.getElementsByTagName('p')

document.getElementById('texto')

document.getElementsByName ('nome') [0]

document.getElementsByClassName ('teste') [0]

document.querySelector(".minhaclasse")


// USO DA CONDIÇÃO IF, EXEMPLO


var mensagem = "";

    if (nomeusuario == "laura"){
    mensagem = "nome igual";
    } else{
    mensagem = "nome diferente";
    }

    document.write(mensagem);
    document.bgColor = "green";


// Exemplo de while com manipulação do dom

var count = 0; 
while (count <= 10){
	document.write(count);
	count++;
}




// USO DA FUNÇÃO DO WHILE COM CONDIÇÃO

var count = 0;
do{
document.write(count);
count++;
} while(count <= 10)



// propriedade for com suas devidas propriedades

for(var i = 0; i <= 10; i++){
    document.write("user");
}


// USO DA LOGICA INDIVIDUAL ALTERNATIVA PARA A VARIÁVEL CARRO

var carro = prompt("Digite o nome do carro");
document.write(carro);
var cor = prompt("Digite o nome da cor do carro"+""+carro);
document.bgColor = (cor);



// USO DA LOGICA INDIVIDUAL PARA APONTAR UMA COR DE ACORDO COM A VARIÁVEL CARRO 


var nomecarro1 = "fox";
var nomecarro2 = "Chevette";




if(nomecarro1 == "fox"){
document.write(nomecarro1);
document.bgColor = "blue";
} else if(nomecarro2 == "baleta"){
document.write(nomecarro2);
document.bgColor = "red";
}else {document.write("deu ruim");}


// .style.color - /fazendo conversão do js pro css na parte de estilização

// innerHtml  // Adicionando html ao js

// appendChild() / função que insere um elemento no filho

// CreateElement cria o elemento html especificado

// exemplo : document.createElement("tr"); Criando uma linha de tabela em html pelo js

//  DOM - é onde ocorrem as alterações via js para html. Representam possíveis caminhos para inserir e alterar as propriedades de uma página web.


// EVENTOS QUE ACONTECEM QUANDO HÁ INTERAÇÃO COM A PÁGINA



// onChange - muda o valor do elemento

// onClick - o elemento é clicado pelo usuário

// onMouseout - define ação quando o usuario retira o mouse de cima da opção

// onMouseMove - define uma ação quando o usuario move o mouse

// onMouseUp - define ação quando o mouse vai para cima

// onKeyUp - define a ação para quando a tecla é solta


// todos estes são eventos em js que ocorrem na interação entre o html e o js.

// o evento executar-se-á no html, ele chama o evento que é formulado no javascript.

// 

// O JAVASCRIPT é conhecido também como ECMA script

// var =  a declaração poderá ser vista pelo escopo global, isto é, dentro ou fora de uma função.

// let = Pode ser usada em escopo de bloco, isto é, pode ser usada apenas em uma função. Só pode ser lida dentro de uma função.

// const - É um campo que agrega o valor e o mantém constante durante uma função. Só pode ser lida dentro de uma função.

// this - Comando utilizado para trazer informação de acordo com o contexto, puxando os valores registrados anteriormente.

// método bind - Cria uma função que está vinculada á uma função específica, que encapsula o objeto de função original.  
// exemplo -->  let nome = funcaoNome // let nomeArtistico = funcaoNome.bind(valor) // nomeApelido = funcaoNome.bind(valor) // 
//  E então poderá ser instanciada a função específica que é baseada noutra.. ex --> nomeArtistico();

// 


// REACT 

// O REACT é uma biblioteca em JavaScript, e possui suas propriedades que estão integradas no comportamento de uma página web em html.

// O REACT usa como base o JavaScript e trabalha diretamente com o front end de uma web, integrada com o html.

// WEBCOMPONENTS - É a capacidade de criar custom tags de html que encapsulam a estrutura(html), estilo(css) e comportamento(javascript) de uma página com recursos integrados.

// O REACT, tem por função, modificar e criar componentes de uma página web.

// O DOM  usado no react utiliza a mesma propriedade do javascript, e não altera diretamente o DOM vindo da base de javascript, somente quando necessário.

// A performance do DOM em REACT é melhorada devido ao virtual DOM, pois ele consegue processar e simular melhor as possibilidades de alteração, e, depois espelhando somente o necessário no DOM da base JS.

// 

// A linguagem do REACT é o JSX, uma mistura entre as linguagens XML, HTML e Css. A linguagem é toda traduzida para o JavaScript.

// BABEL - É o compilador que faz a ponte (tradução) entre o jsx pro javascript, para então, no processo, ser interpretada pelo navegador.

//

// As funções são usadas para contextos estáticos, como  receber o valor em uma interface, e não para o processamento constante de informações.

// As classes fazem os componentes e a parte de renderização, sendo flexível e dinâmica para o processamento de uma página.