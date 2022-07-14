const bookContent = document.querySelector('.book__content');
const controlFontSize = document.querySelectorAll('.font-size');

function changeFontSize() {
	Array.from(controlFontSize).forEach(fontSize => {
		fontSize.addEventListener('click', (event) => {
			_resetClasses();
			event.target.classList.add('font-size_active');
			bookContent.classList.add(`font-size_${fontSize.dataset.size}`);
			event.preventDefault();
		})
})};

function _resetClasses() {
	Array.from(controlFontSize).forEach(activeClass => {
		activeClass.classList.remove('font-size_active');
	});
	bookContent.classList = ('book__content');
};

changeFontSize();
