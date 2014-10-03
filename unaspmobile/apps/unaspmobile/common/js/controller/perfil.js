function loadPerfil(ra){
	executaProcedure([ra], 'StoreHTTP', 'retornaCurso', perfilSuccess, perfilFailure);
}

function perfilSuccess(result){
	if (result.invocationResult.array.length > 0) {
		displayCurso(result.invocationResult.array);
	}else 
		perfilFailure();	 
//	teste = JSON.stringify(result.invocationResult.array);
//	alert(teste);
}

function displayCurso(items){
	var selectCurso = $('#cursos-matriculados ul');		
	for (var i = 0; i < items.length; i++) {
		var li = $('<li/>').html(items[i].nome_curso).val(items[i].id_curso);
		selectCurso.append(li);
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