// JavaScript Document

 $(document).ready(function(e){
	document.addEventListener ("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table id').eq(7).text(device.olanform);
		$('#disp table id').eq(9).text(device.version);
		$('#disp table id').eq(11).text(device.uuid);
	},false);//ready device
	
 });//document
 