
// função que verifica se um arquivo contém null
function verificaDadoExistente(parametro,destino){
	if(parametro == null){
		$(destino).text("");
	}else{
		$(destino).text(parametro);
	}
}


