function init() {
    var canvas = document.getElementById('mycanvas');
    W = canvas.width = 1380;
    H = canvas.height = 720;
    pen=canvas.getContext('2d');
    cs=60;

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
        //New update function for complete movement
        updateSnake:function(){
            // console.log("updateSnake");
            // console.log(this.direction);

            this.cells.pop();
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;
            // console.log(headX + " " + headY);
            var nextX, nextY;
            if(this.direction=="right"){
                nextX=headX+1;
                nextY=headY;
            } else if(this.direction=="left"){
                nextX=headX-1;
                nextY=headY;
            } else if(this.direction=="down"){
                nextX=headX;
                nextY=headY+1;
            } else {
                nextX=headX;
                nextY=headY-1;
            }
            // console.log(X+" " + Y);
            this.cells.unshift({x:nextX, y:nextY});

            var last_x=Math.round(W/cs);
            var last_y=Math.round(H/cs);

            if(this.cells[0].x < -1 || this.cells[0].y < -1 || this.cells[0].x > last_x || this.cells[0].y > last_y){
                window.alert("Sorry the game is over!");
            }
        }

        // previous udate fucntion for snake movement to right
        // updateSnake:function(){
        //     console.log("updateSnake");
            // this.cells.pop();
            // var headX = this.cells[0].x;
            // var headY = this.cells[0].y;
            // // console.log(headX + " " + headY);

            // var X=headX+1;
            // var Y=headY;
            // // console.log(X+" " + Y);

            // this.cells.unshift({x:X, y:Y});
        // },
    };
    snake.createSnake();
    
    function keyPressed(e) {
        console.log("keyPressed", e);
        if(e.key=="ArrowRight"){
            snake.direction="right";
        } else if(e.key=="ArrowLeft"){
            snake.direction="left";
        } else if(e.key=="ArrowDown"){
            snake.direction="down";
        } else if(e.key=="ArrowUp"){
            snake.direction="up";
        }
        // console.log(snake.direction);
    }
    // Adding an event listener on the document object
    document.addEventListener('keydown', keyPressed);
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