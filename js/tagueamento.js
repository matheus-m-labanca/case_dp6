// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

function sendEventGa(category, action, label) {

	if(typeof ga == 'undefined'){

		console.log('não existe');
		return;
	}

	ga('send', {
	  hitType: 'event',
	  eventCategory: category,
	  eventAction: action,
	  eventLabel: label
	});

	console.log('existe');
}

function sendEventInputGa(elem, category, action, label) {

	if(elem.value.length == 0){
		return;
	}

	if(typeof ga == 'undefined'){

		console.log('não existe');
		return;
	}

	ga('send', {
	  hitType: 'event',
	  eventCategory: category,
	  eventAction: action,
	  eventLabel: label
	});

	console.log('existe');
}