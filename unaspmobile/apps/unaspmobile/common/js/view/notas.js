
/**
 * by Jonas Padilha - UNASPMOBILE
 * view-notas
 * */


var CURSO = "", ANO = "", TURMA = "", PERIODO = "" , DISCIPLINA = "", CURSO_NOME =""; // variaveis globais 

$(document).on('pageinit',function(){
	
	$("#periodo").attr('disabled', true);
	$("#turma").attr('disabled', true);

	$("#curso").bind("change",function(){
		CURSO = parseInt($( this ).val());
		loadPeriodo(USERSESSION.RA,CURSO);
		habilita('periodo');
		
		return false;
	});


	$("#periodo").change(function(){
		$( "#periodo option:selected").each(function() {
			PERIODO = $( this ).val();
			ANO = $( this ).attr('ano');
			loadTurma(USERSESSION.RA,CURSO,ANO,PERIODO);
			habilita('turma');
		});
		return false;
	});



//	$("#turma").change(function(){
//	$( "#turma option:selected" ).each(function() {
//	TURMA = $( this ).val();

//	});
//	return false;
//	});

	$("#turma").change(function(){
		$( "#turma option:selected" ).each(function() {
			TURMA = $( this ).val();
			loadDisciplina(USERSESSION.RA,CURSO,ANO,PERIODO,TURMA);
			loadMedia(USERSESSION.RA,ANO,TURMA,PERIODO);
		});
		return false;
	});

//	$("#disciplina").change(function(){
//	$( "#disciplina option:selected" ).each(function() {
//	DISCIPLINA = $( this ).val();
//	loadMedia(USERSESSION.RA,ANO,TURMA,PERIODO,DISCIPLINA);
//	});
//	return false;
//	});


})
$("#faltas-menu").click(function(){
	loadAulas(RA,CURSO,TURMA,PERIODO,DISCIPLINA);
});




