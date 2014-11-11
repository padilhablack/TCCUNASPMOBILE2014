
//variaveis globais 

var path = "";// caminho padrão
var USERSESSION; // variavel de sessão
var busy =  new WL.BusyIndicator('content', {text : 'Carregando...', boxLength: 255.5});
var CURSO_NOME ="";
var conected = false;

//função inicial
function wlCommonInit(){
	resposive();
	verificaLogin();
	loadAplication("Carregando..");
	
	
	WL.Client.connect({
		onSuccess: onConnectSuccess,
		onFailure: onConnectFailure
	}); 
//	$.mobile.changePage('#notas');
//	$('#header-menu').show();
//	$('#footer-fixed').show();
//	$('.seleciona_curso').hide();
//	$('.cabecalho_cursos').hide();
//	$('.mostra_detalhes_curso').hide();
//	loadAvaliacoes(86539,800,2014,1,'5A800','G1311');
$('.detalhe_disciplina').hide()
$('.arrow-back').hide()
	
	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}

	
	

}


//	$(".children").on("swipeleft",function(){
//		if($(this).attr('id') != login ){
//			var nextpage = $(this).next('div[data-role="page"]');
//			endereco = $(nextpage).attr('id');
//			$.mobile.changePage('#'+endereco, {transition: "slide"},true, true);
//			link = "#link-"+ endereco;
//			active_menu(link);
//		}
//	
//	});
//
//
//
//	$('.children').on("swiperight", function(){
//		var prevpage = $(this).prev('div[data-role="page"]');
//		if ($(prevpage).attr('id') != "login") {
//			endereco = $(prevpage).attr('id');
//			$.mobile.changePage('#'+endereco,  {transition: "slide", reverse: true}, true, true);
//			link = "#link-"+ endereco;
//			active_menu(link);
//		}
//
//	});

	$('.botoes-menu li').click(function(){
		active_menu(this);
	});
	
	







//function saddsasd(id){





//active_menu(this);
//}












