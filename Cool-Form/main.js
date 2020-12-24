formEl = document.forms[0];
inputEls = document.querySelectorAll('.form-control');

formEl.addEventListener('submit', (e) => {
	inputEls.forEach((input) => {
		input.nextElementSibling.style.display = 'none';

		if (input.value.length < 1) {
			e.preventDefault();
			input.nextElementSibling.style.display = 'block';
		}
	});
});
