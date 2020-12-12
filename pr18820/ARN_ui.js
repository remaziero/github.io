/* 
 * Web-IO 4.0: MQTT WebSocket example
 ui.js: Faz a conexão entre a página HTML e o cliente MQTT
 */
/*
O ui.js contém as funções que atualizam a representação da página HTML, quando recebe uma mensagem do broker
e que chamam as funções do cliente MQTT após uma interação do usuário na células de saída na página.
*/

/*Atualizando a exibição usando o cliente MQTT */

/* Updates the CSS class of an DOM element 
Usando a função UpdateElement (), o cliente MQTT configura a classe CSS da célula da tabela correspondente 
para o status atual quando uma assinatura é recebida. 
*/
function UpdateElement(ioname, displayClass){
	var cell = document.getElementById(ioname);
	if (cell){
		cell.className = displayClass;
	}
 } 

 /*
6  function UpdateElement(ioname, displayClass){
7	  var cell = document.getElementById(ioname);
8	  if (cell){
9	      cell.className = displayClass;
	  }
	}
Linha 6: A função recebe o ID do elemento DOM e a classe CSS. oonde ioname é INPUT0 ou INPUT1
Linha 9: Esta classe é atribuída ao elemento. 
 */

 