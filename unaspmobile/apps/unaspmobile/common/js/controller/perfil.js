function loadPerfil(ra){
	executaProcedure([ra], 'StoreHTTP', 'retornaCurso', perfilSuccess, perfilFailure);
}

function perfilSuccess(result){
	var auxResult = result.invocationResult.array;
	if (auxResult.length > 0) {
//		displayCurso(auxResult);
		displayCursoOption(auxResult);
	}else 
		perfilFailure();	 
//	teste = JSON.stringify(result.invocationResult.array);
//	alert(teste);
}

function displayCursoOption(items){
	var selectCurso = $('#curso');	
	var selectCursoPerfil = $('#cursos-matriculados ul');	
	for (var i = 0; i < items.length; i++) {
		enumero = $.isNumeric(items[i].id_curso);
		if(enumero === true){
			var option = $('<option/>').html(items[i].nome_curso).val(items[i].id_curso);
			var li = $('<li/>').html(items[i].nome_curso).val(items[i].id_curso);
			selectCurso.append(option);
			selectCursoPerfil.append(li);
			CURSO_NOME = items[i].nome_curso;
		}
	}
}


function perfilFailure(result){
	WL.Logger.error("falha ao receber os dados ");
	WL.SimpleDialog.show("Falha ao Carregar aluno", 
			[{
				text : 'Reload App',
				handler : WL.Client.reloadApp 
			}]);
}