function convertMetersToKilometres(distanceInMeters) {
    const distanceInKm = distanceInMeters / 1000;

    console.log(distanceInKm.toFixed(2));
}

convertMetersToKilometres(1852);
console.log("-------------------------");
convertMetersToKilometres(798);
