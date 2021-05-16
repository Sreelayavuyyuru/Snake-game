function init() {
    var canvas = document.getElementById('mycanvas');
    W = canvas.width = 1440;
    H = canvas.height = 780;
    pen=canvas.getContext('2d');
    cs=62;

    snake = {
        init_len:5,
        color: "red",
        cells:[],
        direction: "right",

        createSnake: function(){
            for(var i=this.init_len;i>0;i--){
                this.cells.push({x:i,y:0});
            }
        },
        drawSnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillRect(this.cells[i].x*=cs,this.cells[i].y*=cs, cs-2, cs-2);
            }
        }
    };
    snake.createSnake();
}

function draw() {
    snake.drawSnake();
}

function update() {

}

function gameloop() {
    draw();
    update();
}

init();

var f = setInterval(gameloop, 1000);