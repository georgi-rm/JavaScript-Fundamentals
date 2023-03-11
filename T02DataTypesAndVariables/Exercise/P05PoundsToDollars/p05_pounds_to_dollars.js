function poundsToDollars(pounds) {
    const exchangeRatePoundsToDollars = 1.31;
    const dollars = pounds * exchangeRatePoundsToDollars;

    console.log(dollars.toFixed(3));
}

poundsToDollars(80);
console.log("-------------------------");
poundsToDollars(39);