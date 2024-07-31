function generateReport() {
  const theadRows = document.querySelectorAll("thead tr th");
  const tbodyRows = document.querySelectorAll("tbody tr");

  const checkBoxElements = [...theadRows].map((x, i) => ({
    element: x.children[0],
    index: i,
  })).filter((x) => x.element.checked);

  const outPutData = [...tbodyRows].map((tr) => {
    return checkBoxElements.reduce((acc, curr) => {
        acc[curr.element.name] = tr.children[curr.index].textContent;
        return acc;
    }, {});
  });

  document.querySelector('#output').value = JSON.stringify(outPutData);;
}
