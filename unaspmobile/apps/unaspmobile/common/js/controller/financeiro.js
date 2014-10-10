

function carregaAno(ra){
	executaProcedure([ra], 'StoreHTTP', 'getFinanceiro', sucess, null);

	function sucess(result){
		data = result.invocationResult.array;
		option = $("#option-ano");

		for (var i = 0; i < data.length; i++) {

			var li = $('<option/>').html(data[i].ano_referencia).val(data[i].ano_referencia);
			option.append(li);

			//verifica se existe elemeento duplicado
			$("#option-ano option").each(function(){
				if($(this).parent().length)
					$("#option-ano option:contains('" + $(this).html() + "')").not(this).remove();
			});

		}
	}

}

function loadFinanceiro(ra,ano){
	executaProcedure([ra,ano], 'mysqlAdapter', 'selectFinanceiro', sucess, failure);


	function sucess(result){

		data = result.invocationResult.resultSet;

		var content 	 = document.getElementById('conteudo-financeiro'); // pegar o id onde será mostrado o conteudo
		table = ['<table class="ui-responsive table-stroke" style="width:100%;">']; // cria uma tabela com os dados 
		table.push('<thead>');
		table.push('<tr>'+
				'<th data-priority="1">Mês</th>'+
				'<th data-priority="1">Valor</th>'+
				'<th data-priority="1">Vencimento</th>'+
				'<th data-priority="1">Situação</th>'+
		'</tr>');
		table.push('</thead>');
		//fim do cabeçalho da  tabela 

		//corpo da tabela 
		table.push('<tbody style="text-align:center">');

		for (var i = 0; i < data.length; i++) {

			aux = data[i].status;
			situacao = '';

			if(aux == 0)
				situacao = 'Pendente';
			else
				situacao = 'Pago';

			table.push('<tr><td>');
			table.push(data[i].nome_mes);
			table.push('</td><td>');
			table.push(data[i].valor+',00');
			table.push('</td><td>');
			table.push(data[i].vencimento);
			table.push('</td><td>');
			table.push(situacao);
			table.push('</td></tr>');

		}
		table.push('</tbody>');
		table.push('</table>');

		content.innerHTML = table.join('');

	}

	function failure(){
		WL.Logger.error("This method was never declared");
	}

}

