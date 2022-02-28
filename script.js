function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}
// This is a comment
const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', createParagraph);
}

/*This is a comment
along with this
these are just examples*/

