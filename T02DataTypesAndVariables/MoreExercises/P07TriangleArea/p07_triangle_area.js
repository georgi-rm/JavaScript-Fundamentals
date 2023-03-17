function triangleArea(sideA, sideB, sideC) {
    const semiperimeter = (sideA + sideB + sideC) / 2;

    const area = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));

    console.log(area);
}

triangleArea(2, 3.5, 4);
console.log("-------------------------");
triangleArea(3, 5.5, 4);