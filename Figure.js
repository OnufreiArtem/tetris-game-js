
class Figure{

    constructor(color, pos, form, cellSize, ctx){
        this.color = color;
        this.pos = pos;
        this.cellSize = cellSize;
        
        this.blocks = []

        for(let i = 0; i < form.length; i++){
            for(let j = 0; j < form[i].length; j++){
                if(form[i][j] == '@')
                    this.blocks.push(new Block(color, cellSize, {x : pos.x + j*cellSize, y : pos.y + i*cellSize}, ctx))
                else if(form[i][j] == 'o')
                    this.origin = {x : pos.x + j*cellSize, y : pos.y + i*cellSize};
                else if(form[i][j] == 't') {
                    this.blocks.push(new Block(color, cellSize, {x : pos.x + j*cellSize, y : pos.y + i*cellSize}, ctx))
                    this.origin = {x : pos.x + j*cellSize, y : pos.y + i*cellSize};
                }
            }
        }

    }

    rotateR(){
        
        this.blocks.forEach(block => {
            let localX = block.pos.x - this.origin.x;
            let localY = block.pos.y - this.origin.y;
            block.pos = {x: this.origin.x + (localX*0 - localY*1), y: this.origin.y + (localX*1 + localY*0) }
        });
        
    }

    rotateL(){
        this.blocks.forEach(block => {
            let localX = block.pos.x - this.origin.x;
            let localY = block.pos.y - this.origin.y;
            block.pos = {x: this.origin.x + (localX*0 + localY*1), y: this.origin.y + (localX*-1 + localY*0) }
        });
    }

    fall(){
        this.pos.y += 1 * this.cellSize;

        this.blocks.forEach(block => {
            this.blocks.pos.y += 1;
        });
    }


    drawFigure(){
        this.blocks.forEach(block => {
            block.draw();
        })
    }

}