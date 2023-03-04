function bitcoinMining(dailyMinedGold) {

    const priceOfGold = 67.51;
    const priceOfBitcoin = 11949.16;

    let availableMoney = 0;
    let countOfOwnedBitcoins = 0;
    let dayOfFirstBitcoin = undefined;

    for (let day = 0; day < dailyMinedGold.length; day++) {
        const goldForCurrentDay = dailyMinedGold[day]
        let moneyForCurrentDay = goldForCurrentDay * priceOfGold;

        if ((day + 1) % 3 == 0) {
            moneyForCurrentDay *= 0.7;
        }

        availableMoney += moneyForCurrentDay;

        while (availableMoney >= priceOfBitcoin) {
            availableMoney -= priceOfBitcoin;
            countOfOwnedBitcoins++;

            if (dayOfFirstBitcoin == undefined) {
                dayOfFirstBitcoin = day + 1;
            }
        }
    }

    console.log(`Bought bitcoins: ${countOfOwnedBitcoins}`);

    if (dayOfFirstBitcoin != undefined) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }

    console.log(`Left money: ${availableMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
console.log("-------------------------");
bitcoinMining([50, 100]);
console.log("-------------------------");
bitcoinMining([3124.15, 504.212, 2511.124]);
