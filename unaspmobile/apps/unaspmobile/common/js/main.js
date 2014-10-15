
//variaveis globais 

var path = "";// caminho padrão
var USERSESSION; // variavel de sessão
var busyIndicator = null; // icone de loading;
var CURSO_NOME ="";


//função inicial
function wlCommonInit(){

	verificaLogin();
	resposive();
	loadAplication("Carregando...");
	//ajaxLoader('#mostra_detalhes_curso');

	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}

}

function funcoesNecesarias(){
	verificaDadoExistente(USERSESSION.NOME,"#display-name-user");
	verificaDadoExistente(USERSESSION.EMAIL,"#display-email-user");
	loadPerfil(USERSESSION.RA);
	loadFinanceiro(USERSESSION.RA,'all','');
	loadFinanceiro(USERSESSION.RA,'option');
	$.mobile.changePage("#perfil");
	$("#header-menu").show();
	active_menu('.botoes-menu li:eq(2)');
	$('#footer-fixed').show();
	$('.bar').show();
}

$('.botoes-menu li').click(function(){
	active_menu(this);
});


function carregar(texto){
	$('#form').hide();
	$('#footer-fixed').hide();
	$('.bar').hide();
	$(".loadMobile").fadeIn(3000);
	$(".loadMobile h3").text(texto);
	function mostradf(){
		$(".loadMobile h3").fadeIn("slow");
		$(".loadMobile h3").fadeOut("slow");
	}
	setInterval(function(){mostradf()},2000);
}

function carregado(){
	$('#form').show('slow');
	$('#footer-fixed').show();
	$('.bar').show();
	$(".loadMobile").hide('slow');
}

function loadAplication(texto){
	texto
	carregar(texto);
	setTimeout(function(){
		carregado();	
	},8000);
}







