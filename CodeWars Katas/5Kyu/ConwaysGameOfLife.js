//Description:
//
//    In this finite version of Conway's Game of Life (here is an excerpt of the rules) ...
//
//The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
//
//    Any live cell with fewer than two live neighbours dies, as if caused by under-population.
//    Any live cell with two or three live neighbours lives on to the next generation.
//    Any live cell with more than three live neighbours dies, as if by overcrowding.
//    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
//    The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one)
//...implement your own method which will take the initial state as an NxM array of 0's (dead cell) and 1's (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead. Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).
//N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks respectively.

function nextGen(cells) {
    var result;

    function processCell(n, m, row, column) {
        var adjacentAlive = 0;
        for (var i = n - 1; i <= n + 1; i++) {
            for (var j = m - 1; j <= m + 1; j++) {
                if (i >= 0 && i < row.length && j >= 0 && j < column.length && (i != n || j != m)) {
                    adjacentAlive += cells[i][j];
                }
            }
        }


        if (cells[n][m] === 1) {
            return adjacentAlive < 2 || adjacentAlive > 3 ? 0 : 1;
        } else {
            return adjacentAlive === 3 ? 1 : 0;
        }
    }

    return cells.map(function (currentRow, n, rows) {
        return currentRow.map(function (currentColumn, m, row) {
            return processCell(n, m, rows, row);
        });
    });
}