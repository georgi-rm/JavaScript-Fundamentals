function chessBoard(n) {

    console.log('<div class="chessboard">');

    let nextRowColor = 'black';

    for (let row = 0; row < n; row++) {

        let nextCellColor = nextRowColor;

        console.log('    <div>');

        for (let col = 0; col < n; col++) {
            console.log(`        <span class="${nextCellColor}"></span>`);

            if (nextCellColor == 'black') {
                nextCellColor = 'white';
            } else {
                nextCellColor = 'black';
            }
        }

        console.log('    </div>');

        if (nextRowColor == 'black') {
            nextRowColor = 'white';
        } else {
            nextRowColor = 'black';
        }
    }

    console.log('</div>');
}

chessBoard(3);