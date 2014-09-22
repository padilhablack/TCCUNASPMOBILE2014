function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */

	// Common initialization code goes here
	$.get("http://www.unasp-ec.com/unaspserver/login.php?ra=86539&senha=9886", function(data) {
		var resul = [];
		resul  = data;
		alert(resul.NOME);
	});


	
}


