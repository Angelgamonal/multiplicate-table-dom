// input
const elementFormDataNumber = document.querySelector('#number');

//span
const elementSpanNumber = document.querySelector('#number-random');

//form

const elementBtnSubmit = document.querySelector('#form-result');

//result

const elementResultContent = document.querySelector('#result-content');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Event submit

elementBtnSubmit.addEventListener('submit', (e) => {
	e.preventDefault();

	elementResultContent.innerHTML = '';

	const numberForm = elementFormDataNumber.value;

	if (!numberForm) {
		return swal({
			text: 'Escribe al menos un número',
			icon: 'error',
			button: 'Cerrar',
			dangerMode: true,
		});
	}
	elementSpanNumber.textContent = ` ${numberForm}`;

	//mapeando

	numbers.forEach((number) => {
		//create element
		const span = document.createElement('span');
		elementResultContent.innerHTML += `<span>${numberForm} * ${number} = ${multiply(
			numberForm,
			number
		)}</span>`;
	});

	elementFormDataNumber.value = '';
});

const multiply = (a, b) => {
	const result = a * b;
	return result;
};
