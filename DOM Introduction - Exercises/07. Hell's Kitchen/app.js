function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const inputTextArea = document.querySelector('.restaurant-race-class #inputs textarea');
      const bestRestaurantElement = document.querySelector('#outputs #bestRestaurant p');
      const workersElement = document.querySelector('#outputs #workers p');

      const restaurantData = JSON.parse(inputTextArea.value).reduce((acc, data) => {

         const [restaurantName, workersData] = data.split(' - ');

         const workers = workersData.split(', ').map((workerData) => {
            const [name, salary] = workerData.split(' ');
            return {
               name,
               salary: Number(salary)
            };
         });

         if (!acc.hasOwnProperty(restaurantName)) {
            acc[restaurantName] = {
               workers: [],
            };
         }

         acc[restaurantName].workers.push(...workers);

         return acc;
      }, {});

      function getAverageSalary(restaurantData) {
         return (
            restaurantData.workers.reduce((acc, curr) => acc + curr.salary, 0) /
            restaurantData.workers.length
         );
      }

      const [bestRestaurantKey] = Object.keys(restaurantData).sort(
         (a, b) => getAverageSalary(restaurantData[b]) - getAverageSalary(restaurantData[a])
      );

      const bestWorkers = restaurantData[bestRestaurantKey].workers
         .slice()
         .sort((a, b) => b.salary - a.salary);

      const bestRestaurantElementTextContent = `Name: ${bestRestaurantKey} Average Salary: ${getAverageSalary(restaurantData[bestRestaurantKey]).toFixed(2)} Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;

      bestRestaurantElement.textContent = bestRestaurantElementTextContent;

      const workersElementTextContent = bestWorkers.map((x) =>
         `Name: ${x.name} With Salary: ${x.salary}`).join(' ');

      workersElement.textContent = workersElementTextContent;

   }
}