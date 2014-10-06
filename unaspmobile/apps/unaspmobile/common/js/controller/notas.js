/**
 * by Jonas Padilha - UNASPMOBILE
 * titulo: controller-notas
 * descri��o : func�es que se comunicam com o adpater do banco de dados e
 * devolvem os resultados na tela
 * */


/** PROCEDIMENTO PARA CARREGAR O PERIODO**/ 
function loadPeriodo(ra,curso){
	executaProcedure([ra,curso], 'StoreHTTP', 'retornaPeriodo', loadPeriodoSuccess, loadFailure);
}
function loadPeriodoSuccess(result){
	if (result.invocationResult.array.length > 0) {
		displayPeriodo(result.invocationResult.array);
	}else 
		loadFailure();	 
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
	executaProcedure([ra,curso,ano,periodo], 'StoreHTTP', 'retornaTurma', loadTurmaSuccess, loadFailure);
}
//função de sucesso
function loadTurmaSuccess(result){
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
	 faltas = parseInt(items.falta_matricula_tardia) + parseInt(items.falta_pratica) + parseInt(items.falta_pratica_abadon) + parseInt(items.falta_teorica);
	
	var table = '<table class="ui-responsive" style="width: 100%; padding: 5px;">'+
	'<tbody><tr>'+
	'<td class="campo_nota_titulo">'+items[0].des_diciplina+'</td>'+
	'<td class="campo_nota">'+items[0].valor_nota_teorica+'</td>'+
	'<td class="campo_nota">'+faltas+'</td>'+
	' </tr></tbody></table>';
	mostra_detalhes_curso.html(table);
	
//	teste = JSON.stringify(items[0].des_diciplina);
//	alert(teste);
}


function loadFailure(result){
	rere = JSON.stringify(result);
	alert(rere);

}


