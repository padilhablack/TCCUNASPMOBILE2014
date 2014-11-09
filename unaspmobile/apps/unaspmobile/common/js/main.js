
//variaveis globais 

var path = "";// caminho padrão
var USERSESSION; // variavel de sessão
var busyIndicator = null; // icone de loading;
var CURSO_NOME ="";
var conected = false;

//função inicial
function wlCommonInit(){

	verificaLogin();
	resposive();
	loadAplication("Carregando..");
	
	
	WL.Client.connect({
		onSuccess: onConnectSuccess,
		onFailure: onConnectFailure
	}); 

	if (WL.Client.getEnvironment() == WL.Environment.WINDOWS_PHONE_8) {
		path = "www/default/";
	}
}

//
//	// verifica se há conexão/
//
//	$(".children").on("swipeleft",function(){
//		if($(this).attr('id') != login ){
//			var nextpage = $(this).next('div[data-role="page"]');
//			endereco = $(nextpage).attr('id');
//			$.mobile.changePage('#'+endereco, {transition: "slide"},true, true);
//			link = "#link-"+ endereco;
//			active_menu(link);
//		}
//		return false;
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
//		return false;
//	});

	$('.botoes-menu li').click(function(){
		active_menu(this);
	});
	

	






//function saddsasd(id){





//active_menu(this);
//}












