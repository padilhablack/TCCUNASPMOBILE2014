
var ano_finance = "";

	$("#option-ano").change(function(){
		$( "#option-ano option:selected").each(function() {
			ano_finance = $( this ).val();
			if(ano_finance == ""){
				loadFinanceiro(USERSESSION.RA,'all','');
			}else{
				loadFinanceiro(USERSESSION.RA,'ano_unico',ano_finance);
			}
			return false;
		});

	});

