// inject the checked value
const currentValue = document.querySelector('.currentValue');

// reference to form and group of radio
// using the new HTMLFormElement.elements property (https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)
const form = document.forms.demo;
const radios = form.elements.characters;

// show selected on page load
currentValue.innerText = radios.value;

// https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList
console.log(radios);

// convert the RadioNodeList to an Array and using [].find() to get the element
console.log(Array.from(form.elements.characters).find(radio => radio.checked));

// BUT - the RadioNodeList offers us a solution to keep things super minimal 👇 :s

// show latest value when radio checked changes
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    currentValue.innerText = radios.value;
  });
});