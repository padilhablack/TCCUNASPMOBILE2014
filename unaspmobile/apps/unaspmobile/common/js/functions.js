
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
	var valor2 = $('.header-pages').height();
	var valorTotal = valor * 2 - 83;
	var valorfooter = $('#footer-fixed').height();
	$('.header-pages').css('margin-top',valor);
	$('.content-unaspmobile ').css('margin-top',valorTotal);
}

function habilita (elemento){
	$("#"+elemento+"-button").attr('aria-disabled', true).removeClass('ui-state-disabled');
	$("#"+elemento+"-button span").removeClass('ui-disabled');
	$("#"+elemento+"").attr('disabled', false);
}

//função que verfica o login
function verificaLogin(){
	var invocationData = { // parametros para execução da função no adapter
			adapter : 'autenticacaoAdapter', // adapter
			procedure : 'getUsuarioActive',// procedure do adapater
			parameters : [] // parametros
	};

	WL.Client.invokeProcedure(invocationData,{
		onSuccess : function(result){
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
		onFailure : function(){
			// colocar tratamento de errro.
		} 
	});
}

//NAVEGAÇÃO DO MENU
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

//MOSTRA MENSAGEM DE ERRO
function erroMessage(texto,classe){
	$('.messages p').text(texto);
	$('.messages').slideDown("slow").addClass(classe);
	setTimeout(function(){
		$('.messages').slideUp("slow");
	}, 5000);
}


function saiDaSessao(){
	WL.Client.logout('UnaspRealm', {onSuccess:function(){
		setTimeout(function(){
			$.mobile.changePage("#login");
			$("#header-menu").hide();
			$('#footer-fixed').show();
			$('.bar').show();
			reset();
		}, 2000);
	}});

}

//MOSTRAR ANIMAÇÃO AO CARREGAR DADOS
function ajaxLoader(elemento){
	var html = "<div id='ajax-loader'>"+
	"<img src='images/ajax.GIF'>"+
	"</div>";
	$(elemento).html(html);
}

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



