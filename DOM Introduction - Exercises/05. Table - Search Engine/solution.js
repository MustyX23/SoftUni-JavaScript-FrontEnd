function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tableRowElements = document.querySelectorAll('table.container tbody tr');

   const searchField = document.getElementById('searchField');

   function onClick() {
      
      function getMatchElements(input){
         return [...tableRowElements]
            .filter((rowEl) => rowEl.textContent.toLowerCase()
            .includes(input.toLowerCase()));
      } 

      function clearPreviousState(){
         tableRowElements.forEach((rowEl) => {
            rowEl.classList.remove('select');
         }); 
      }
      
      clearPreviousState();

      getMatchElements(searchField.value)
         .forEach((matchRow) => {
            matchRow.classList.add('select');
         });;


      searchField.value = "";
   }
}