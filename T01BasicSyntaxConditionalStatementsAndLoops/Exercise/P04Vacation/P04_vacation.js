function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {

    let price = 0;

    switch (typeOfGroup) {
        case "Students":
            if (dayOfWeek == "Friday") {
                price = 8.45;
            } else if (dayOfWeek == "Saturday") {
                price = 9.80;
            } else if (dayOfWeek == "Sunday") {
                price = 10.46;
            }
            price *= groupOfPeople;
            if (groupOfPeople >= 30) {
                price *= 0.85;
            }
            break;
        case "Business":
            if (dayOfWeek == "Friday") {
                price = 10.90;
            } else if (dayOfWeek == "Saturday") {
                price = 15.60;
            } else if (dayOfWeek == "Sunday") {
                price = 16;
            }
            if (groupOfPeople >= 100) {
                groupOfPeople -= 10;
            }
            price *= groupOfPeople;
            break;
        case "Regular":
            if (dayOfWeek == "Friday") {
                price = 15;
            } else if (dayOfWeek == "Saturday") {
                price = 20;
            } else if (dayOfWeek == "Sunday") {
                price = 22.50;
            }
            price *= groupOfPeople;
            if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                price *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
console.log("-------------------------");
vacation(40, "Regular", "Saturday");