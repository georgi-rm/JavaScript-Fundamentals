function theatrePromotions(typeOfDay, age) {

    if (age < 0 || age > 122) {
        console.log('Error!');
        return;
    }

    let price;

    switch (typeOfDay) {
        case 'Weekday':
            if (age > 18 && age <= 64) {
                price = 18;
            } else {
                price = 12;
            }
            break;
        case 'Weekend':
            if (age > 18 && age <= 64) {
                price = 20;
            } else {
                price = 15;
            }
            break;
        case 'Holiday':
            if (age <= 18) {
                price = 5;
            } else if (age <= 64) {
                price = 12;
            } else {
                price = 10;
            }
            break;
    }

    console.log(`${price}$`);
}

theatrePromotions('Weekday', 42);
console.log("-------------------------");
theatrePromotions('Holiday', -12);
console.log("-------------------------");
theatrePromotions('Holiday', 15);