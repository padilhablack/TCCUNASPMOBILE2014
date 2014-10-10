
var ano_finance = "";

$(document).on('pageinit',function(){
	$("#option-ano").change(function(){
		$( "#option-ano option:selected").each(function() {
			ano_finance = $( this ).val();
			loadFinanceiro(USERSESSION.RA,ano_finance);
		});
		return false;
	});
});
