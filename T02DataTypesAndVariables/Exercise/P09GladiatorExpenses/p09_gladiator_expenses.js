function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;

    for (let fight = 1; fight <= lostFightsCount; fight++) {
        if (fight % 2 == 0) {
            expenses += helmetPrice;
        }

        if (fight % 3 == 0) {
            expenses += swordPrice;
        }

        if (fight % 2 == 0 && fight % 3 == 0) {
            expenses += shieldPrice;
        }

        if (fight % 4 == 0 && fight % 6 == 0) {
            expenses += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
console.log("-------------------------");
gladiatorExpenses(23, 12.50, 21.50, 40, 200);