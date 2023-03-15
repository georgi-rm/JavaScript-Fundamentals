function cone(radiusOfBase, height) {
    const volume = height * Math.PI * Math.pow(radiusOfBase, 2) / 3;

    const area = Math.PI * Math.pow(radiusOfBase, 2) + Math.PI * radiusOfBase * Math.sqrt(Math.pow(radiusOfBase, 2) + Math.pow(height, 2));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5);
console.log("-------------------------");
cone(3.3, 7.8);