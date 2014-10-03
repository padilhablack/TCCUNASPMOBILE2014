
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
			TURMA = $( this ).val() + " ";
			loadPeriodo(USERSESSION.RA,CURSO,TURMA);
			habilita("#periodo");
		});
		return false;
	});



	$("#disciplina").change(function(){
		$( "#disciplina option:selected" ).each(function() {
			DISCIPLINA = $( this ).val();
			loadNotas(USERSESSION.RA,CURSO,TURMA,PERIODO,DISCIPLINA);
			habilita("#navbar0");
//			loadNotas(86539,5,4,4,41);
			
		});
		return false;
	});
	
	
	$("#faltas-menu").click(function(){
		loadAulas(RA,CURSO,TURMA,PERIODO,DISCIPLINA);
	});
