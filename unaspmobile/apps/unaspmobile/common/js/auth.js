
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
	
	if(username == "" && password == ""){
		erroMessage('Preencha todos os dados','messages-alert');
	}else{
		var invocationData = {
				adapter : "autenticacaoAdapter",
				procedure : "getStories",
				parameters : [username, password]
		};

		unaspChallengeHandler.submitAdapterAuthentication(invocationData, {});
		return false;
	}
	
});

//faz logout
$(".bar").click(function(){
	saiDaSessao();
	});






