
//variaveis globais 

var path = "";// caminho padrão
var USERSESSION; // variavel de sessão
var busyIndicator = null; // icone de loading;
var CURSO_NOME =""


//	função inicial
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
	active_menu('.botoes-menu li:eq(2)');
}

$('.botoes-menu li a img').click(function(){

	
})

$('.botoes-menu li').click(function(){
	index = $(this).index();
	if(index == 1){
		$('.effect').css('left','20%');
	}else if(index == 2){
		$('.effect').css('left','20%%');
	}if(index == 3){
		$('.effect').css('left','39%');
	}else if(index == 4){
		$('.effect').css('left','59%');
	}
	else if(index == 5){
		$('.effect').css('left','80%');
	}

	active_menu(this);

})

function active_menu(elemento){
opo = $(elemento).find('img');
	
	var image = $(opo).attr('name'), 
	tamanho = $('.botoes-menu li a img').size();
	for(var i = 1 ; i < tamanho; i++){

		name = $('.botoes-menu li a img :eq('+i+')').attr('name');
		$('.botoes-menu li a img :eq('+i+')').attr('src','images/icones/'+name+'.png');

	}
	$(opo).attr('src','images/icones/active/'+image+'.png');


}



