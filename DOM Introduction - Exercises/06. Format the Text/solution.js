function solve() {

  const inputElement = document.getElementById('input');
  const outputElement = document.getElementById('output');

  function createParagraphElement(text) {
    const pElement = document.createElement('p');
    pElement.textContent = text;
    return pElement;
  }

  const sentences = inputElement.value.split('.').filter(Boolean).map((x) => x.trim());
  
  for (let i = 0; i < sentences.length; i+=3) {
    const currentText = sentences.slice(i, i + 3).join('. ').concat('.');

    const currentParagraph = createParagraphElement(currentText);
    outputElement.appendChild(currentParagraph);
    
  }
}