// inject the checked value
const currentValue = document.querySelector('.currentValue');

const form = document.forms.demo;
const radios = Array.from(form.elements.characters);

// show selected on page load
currentValue.innerText = form.querySelector('input[name=characters]:checked').value;

// show latest value when radio checked changes
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    currentValue.innerText = form.querySelector('input[name=characters]:checked').value;
  });
});