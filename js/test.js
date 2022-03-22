const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

setOutput();

select.addEventListener('change', setOutput);

function setOutput() {
  const selectedOptionValue = select.value;
  const selectedOptionIndex = select.selectedIndex;
  console.log(selectedOptionIndex);
  const selectedOptionText = select.options[selectedOptionIndex].text;
  console.log(select.options);

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
