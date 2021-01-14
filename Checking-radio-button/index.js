// inject the checked value
const currentValue = document.querySelector('.currentValue');

// reference to form and group of radio
// using the new HTMLFormElement.elements property (https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)
const form = document.forms.demo;
const radios = form.elements.characters;

// https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList
console.log(radios);

(function selectRandomValue() {
  radios[Math.floor(Math.random() * radios.length)].checked = true;
  currentValue.innerText = radios.value;
  setTimeout(selectRandomValue, 1000);
})();

