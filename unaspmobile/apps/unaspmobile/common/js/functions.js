
//VERIFICA SE UM ARQUIVO E NULL
function verificaDadoExistente(parametro,destino){
	if(parametro == null){
		$(destino).text("");
	}else{
		$(destino).text(parametro);
	}
}

//FUNÇÃO PARA EXECUTAR PROCEDURES NOS ADAPTERS
function executaProcedure(pametros, adapter, procedure, sucess, failure){
	var invocationData = {
			adapter : adapter, 
			procedure : procedure,
			parameters : pametros,
	};
	WL.Client.invokeProcedure(invocationData,{
		onSuccess : sucess,
		onFailure : failure
	});

}

//FIXA ALGUMAS DIVS RELATIVAS AO SEU ESPAÇO
function resposive(){
	// fixa o o titulo do header abaixo de header total
	var valor = $("#header-menu").height();

	var valorTotal = valor * 2 - 83;
	tamanho_login = $('.ui-mobile-viewport').height();
	asdasd = $('.header-pages').height() + valor;

	dfgdfgdfg = (tamanho_login -valorTotal) - 150;

	
	back_login_image = tamanho_login / 2.3;
	
	content = $('#conteudo-financeiro').css('height');
	bar = $('.bar a img').height();
	
	
	
	$('.back-login img ').css('height',back_login_image);
	$('.header-pages').css('margin-top',valor);
	$('.content-unaspmobile ').css('margin-top',valorTotal);
	$('.content-unaspmobile ').css('max-height',dfgdfgdfg);

	dsfsdfsdf = back_login_image - 70
	$('.logo img').css('width',dsfsdfsdf);
}

// HABILITA ELEMENTO DO OPTION
function habilita (elemento){
	$("#"+elemento+"-button").attr('aria-disabled', true).removeClass('ui-state-disabled');
	$("#"+elemento+"-button span").removeClass('ui-disabled');
	$("#"+elemento+"").attr('disabled', false);
}

//VERIFICA SE HÁ UMA SESSÃO ATIVA
function verificaLogin(){
	 executaProcedure([], 'autenticacaoAdapter', 'getUsuarioActive', 	 
	//sucesso
	 function(result){
		 var useractive = result.invocationResult.user; 	// recebe dados do usuario ativo
			var useractive = result.invocationResult.user; 	// recebe dados do usuario ativo
			if(useractive !== null ){ // se os dados do usuario ativo não estiverem vazios
				// grava os dados na sessão
				USERSESSION = { 
						//parametros da variavel
						RA : useractive.userId,
						NOME : useractive.displayName,
						EMAIL : useractive.email,
						FOTO : useractive.foto
				}
				
				funcoesNecesarias();
		
			}else{
				$("#header-menu").hide();
				$.mobile.changePage("#login"); // função de erro
			}
	 }, 
	 
	 //falha 
	 function(){
			// colocar tratamento de errro.
	 });
}

//LOADING DE ENTRADA

function loadAplication(texto){
	carregar(texto);
	setTimeout(function(){
		carregado();	
	},8000);
}

function logoutAplication(texto){
	carregar(texto);
	setTimeout(function(){
		WL.App.close();	
	},8000);
}



function carregar(texto){
	$('#form').hide();
		$('#footer-fixed').css('display','none');
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
	$('#form').show();
	$('#footer-fixed').css('display','block');
	$('#footer-fixed').show();
	$('.bar').show();
	$(".loadMobile").hide(1000);
}
///LOADING DE ENTRADA


// carregamento após login
function funcoesNecesarias(){
	verificaDadoExistente(USERSESSION.NOME,"#display-name-user");
	verificaDadoExistente(USERSESSION.EMAIL,"#display-email-user");
	loadPerfil(USERSESSION.RA);
	loadFinanceiro(USERSESSION.RA,'option','');
	loadFinanceiro(USERSESSION.RA,'all','');
	active_menu('.botoes-menu li:eq(2)');
	$('#footer-fixed').show();
	$('.bar').show();
	$.mobile.changePage("#perfil");
	$("#header-menu").show();
}


//NAVEGAÇÃO DO MENU(MUDA O EFEITO QUANDO CLICKADO UM MENU DO HEADER-MENU)
function active_menu(elemento){
	var opo = $(elemento).find('img'),
	index = $(elemento).index(),
	image = $(opo).attr('name'), 
	tamanho = $('.botoes-menu li a img').size();
	for(var i = 1 ; i < tamanho; i++){
		if(index > 1){
			name = $('.botoes-menu li a img :eq('+i+')').attr('name');
			$('.botoes-menu li a img :eq('+i+')').attr('src','images/icones/'+name+'.png');
		}
	}
	if(index == 2){
		$('.effect').css('left','20%%');
	}if(index == 3){
		$('.effect').css('left','39%');
	}else if(index == 4){
		$('.effect').css('left','59%');
	}
	else if(index == 5){
		$('.effect').css('left','80%');
	}
	$(opo).attr('src','images/icones/active/'+image+'.png');
	
}

//MOSTRA MENSAGENS DE ERRO E DE ALERTA
function erroMessage(texto,classe){
	if(classe == 'messages-alert'){
		$('.messages').removeClass("messages-error");
	}else{
		$('.messages').removeClass("messages-alert");
	}
	$('.messages p').text(texto);
	$('.messages').slideDown("slow").addClass(classe);
	setTimeout(function(){
		$('.messages').slideUp("slow");
	}, 5000);
}

// FAZ LOGOU NO SISTEMA
function saiDaSessao(){
	WL.Client.logout('UnaspRealm', {onSuccess:function(){
		$('#form').hide();
		$('#header-menu').hide();
		$('#footer-fixed').hide().css('background-color','#022b5b');
		$('.bar').hide();
		USERSESSION = null;
		$.mobile.changePage("#login");
		logoutAplication("Saindo..");
	
	}});

}

//MOSTRAR ANIMAÇÃO AO CARREGAR DADOS
function ajaxLoader(elemento){
	var html = "<div id='ajax-loader'>"+
	"<img src='images/ajax.GIF'>"+
	"</div>";
	$(elemento).html(html);
}

// RESETA O SISTEMA
function reset(){
	WL.Client.reloadApp();
	$('#cursos-matriculados ul').html("");
	$("#user").val("");
	$("#password").val("");
	$("#curso").selectmenu('refresh');
	$("#periodo").selectmenu('refresh');
	$("#turma").selectmenu('refresh');
	$("#cabecalho_cursos").hide();
	$("#mostra_detalhes_curso").hide();

}

function onConnectSuccess(){
	WL.Logger("conexao estabelecida");
	conected = true;
}


function onConnectFailure(){
//	var busyInd = new WL.BusyIndicator('content', {text : "Erro ao conectar com o servidor..<button action=>'Sair()'</button>", boxLength: 255.5});
//busyInd.show();
	WL.SimpleDialog.show(
			"ERRO!", "Erro ao conectar com o servidor! Verifique a sua conexão.", 
			[{text: "Tente Novamente", handler: function() {WL.Logger.debug("First button pressed"); WL.Client.reloadApp();} }]
		);
}





