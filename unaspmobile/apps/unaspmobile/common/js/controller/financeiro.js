
function loadFinanceiro(ra,valor,ano){
	ajaxLoader('#conteudo-financeiro');
	executaProcedure([ra], 'StoreHTTP', 'getFinanceiro', function(result){
		data = result.invocationResult.array;
		option = $("#option-ano");
		var content = document.getElementById('conteudo-financeiro');
		table = ['<table class="ui-responsive table-stroke" style="width:100%;">'];
		table.push('<thead>');
		table.push('<tr><th>Ano</th><th>Parcela</th><th>Vencimento</th><th>Saldo</th></tr>');
		table.push('</thead>');
		table.push('<tbody style="text-align:center">');

		for (var i = 0; i < data.length; i++) {

//			LISTA TODOS OS DADOS FINANCEIROS NA TELA

			if(valor == 'all'){
				if(data[i].des_parcela != null){
					table.push('<tr><td>');
					table.push(data[i].ano_referencia);
					table.push('</td><td>');
					table.push(data[i].des_parcela);
					table.push('</td><td>');
					table.push(data[i].vencimento);
					table.push('</td><td>');
					table.push(data[i].valor);
					table.push('</td></tr>');
				}
			}

//			LISTA OS ANOS NAS OPÇÕES
			
			else if(valor == 'option'){
				var li = $('<option/>').html(data[i].ano_referencia).val(data[i].ano_referencia);
				option.append(li);
				$("#option-ano option").each(function(){
					if($(this).parent().length)
						$("#option-ano option:contains('" + $(this).html() + "')").not(this).remove();
				});
				
				table.push('<tr><td>');
				table.push(data[i].ano_referencia);
				table.push('</td><td>');
				table.push(data[i].des_parcela);
				table.push('</td><td>');
				table.push(data[i].vencimento);
				table.push('</td><td>');
				table.push(data[i].valor);
				table.push('</td></tr>');
			}


//			LISTA POR ANO
			
			else if(valor == 'ano_unico'){
				if(data[i].ano_referencia === ano && (data[i].vencimento).substring(6,10) == ano && data[i].des_parcela != null){
					table.push('<tr><td>');
					table.push(data[i].ano_referencia);
					table.push('</td><td>');
					table.push(data[i].des_parcela);
					table.push('</td><td>');
					table.push(data[i].vencimento);
					table.push('</td><td>');
					table.push(data[i].valor);
					table.push('</td></tr>');
				}
			}
			
			
		}

		//FIM TABELA
		table.push('</tbody>');
		table.push('</table>');
		content.innerHTML = table.join('');

	}, null);

}
