function tseamAccount(inputArray) {
    let installedGames = inputArray[0].split(' ');

    for (let i = 1; i < inputArray.length; i++) {

        if (inputArray[i] == 'Play!') {
            break;
        }

        const commandArray = inputArray[i].split(' ');
        const command = commandArray[0];
        let game = commandArray[1];

        switch (command) {
            case 'Install':
                if (!installedGames.includes(game)) {
                    installedGames.push(game);
                }
                break;
            case 'Uninstall':
                {
                    const indexOfGame = installedGames.indexOf(game);

                    if (indexOfGame >= 0 && indexOfGame < installedGames.length) {
                        installedGames.splice(indexOfGame, 1);
                    }
                }
                break;
            case 'Update':
                {
                    const indexOfGame = installedGames.indexOf(game);

                    if (indexOfGame >= 0 && indexOfGame < installedGames.length) {
                        installedGames.splice(indexOfGame, 1);
                        installedGames.push(game);
                    }
                }
                break;
            case 'Expansion':
                {
                    const gameAndExpansion = game.split('-');
                    game = gameAndExpansion[0];
                    const expansion = gameAndExpansion[1];
                    const indexOfGame = installedGames.indexOf(game);

                    if (indexOfGame >= 0 && indexOfGame < installedGames.length) {
                        installedGames.splice(indexOfGame + 1, 0, game + ':' + expansion);
                    }
                }
                break;
            default:
                break;
        }
    }
    console.log(installedGames.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);
console.log("-------------------------");
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);