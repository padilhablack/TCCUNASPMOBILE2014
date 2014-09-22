
var path = "";// caminho padrão
var USER;
var RA , USUARIO;
var busyIndicator = null;

function wlCommonInit(){
	
	verificaLogin();
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}
		
}


function verificaLogin(){
	var invocationData = {
			adapter : 'autenticacaoAdapter',
			procedure : 'getUsuarioActive',
			parameters : []
		};
	
	WL.Client.invokeProcedure(invocationData,{
		onSuccess : loadFeedsSuccess,
		onFailure : loadFeedsFailure
	});
}


function loadFeedsSuccess(result){

	var Status = result.status, 
	RA = result;
	
			teste = JSON.stringify(result);
			RA = result.userId; 
		alert(teste);

		
		USUARIO  = result.displayName;
}

function loadFeedsFailure(){
	alert("Jonas não foi");
}







