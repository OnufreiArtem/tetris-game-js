class Block{

    constructor(color, size, pos, ctx){
        this.color = color;
        this.size = size;
        this.pos = pos;
        this.ctx = ctx;
    }

    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size);        
    }



}