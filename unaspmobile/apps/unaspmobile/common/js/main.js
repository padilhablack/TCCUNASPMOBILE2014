
//variaveis globais 

var path = "";// caminho padrão
var USERSESSION; // variavel de sessão
var busyIndicator = null; // icone de loading;
var CURSO_NOME =""


//função inicial
function wlCommonInit(){

	verificaLogin();
	resposive();
	
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}
	
}

function funcoesNecesarias(){
	verificaDadoExistente(USERSESSION.NOME,"#display-name-user");
	verificaDadoExistente(USERSESSION.EMAIL,"#display-email-user");
	loadPerfil(USERSESSION.RA);
	loadFinanceiro(USERSESSION.RA,'all');
	loadFinanceiro(USERSESSION.RA,'option');
	$.mobile.changePage("#perfil");
	$("#header-menu").show();
}
