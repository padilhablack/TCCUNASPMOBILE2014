
var UserIdentify;

function onAuthRequired(headers, errorMessage){
	errorMessage = errorMessage ? errorMessage : null;
	return {
		authRequired: true,
		errorMessage: errorMessage
	};
}

function onLogout(){
	WL.Server.setActiveUser("UnaspRealm", null);
	WL.Logger.debug("Logged out");
}

function getStories(ra,senha){
	// CHAMA A PROCEDURE
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : '/unaspserver/login.php?ra='+ra+'&senha='+senha
		};
		
		result =  WL.Server.invokeHttp(input);
	// RECEBE O RESULTADO
	
	
	if(result){
		WL.Logger.debug("Login e senha correta");

		// CRIA UM OBJETO DE IDENTIDADE DO USUÁRIO
		userIdentity = {
				userId: result.RA,
				displayName: result.NOME,
				email : result.EMAIL,
				foto : result.foto,// procurar onde é o servidor das fotos
				attributes: {
					ra: result.RA
				}
		}
		//GRAVA NA SECAO
		WL.Server.setActiveUser("UnaspRealm", userIdentity);
		WL.Logger.debug("Acesso autorizado");

		//RETORNA OS DADOS DO PROCESSO
		return { authRequired : false,userIdentity : userIdentity}
		
		// CASO OCORRER ERRO
	}else if(result.isSuccessful == false){
		WL.Logger.debug("Falha na autenticação");
		return onAuthRequired(null, "Falha na autenticação");
	}
}
// RETORNA O DADOS DA SEÇAO ATIVA
function getUsuarioActive(){
	return {
		user : WL.Server.getActiveUser("UnaspRealm")
	};
}
