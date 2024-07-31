const array = ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 500, Joe 300, Jane 801"];


let restaurants = array.map((x) => {
    const [name, workerData] = x.split(' - ');
    //What does that do?

    //PizzaHut - Peter 500, George 300, Mark 800 -> x.split(' - ')
    // => {Name} - {WorkerData} //2 seperate elements
    //TheLake - Bob 500, Joe 300, Jane 801 -> x.split(' - ')
    // => {Name} - {WorkerData} //2 seperate elements

    const workers = workerData.split(', ').map((w) => {
        const [name, salary] = w.split(' ');
        return {
            name: name,
            salary: Number(salary)
        }
    });

    return {
        name: name,
        workers: workers
    }

});

//One way
for (const restaurant of restaurants) {
    console.log(restaurant.name);
    for (const worker of restaurant.workers) {
        console.log(`${worker.name} - ${worker.salary}`);
    }
}
//Other way
// Use forEach to iterate over the data and log the information
restaurants.forEach((restaurant) => {
    console.log(restaurant.name);
    restaurant.workers.forEach((worker) => {
        console.log(`${worker.name} - ${worker.salary}`);
    });
    console.log(`Average Salary: ${getAverageSalaryOfARestaurant(restaurant).toFixed(2)}`);
});


function getAverageSalaryOfARestaurant(restaurant) {
    return (
      restaurant.workers.reduce((acc, curr) => acc + curr.salary, 0) /
      restaurant.workers.length
    );
  }



