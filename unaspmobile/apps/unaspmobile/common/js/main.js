
//variaveis globais 

var path = "";// caminho padrão
var USERSESSION; // variavel de sessão
var busyIndicator = null; // icone de loading;
var CURSO_NOME ="";


//função inicial
function wlCommonInit(){
	verificaLogin();
	resposive();
	loadAplication("Carregando..");
	//ajaxLoader('#mostra_detalhes_curso');

	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}
}

$('.botoes-menu li').click(function(){
	active_menu(this);
});








