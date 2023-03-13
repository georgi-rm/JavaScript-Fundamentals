function spiceMustFlow(produced) {
    let spiceInStorage = 0;
    let days = 0;

    while (produced >= 100) {
        spiceInStorage += produced;
        if (spiceInStorage > 26) {
            spiceInStorage -= 26;
        }
        produced -= 10;
        days += 1;
    }

    if (spiceInStorage > 26) {
        spiceInStorage -= 26;
    }

    console.log(days);
    console.log(spiceInStorage);
}

spiceMustFlow(111);
console.log("-------------------------");
spiceMustFlow(450);