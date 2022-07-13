const rotatorCase = document.querySelectorAll('span.rotator__case');

function checkElement() {
	el = rotatorCase[0].closest('div');
	el.classList == 'card' ? rotator() : console.log('Выбран не корректный ротатор');
}

function rotator() {
	setInterval (() => {
		for(let i = 0; i < rotatorCase.length; i++){
			if(rotatorCase[i].classList.contains('rotator__case_active')){
					rotatorCase[i].classList.remove('rotator__case_active');
					(i+1 < rotatorCase.length) ? rotatorCase[++i].classList.add('rotator__case_active') : rotatorCase[0].classList.add('rotator__case_active');
				}
			}
}, 1000);
};

checkElement();