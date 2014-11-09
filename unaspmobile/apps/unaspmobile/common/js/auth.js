
// cria um dominio 
var unaspChallengeHandler = WL.Client.createChallengeHandler("UnaspRealm");

unaspChallengeHandler.isCustomResponse = function(response) {
	if (!response || !response.responseJSON	|| response.responseText === null) {
		return false;
	}
	if (typeof(response.responseJSON.authRequired) !== 'undefined'){
		return true;
	} else {
		return false;
	}
};

unaspChallengeHandler.handleChallenge = function(response){
	
	var authRequired = response.responseJSON.authRequired;
	var userSession = response.responseJSON.userIdentity;

	// se autenticacao falhar
	if (authRequired == true){
//		alert(JSON.stringify(authRequired));
		carregado();
		erroMessage("Usuário ou senha incorreta",'messages-error');
		$("#user").val("");
		$("#password").val("");
		unaspChallengeHandler.submitFailure();
		$("#header-menu").hide();
	
		// se autenticacao der certo
	} else if (authRequired == false){
		
		USERSESSION = {
				NOME : userSession.displayName,
				RA : userSession.attributes.ra,
				EMAIL : userSession.email,
				FOTO : userSession.foto
		}
		
		funcoesNecesarias();

	}
};

//envia dados para login
$("#entrar").bind('click', function () {
	var username = $("#user").val();
	var password = $("#password").val();
	if(WL.Client.isConnected()){
	if(username == "" && password == ""){
		erroMessage('Preencha todos os dados','messages-alert');
	}else{
		
		carregar("Enviando..");
		
		var invocationData = {
				adapter : "autenticacaoAdapter",
				procedure : "getStories",
				parameters : [username, password]
		};

		unaspChallengeHandler.submitAdapterAuthentication(invocationData, {
			onSuccess : function(){
				carregado();
			
					funcoesNecesarias();	
			
			},
		});

	}
	}else
	{
		onConnectFailure();
	}
	return false;
});

//faz logout
$(".sair").click(function(){
	
	WL.SimpleDialog.show(
			"Atenção!", "Deseja mesmo sair?.", 
		
			[
			 {text: "NÃO", handler: function() {WL.Logger.debug("Saindo do sistema");WL.SimpleDialog.hide();} 
			 },{text: "SIM", handler: function() {WL.Logger.debug("Saindo do sistema");saiDaSessao();} }]	
	);
	});






