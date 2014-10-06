
/**
 * by Jonas Padilha - UNASPMOBILE
 * view-notas
 * */


var CURSO = "", ANO = "", TURMA = "", PERIODO = "" , DISCIPLINA = ""; // variaveis globais 

	$("#curso").change(function(){
			CURSO = parseInt($( this ).val());
//			alert(CURSO);
//			alert(USERSESSION.RA);
			loadPeriodo(USERSESSION.RA,CURSO);
			return false;
	});
	
	
	$("#periodo").change(function(){
		$( "#periodo option:selected").each(function() {
			PERIODO = $( this ).val();
			 ANO = $( this ).attr('ano');
			 loadTurma(USERSESSION.RA,CURSO,ANO,PERIODO);
//			alert(ANO);
//			alert(PERIODO);
		});
		return false;
	});
	
	
	
	$("#turma").change(function(){
		$( "#turma option:selected" ).each(function() {
			TURMA = $( this ).val();
			loadMedia(USERSESSION.RA,ANO,TURMA,PERIODO);
		});
		return false;
	});


//	$("#disciplina").change(function(){
//		$( "#disciplina option:selected" ).each(function() {
//			DISCIPLINA = $( this ).val();
//			loadMedia(USERSESSION.RA,ANO,TURMA,PERIODO,DISCIPLINA);
//		});
//		return false;
//	});
	
	
	$("#faltas-menu").click(function(){
		loadAulas(RA,CURSO,TURMA,PERIODO,DISCIPLINA);
	});
