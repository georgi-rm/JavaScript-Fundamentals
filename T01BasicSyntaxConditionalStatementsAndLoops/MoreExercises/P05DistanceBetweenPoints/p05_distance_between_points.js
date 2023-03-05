function distanceBetweenPoints(x1, y1, x2, y2) {
    const distanceX = x1 - x2;
    const distanceY = y1 - y2;

    console.log(Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)));
}

distanceBetweenPoints(2, 4, 5, 0);
console.log("-------------------------");
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);