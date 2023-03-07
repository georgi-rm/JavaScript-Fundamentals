function gramophone(bandName, albumName, song) {
    const songDuration = (albumName.length * bandName.length) * song.length / 2;
    const secondsToRotateThePlate = 2.5;

    const plateRotations = Math.ceil(songDuration / secondsToRotateThePlate);

    console.log(`The plate was rotated ${plateRotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
console.log("-------------------------");
gramophone('Rammstein', 'Sehnsucht', 'Engel');