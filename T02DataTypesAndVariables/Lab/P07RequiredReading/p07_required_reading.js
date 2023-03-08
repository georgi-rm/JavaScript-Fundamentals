function requiredReading(numberOfPages, pagesPerHour, numberOfDays) {
    const totalTimeToReadTheBook = numberOfPages / pagesPerHour;
    const requiredHoursPerDay = totalTimeToReadTheBook / numberOfDays;

    console.log(requiredHoursPerDay);
}

requiredReading(212, 20, 2);
console.log("-------------------------");
requiredReading(432, 15, 4);