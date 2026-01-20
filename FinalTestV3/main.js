const ROWS = 3;
const COLS = 4;

const tileClasses = [
    [],
    ["bg-green-100", "text-green-500"],
    ["bg-red-100", "text-red-500"],
    ["bg-blue-100", "text-blue-500"],
    ["bg-purple-100", "text-purple-500"],
    ["bg-yellow-100", "text-yellow-500"],
    ["bg-pink-100", "text-pink-500"],
    ["bg-indigo-100", "text-indigo-500"],
    ["bg-gray-100", "text-gray-500"],
    ["bg-emerald-100", "text-emerald-500"],
    ["bg-amber-100", "text-amber-500"],
    ["bg-lime-100", "text-lime-500"],
];

let board = [];
let emptyRow = 2;
let emptyCol = 3;

let timerInterval = null;
let seconds = 0;
let moves = 0;
let isPlaying = false;
let gameHistory = [];

function updateTile(row, col, num) {
    const tile = document.querySelector(
        `[data-row="${row}"][data-col="${col}"]`,
    );
    if (!tile) return;

    tile.textContent = num || "";
    tile.className = "tile" + (num === 0 ? " empty" : "");

    if (num !== 0) {
        tileClasses[num].forEach((cls) => tile.classList.add(cls));
    }
}

// Khởi tạo board
function initBoard() {
    board = [];
    let num = 1;

    for (let row = 0; row < ROWS; row++) {
        board[row] = [];
        for (let col = 0; col < COLS; col++) {
            if (row === 2 && col === 3) {
                board[row][col] = 0;
            } else {
                board[row][col] = num++;
            }
            updateTile(row, col, board[row][col]);
        }
    }

    emptyRow = 2;
    emptyCol = 3;
}

function swapTiles(row, col) {
    board[emptyRow][emptyCol] = board[row][col];
    board[row][col] = 0;

    updateTile(emptyRow, emptyCol, board[emptyRow][emptyCol]);
    updateTile(row, col, 0);

    emptyRow = row;
    emptyCol = col;
}

// Các nước đi hợp lệ từ vị trí ô trống
function getValidMoves() {
    const moves = [];
    if (emptyRow > 0) moves.push([-1, 0]);
    if (emptyRow < ROWS - 1) moves.push([1, 0]);
    if (emptyCol > 0) moves.push([0, -1]);
    if (emptyCol < COLS - 1) moves.push([0, 1]);
    return moves;
}

function shuffleBoard(times = 100) {
    for (let i = 0; i < times; i++) {
        const options = getValidMoves();
        const [dr, dc] = options[Math.floor(Math.random() * options.length)];
        swapTiles(emptyRow + dr, emptyCol + dc);
    }
}

function updateTimer() {
    seconds++;
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${m}:${s}`;
}

function startTimer() {
    seconds = 0;
    document.getElementById("timer").textContent = "00:00";
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function checkWin() {
    let num = 1;
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (row === 2 && col === 3) {
                if (board[row][col] !== 0) return false;
            } else {
                if (board[row][col] !== num++) return false;
            }
        }
    }
    return true;
}

function showMessage(text, color = "black") {
    const msg = document.getElementById("winMessage");
    msg.textContent = text;
    msg.style.color = color;
}

function endGame() {
    stopTimer();
    showMessage("YOU WIN!", "green");

    gameHistory.push({
        moves,
        time: document.getElementById("timer").textContent,
    });
    renderHistory();
}

function renderHistory() {
    const tbody = document.getElementById("history");
    tbody.innerHTML = "";

    gameHistory.forEach((game, gameNum) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${gameNum + 1}</td>
            <td>${game.moves}</td>
            <td>${game.time}</td>
        `;
        tbody.appendChild(tr);
    });
}

document.getElementById("startBtn").addEventListener("click", () => {
    const btn = document.getElementById("startBtn");

    if (isPlaying) {
        isPlaying = false;
        stopTimer();
        initBoard();
        btn.textContent = "Bắt đầu";
        btn.classList.remove("end-btn");
        btn.classList.add("bg-green-500");
        document.getElementById("timer").textContent = "00:00";
        showMessage("GAME RESET", "orange");
        return;
    }

    initBoard();
    shuffleBoard(100);
    isPlaying = true;
    moves = 0;

    btn.textContent = "Kết thúc";
    btn.classList.remove("bg-green-500");
    btn.classList.add("end-btn");
    showMessage("");
    startTimer();
});

document.addEventListener("keydown", (e) => {
    if (!isPlaying) return;

    let newRow = emptyRow;
    let newCol = emptyCol;

    switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
            newRow--; // ô trống đi lên
            break;

        case "ArrowDown":
        case "s":
        case "S":
            newRow++; // ô trống đi xuống
            break;

        case "ArrowLeft":
        case "a":
        case "A":
            newCol--; // ô trống đi trái
            break;

        case "ArrowRight":
        case "d":
        case "D":
            newCol++; // ô trống đi phải
            break;

        default:
            return;
    }

    // điều kiện biên (không vượt khung)
    if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS) {
        return;
    }

    // đổi chỗ ô trống với ô theo hướng di chuyển
    swapTiles(newRow, newCol);
    moves++;

    if (checkWin()) endGame();
});

initBoard();
