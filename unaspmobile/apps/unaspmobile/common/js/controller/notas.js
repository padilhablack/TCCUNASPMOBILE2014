/**
 * by Jonas Padilha - UNASPMOBILE
 * titulo: controller-notas
 * descri��o : func�es que se comunicam com o adpater do banco de dados e
 * devolvem os resultados na tela
 * */


/** PROCEDIMENTO PARA CARREGAR O PERIODO**/ 
function loadPeriodo(ra,curso){
	this.busy.show();
	executaProcedure([ra,curso], 'StoreHTTP', 'retornaPeriodo', loadPeriodoSuccess, loadFailure);
}
function loadPeriodoSuccess(result){
	if (busy.isVisible()) {
		busy.hide();
	};
	if (result.invocationResult.array.length > 0) {
		displayPeriodo(result.invocationResult.array);
	}	 
}

function displayPeriodo(items){
	var selectPeriodo = $('#periodo');  
	var optionpadrao = $('<option/>').html("Periodo").attr('selected','selected');
	selectPeriodo = $('#periodo').empty();
	selectPeriodo.append(optionpadrao);

	for (var i = 0; i < items.length; i++) {
		var li = $('<option/>').html(items[i].descricao).val(items[i].id_periodo).attr('ano',items[i].ano_letivo);

		selectPeriodo.append(li);
	}
}

/**PERIODO**/ 


/**TURMA**/ 

function loadTurma(ra,curso,ano,periodo){
	this.busy.show();
	executaProcedure([ra,curso,ano,periodo], 'StoreHTTP', 'retornaTurma', loadTurmaSuccess, loadFailure);
}
//função de sucesso
function loadTurmaSuccess(result){
	if (busy.isVisible()) {
		busy.hide();
	};
	if (result.invocationResult.array.length > 0) {
		displayTurma(result.invocationResult.array);
//		alert(result.invocationResult.array);
	}else 
		loadFailure();	 
}
//Mostra no Option
function displayTurma(items){
	var selectTurma = $('#turma');   
	for (var i = 0; i < items.length; i++) {
		var li = $('<option/>').html(items[i].descricao).val(items[i].id_turma);
		$('#turma option:eq(1)').remove();
		selectTurma.append(li);
	}
}
/**TURMA**/ 


/** PROCEDIMENTO PARA CARREGAR DISCIPLINA**/ 
function loadDisciplina(ra,curso,ano,periodo,turma){
	ajaxLoader('#mostra_detalhes_curso');
	executaProcedure([ra,curso,ano,periodo,turma], 'StoreHTTP', 'retornaDisciplina', loadDiscilinaSuccess, loadFailure);
}
function loadDiscilinaSuccess(result){

	if (result.invocationResult.array.length > 0) {
		displayDisciplina(result.invocationResult.array);
	}else 
		loadFailure();	 
}

//Mostra no Option
function displayDisciplina(items){
	$('.cabecalho_cursos').show();
	var selectDisciplina = $('#disciplina'), optionpadrao = $('<option/>').html("");
	selectDisciplina = $('#disciplina').empty();
	selectDisciplina.append(optionpadrao);
	for (var i = 0; i < items.length; i++) {
		var li = $('<option/>').html(items[i].nome_disciplina).val(items[i].id_disciplina);
		selectDisciplina.append(li);
	}
}
/** FIM PROCEDIMENTO DISCIPLINA**/ 


/** PROCEDIMENTO PARA CARREGAR NOTAS*/ 
function loadMedia(ra,ano,turma,periodo){
	
	executaProcedure( [ra,ano,turma,periodo], 'StoreHTTP', 'retornaMedia', loadMediaSucess, loadFailure);
}
//função de sucesso
function loadMediaSucess(result){
	displayMedias(result.invocationResult.array);
}

//Mostra no Option
function displayMedias(items){
	var mostra_detalhes_curso  = $('#mostra_detalhes_curso'); 
	var table = "<table class='ui-responsive' style='width: 100%; padding: 5px;'><tbody>";
	var faltas = "";
	for (var  i = 0 ; i < items.length; i ++){
		notas = items[i].valor_nota_teorica ? items[i].valor_nota_teorica : "--";
		faltas = parseInt(items[i].falta_matricula_tardia) + parseInt(items[i].falta_pratica) + parseInt(items[i].falta_pratica_abadon) + parseInt(items[i].falta_teorica);
		table += "<tr>"+
		"<td class='campo_nota_titulo' id='"+items[i].cod_disciplina+"' ><a style='color: rgba(0, 0, 0, 0.76)'>"+items[i].des_diciplina+"</a></td>"+
		"<td class='campo_nota'>"+notas+"</td>"+
		"<td class='campo_nota' id='campo_faltas'>"+faltas+"</td>"+
		' </tr>';
		
		
		
	}
	
	table += '</tbody></table>';
	
	mostra_detalhes_curso.html(table);
	
	$("#nome_curso_section").text(CURSO_NOME);
	$('.cabecalho_cursos').css('display','block');
	
	$('.campo_nota_titulo').click(function(){
		ajaxLoader('.detalhes');
		loadAvaliacoes(USERSESSION.RA, CURSO, ANO, PERIODO, TURMA,$(this).attr('id'));
		$('.seleciona_curso').css('display','none');
		$('.detalhe_disciplina').show();
		$('.arrow-back').show();
	});
	
$('.arrow-back').click(function(){
	$('.seleciona_curso').css('display','block');
	$('.detalhe_disciplina').hide()
	$('.arrow-back').hide()
	})
	
	
//	teste = JSON.stringify(items[0].des_diciplina);
//	alert(teste);
}

/** PROCEDIMENTO PARA CARREGAR Avaliações*/

function loadAvaliacoes(ra, curso, ano, periodo, turma,disciplina){
	executaProcedure( [ra, curso, ano, periodo, turma,disciplina], 'StoreHTTP', 'retornaAvaliacoes', loadAvaliacoesSucess, loadFailure);
} 

function loadAvaliacoesSucess(result){

	detalhesAvaliacoes(result.invocationResult.array);

}
function detalhesAvaliacoes(response){
	var table =	"";
		for (var  i = 0 ; i < response.length; i ++){
			table += '<tr>'+
						'<td>'+response[i].data+'</td>'+
						'<td>'+response[i].descricao+'</td>'+
						'<td>'+response[i].nota+'</td>'+
						'<td>'+response[i].peso+'</td>'+
				  '</tr>';
		}
		
		table += "</tbody></table>";
		$(".detalhes").html(table);
}

function loadFailure(result){
	if (busy.isVisible()) {
		busy.hide();
	};
}


