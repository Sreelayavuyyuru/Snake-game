function init() {
    var canvas = document.getElementById('mycanvas');
    W = canvas.width = 1380;
    H = canvas.height = 720;
    pen=canvas.getContext('2d');
    cs=61;

    snake = {
        init_len:5,
        color: "black",
        cells:[],
        direction:"right",

        createSnake:function(){
            for(var i=this.init_len;i>0;i--){
                this.cells.push({x:i,y:0});
            }
        },
        drawSnake:function(){
            for(var i=0;i<this.cells.length;i++){
                pen.fillStyle = this.color;
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs, cs-1, cs-1);
            }
        },
        updateSnake:function(){
            console.log("updateSnake");
            this.cells.pop();
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;
            console.log(headX + " " + headY);

            var X=headX+1;
            var Y=headY;
            console.log(X+" " + Y);

            this.cells.unshift({x:X, y:Y});
        }
    };
    snake.createSnake();
}

function draw() {
    pen.clearRect(0, 0, W, H);
    snake.drawSnake();
}

function update() {
    snake.updateSnake();
}

function gameloop() {
    draw();
    update();
}

init();

var f = setInterval(gameloop, 100);