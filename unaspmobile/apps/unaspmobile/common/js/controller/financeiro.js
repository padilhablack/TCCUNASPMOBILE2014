

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
	executaProcedure([ra], 'StoreHTTP', 'getFinanceiro', function(result){

		data = result.invocationResult.array;

		var content 	 = document.getElementById('conteudo-financeiro'); // pegar o id onde será mostrado o conteudo
		table = ['<table class="ui-responsive table-stroke" style="width:100%;">']; // cria uma tabela com os dados 
		table.push('<thead>');
		table.push('<tr>'+
				'<th>Mês Referência</th>'+
				'<th>Parcela</th>'+
				'<th>Vencimento</th>'+
				'<th>Saldo</th>'+
		'</tr>');
		table.push('</thead>');
		//fim do cabeçalho da  tabela 

		//corpo da tabela 
		table.push('<tbody style="text-align:center">');

		for (var i = 0; i < data.length; i++) {

			if(data[i].ano_referencia === ano && (data[i].vencimento).substring(6,10) == ano){
				table.push('<tr><td>');
				table.push(data[i].des_parcela);
				table.push('</td><td>');
				table.push(data[i].des_parcela);
				table.push('</td><td>');
				table.push(data[i].vencimento);
				table.push('</td><td>');
				table.push(data[i].valor);
				table.push('</td></tr>');

			}
		}
		table.push('</tbody>');
		table.push('</table>');

		content.innerHTML = table.join('');

	}, null);







	function failure(){
		WL.Logger.error("This method was never declared");
	}

}

