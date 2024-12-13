// JavaScript Document

document.addEventListener('DOMContentLoaded', function(){

 	document.getElementById('cart_custom').addEventListener('submit', estimateTotal);

	var v_btn_estimate = document.getElementById('btn_estimate');

});

function estimateTotal(event) {
	event.preventDefault();

	var bs0 = parseInt(document.getElementById("bs0").value, 10 )|| 0;
	var bs1 = parseInt(document.getElementById("bs1").value, 10 )|| 0;
	var cer = 180;

	var shipping = document.querySelector('input[name=ship]:checked'); 
	var support = document.querySelector('input[name=sup]:checked')

	if (shipping === null) {
		shipping = '';
	}
	else {
		shipping = shipping.value;
	}

	if (support === null) {
		support = '';
	}
	else {
		support = support.value;
	}

	var totalItemPrice = cer + (bs0 * 10 ) + (bs1 * 30);

	switch(shipping){
		case 'fedex':
			shippingCostPer = 110 + 15;	
			break;
		case 'fedex2':
			shippingCostPer = 220 + 30;	
			break;
		default :
			shippingCostPer = 0;
			break;
	}

	var supportFixAd = 0;

	switch(support){
		case 'supmin':
			supportCostPer = 2.4;
			supportFixAd = 0;
			break;
		case 'supmax':
			supportCostPer = 2.4;
			supportFixAd = 200;	
			break;
		default :
			supportCostPer = 1;
			break;
	}

	var totalShippingCost = shippingCostPer;
	
	var estimaterub = '$' + ((totalItemPrice + totalShippingCost) * supportCostPer + supportFixAd).toFixed(0);
	
	if (shipping == 0) {
		document.getElementById('total_estimate').value= 'введите больше информации';
	}
		document.getElementById('total_estimate').value=estimaterub;
};
