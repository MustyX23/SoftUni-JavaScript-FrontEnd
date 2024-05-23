// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.
// The input comes as a single number parameter. The bounders are:
// ·	0-2 (age) – is a baby;   
// ·	3-13 (age) – is a child; 
// ·	14-19 (age) – is a teenager;
// ·	20-65 (age) – is an adult;
// ·	>=66 (age) – is an elder; 
// ·	In all other cases print – "out of bounds";
// The output should be printed to the console.

function determinePersonByAge(age){
    const types = ['baby', 'child', 'teenager', 'adult', 'elder'];

    const personType =  (age >= 0 && age <= 2) ? types[0] :
                        (age >= 3 && age <= 13) ? types[1] :
                        (age >= 14 && age <= 19) ? types[2] :
                        (age >= 20 && age <= 65) ? types[3] :
                        (age >= 66) ? types[4] :
                        'out of bounds'

    console.log(personType);
}

determinePersonByAge(-33);

// You are given a group of people, the type of the group, and the day of the week they are going to stay.
// Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`. The price should be formatted to the second decimal point.

function calculateTotalPrice(numberOfPeople, groupType,  dayOfWeek) {
    
    const prices = {
        'Friday': { 'Students': 8.45, 'Business': 10.90, 'Regular': 15.00 },
        'Saturday': { 'Students': 9.80, 'Business': 15.60, 'Regular': 20.00 },
        'Sunday': { 'Students': 10.46, 'Business': 16.00, 'Regular': 22.50 }
    };

    let pricePerPerson = prices[dayOfWeek][groupType];
    let totalPrice = pricePerPerson * numberOfPeople;

    if (groupType === 'Students' && numberOfPeople >= 30) {
        totalPrice *= 0.85; // 15% discount
    } else if (groupType === 'Business' && numberOfPeople >= 100) {
        totalPrice -= pricePerPerson * 10; // 10 people stay for free
    } else if (groupType === 'Regular' && numberOfPeople >= 10 && numberOfPeople <= 20) {
        totalPrice *= 0.95; // 5% discount
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}


calculateTotalPrice(40, 'Regular', 'Saturday');

