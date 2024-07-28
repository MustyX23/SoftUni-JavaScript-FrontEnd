function solve() {
  const validNamingConventions = ['Pascal Case', 'Camel Case'];

  const textInput = document.getElementById('text');
  const namingConvention = document.getElementById('naming-convention');
  const result = document.querySelector('.result-container #result');

  if (!validNamingConventions.includes(namingConvention.value)) {
      result.textContent = 'Error!';
      return;
  }

  const pascalCaseText = textInput.value
    .toLowerCase()
    .split(' ')
    .map((x) => x[0].toUpperCase().concat(x.slice(1)))
    .join('');

    result.textContent = namingConvention.value === validNamingConventions[0]
      ? pascalCaseText
      : pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1));
}