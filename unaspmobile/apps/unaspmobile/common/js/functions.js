
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
	var valor2 = $('.header-pages').height();
	var valorTotal = valor * 2 - 83;
	var valorfooter = $('#footer-fixed').height();
	$('.header-pages').css('margin-top',valor);
	$('.content-unaspmobile ').css('margin-top',valorTotal);
	
}

function habilita (elemento){
	$("#"+elemento+"-button").attr('aria-disabled', true).removeClass('ui-state-disabled');
	$("#"+elemento+"-button span").removeClass('ui-disabled');
	$("#"+elemento+"").attr('disabled', false);

}

