function thePyramidOfKingDjoser(base, increment) {

    let height = 0;
    let level = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    while (base > 0) {
        height += increment;
        level++;

        let stoneBase = base - 2;
        if (stoneBase > 0) {
            stone += stoneBase * stoneBase * increment;
        }

        if (stoneBase < 0) {
            stoneBase = 0;
        }

        const decorativeMaterial = ((base * base) - (stoneBase * stoneBase)) * increment;

        if (base <= 2) {
            gold += decorativeMaterial;
        } else if (level % 5 == 0) {
            lapisLazuli += decorativeMaterial;
        } else {
            marble += decorativeMaterial;
        }

        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

thePyramidOfKingDjoser(11, 1);
console.log("-------------------------");
thePyramidOfKingDjoser(11, 0.75);
console.log("-------------------------");
thePyramidOfKingDjoser(12, 1);
console.log("-------------------------");
thePyramidOfKingDjoser(23, 0.5);