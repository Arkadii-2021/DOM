const reveal = document.querySelectorAll('.reveal');

function isVisible(el) {
	const {top, bottom} = el.getBoundingClientRect()
	if ((bottom < 0) || (top > window.innerHeight)) {
		return false}
	return true
};

function revealCheck() {
	window.addEventListener('scroll', () => {
	Array.from(reveal).forEach(function (revealContent) {
		if (isVisible(revealContent)) {
			revealContent.classList.add('reveal_active');
		}})
})};

revealCheck();