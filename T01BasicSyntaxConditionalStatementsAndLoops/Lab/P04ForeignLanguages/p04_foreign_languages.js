function foreignLanguages(country) {

    switch (country) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }
}

foreignLanguages('Germany');
console.log("-------------------------");
foreignLanguages('England');
console.log("-------------------------");
foreignLanguages('USA');
console.log("-------------------------");
foreignLanguages('Spain');
console.log("-------------------------");
foreignLanguages('Argentina');
console.log("-------------------------");
foreignLanguages('Mexico');