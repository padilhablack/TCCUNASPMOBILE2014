
// função que verifica se um arquivo contém null
function verificaDadoExistente(parametro,destino){
	if(parametro == null){
		$(destino).text("");
	}else{
		$(destino).text(parametro);
	}
}


function executaProcedure(pametros, adapter, procedure, sucess, failure){
	var invocationData = {
			adapter : adapter, 
			procedure : procedure,
			parameters : pametros, 

	};
	WL.Client.invokeProcedure(invocationData,{
		onSuccess : sucess,
		onFailure : failure
	});

}

function resposive(){
	// fixa o o titulo do header abaixo de header total
	var valor = $("#header-menu").height();
	var valorContent = valor + $('.header-pages').height();
	$('.header-pages').css('margin-top',valor);
	$('.content-unaspmobile').css('margin-top',valorContent);
}


