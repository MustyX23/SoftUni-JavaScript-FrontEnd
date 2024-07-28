function search() {
   const townElements = document.querySelectorAll('#towns li');

   function getMatchElements(input) {  
      return [...townElements].filter((x) =>
          x.textContent.toLowerCase().includes(input.toLowerCase()))
   }

   function clearPreviousState() {
      townElements.forEach((matchElement) => {
         matchElement.style.fontWeight = 'normal';
         matchElement.style.textDecoration = 'none';
      })
   }

   clearPreviousState();

   const [inputElement] = document.getElementsByTagName('input');

   const matchElements = getMatchElements(inputElement.value);

   matchElements.forEach((matchElement) => {
      matchElement.style.fontWeight = 'bold';
      matchElement.style.textDecoration = 'underline';
   })

   document.querySelector('div#result').textContent = `${matchElements.length} matches found`;
}
