var canvas = document.getElementById("gamescreen");


let cellSize = 32;
let rows = 22;
let columns = 12;

let gameMap = genDefaultMap(rows, columns);

canvas.width = columns*cellSize;
canvas.height = rows*cellSize;

let triangl = [
    ['0', '@', '0'],
    ['@', '@', '@'],
    ['0', '0', '0']
]

let fig1 = [
    ['0', '@', '@'],
    ['@', '@', '0'],
    ['0', '0', '0']
]

let fig2 = [
    ['0', '@', '0'],
    ['@', '@', '@'],
    ['0', '0', '0']
]

var wallBlock = new Image();
wallBlock.src = "file://C:/Users/hello/Desktop/tetris/images/wall.png";

var width  = canvas.width,
    height = canvas.height;

var ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

drawGrid(cellSize);

function drawGrid(gridSize){
    let count = 0
    for(let i = 0; i < gameMap.length; i++){
        for(let j = 0; j < gameMap[i].length; j++){
            if(gameMap[i][j] == '#'){
                ctx.drawImage(wallBlock, j*gridSize, i*gridSize,
                    gridSize, gridSize);
            }
            count++;
            
        }
    
    }
    console.log(count + " of " + gameMap.length*gameMap[0].length)
}

function genDefaultMap(rows, columns){
    let matrix = []

    for(let i = 0; i < rows; i++){
        let row = [];
        for(let j = 0; j < columns; j++){
            if(i == 0 || i == rows-1 || j == 0 || j == columns-1){
                row.push('#');
            }
            else{
                row.push('0');
            }
            
        }
        matrix.push(row);
        
    }

    return matrix;
}