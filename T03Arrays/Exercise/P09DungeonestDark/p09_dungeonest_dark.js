function dungeonestDark(inputArray) {

    const maxHealth = 100;
    let health = maxHealth;
    let coins = 0;

    const rooms = inputArray[0].split('|');

    for (let roomIndex = 0; roomIndex < rooms.length; roomIndex++) {
        const roomContent = rooms[roomIndex].split(' ');
        const itemOrMonster = roomContent[0];
        let number = Number(roomContent[1]);

        switch (itemOrMonster) {
            case "potion":
                if (health + number > maxHealth) {
                    number = maxHealth - health;
                }

                health += number;
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default:
                health -= number;

                if (health > 0) {
                    console.log(`You slayed ${itemOrMonster}.`);
                } else {
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    console.log(`Best room: ${roomIndex + 1}`);
                    return;
                }

                break;
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("-------------------------");
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);