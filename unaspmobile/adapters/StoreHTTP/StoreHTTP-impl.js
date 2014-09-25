/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

function retornaCurso(ra){
	// CHAMA A PROCEDURE
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : '/unaspserver/notas/curso.php?ra='+ra
		};
		
	return WL.Server.invokeHttp(input);
}

function retornaPeriodo(ra,curso){
	// CHAMA A PROCEDURE
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : '/unaspserver/notas/periodo.php?ra='+ra+'&curso='+curso
		};
		
	return WL.Server.invokeHttp(input);
}

function retornaTurma(ra,curso,ano,periodo){
	// CHAMA A PROCEDURE
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : '/unaspserver/notas/turma.php?ra='+ra+'&curso='+curso+'&ano='+ano+'&periodo='+periodo
		};
		
	return WL.Server.invokeHttp(input);
}

function retornaDisciplina(ra,curso,ano,periodo,turma){
	// CHAMA A PROCEDURE
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : '/unaspserver/notas/disciplina.php?ra='+ra+'&curso='+curso+'&ano='+ano+'&periodo='+periodo+'&turma='+turma
		};
		
	return WL.Server.invokeHttp(input);
}



function retornaAvaliacoes(ra,curso,ano,periodo,turma){
	// CHAMA A PROCEDURE
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : '/unaspserver/notas/avaliacoes.php?ra='+ra+'&curso='+curso+'&ano='+ano+'&periodo='+periodo+'&turma='+turma
		};
		
	return WL.Server.invokeHttp(input);
}


function retornaMedia(ra,ano,turma,periodo,disciplina){
	// CHAMA A PROCEDURE
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : '/unaspserver/notas/media.php?ra='+ra+'&ano='+ano+'&turma='+turma+'&periodo='+periodo+'&disciplina='+disciplina
		};
		
	return WL.Server.invokeHttp(input);
}

function getFinanceiro(ra){
	// CHAMA A PROCEDURE
	var input = {
		    method : 'get',
		    returnedContentType : 'json',
		    path : '/unaspserver/financeiro/getFinanceiro.php?ra='+ra
		};
		
	return WL.Server.invokeHttp(input);
}


