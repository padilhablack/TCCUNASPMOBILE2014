

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

	if (authRequired == true){
//		alert(JSON.stringify(authRequired));
		alert("Usuário ou senha incorreta");
		$("#user").val("");
		$("#password").val("");
		unaspChallengeHandler.submitFailure();


	} else if (authRequired == false){

		USER = {
				NAME : userSession.displayName,
				RA : userSession.attributes.ra
		}
		
		RA  = parseInt(USER.RA), USUARIO = USER.NAME
		
		WL.Client.reloadApp();
//		alert(JSON.stringify(RA));
		$.mobile.changePage("#perfil");
		$("#display-name-user").text(USUARIO);
		$( "#login" ).show();
		unaspChallengeHandler.submitSuccess();
		
	}
};

//envia dados para login
$("#entrar").bind('click', function () {
	var username = $("#user").val();
	var password = $("#password").val();
	
	if(username == "" || password == ""){
		showAlert("alert-error","Digite os dados corretamente!");
		$("#user").val("");
		$("#password").val("");
	}
	
	var invocationData = {
			adapter : "autenticacaoAdapter",
			procedure : "getStories",
			parameters : [username, password]
	};

	unaspChallengeHandler.submitAdapterAuthentication(invocationData, {});
	return false;
});
//faz logout

$(".sair").click(function(){
	loading("show-page-loading-msg","Saindo..");
	WL.Client.logout('UnaspRealm', {onSuccess:function(){
		setTimeout(function(){sair()}, 5000);
	}});
	
	function sair(){
		$.mobile.loading( "hide" );
		$.mobile.changePage("#login");
		WL.Client.reloadApp();
		
	}
	
});

$("#desligar").click(function(){
	loading("show-page-loading-msg","Saindo..");
	WL.Client.logout('UnaspRealm', {onSuccess:function(){
		setTimeout(function(){sair()}, 5000);
	}});
	
	function sair(){
		$.mobile.loading( "hide" );
		WL.App.close();
	}
	
});



