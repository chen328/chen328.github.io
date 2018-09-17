//游戏初始化---自调用
(function(){
    var that = null;
    //游戏初始化构造函数
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    //游戏原型初始化
    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
        this.runSnake(this.food,this.map);
        this.bindKey();
    };

    //移动蛇
    Game.prototype.runSnake = function(food,map){

        //横坐标的最大值
        var maxX = map.offsetWidth / this.snake.width;
        //纵坐标的最大值
        var maxY = map.offsetHeight / this.snake.height;

        var timeId = setInterval(function () {
            this.snake.move(food,map);
            this.snake.init(map);

            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;

            if (headX < 0 || headX >= maxX || headY < 0 || headY >=maxY){
                clearInterval(timeId);
                alert("游戏结束");
            }
        }.bind(that), 150)
    };

    //添加原型方法,获取按键值,改变蛇方向
    Game.prototype.bindKey = function(){
        //给页面绑定按键事件
        document.addEventListener("keydown",function (event) {
            switch (event.keyCode){
                //里面this是document的事件不是Game
                case 37:this.snake.direction = "left";break;
                case 38:this.snake.direction = "top";break;
                case 39:this.snake.direction = "right";break;
                case 40:this.snake.direction = "bottom";break;

            }

        }.bind(that),false)

    };

    window.Game = Game;
}());