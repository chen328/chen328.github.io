//蛇 自调用函数
(function () {
    //存放蛇身体
    var elements = [];

    //蛇构造函数
    function Snake(width,height,direction) {
        this.width = width || 20;
        this.height = height || 20;
        //蛇身体
        this.body = [
            {x:3,y:2,color:"red"},//头部
            {x:2,y:2,color:"orange"},//身体
            {x:1,y:2,color:"orange"}//身体
        ];
        //方向
        this.direction = direction || "right";

        //蛇初始化
        Snake.prototype.init = function (map) {
            //先删除蛇
            remove();
            //循环创建蛇身体
            for (var i =0; i<this.body.length;i++){
                var obj = this.body[i];
                var div = document.createElement("div");
                map.appendChild(div);
                //设置样式
                div.style.width = this.width + "px";
                div.style.height = this.height + "px";
                div.style.position = "absolute";
                div.style.left = obj.x * this.width + "px";
                div.style.top = obj.y * this.height + "px";
                div.style.backgroundColor = obj.color;
                //方向还没定


                //未来方便删除把div加入element数组
                elements.push(div);


            }
        };

        //为原型添加方法----蛇动起来
        Snake.prototype.move = function (food,map) {
            //身体移动
            for (var i = this.body.length - 1;i>0;i--){
                this.body[i].x = this.body[i-1].x;
                this.body[i].y = this.body[i-1].y;

            }
            //判断头部方向
            switch(this.direction){
                case "right":
                    this.body[0].x += 1;
                    break;
                case "left":
                    this.body[0].x -= 1;
                    break;
                case "top":
                    this.body[0].y -= 1;
                    break;
                case "bottom":
                    this.body[0].y += 1;
                    break;
            }

            //获取蛇头与食物坐标
            var headX = this.body[0].x * this.width;
            var headY = this.body[0].y * this.height;
            //console.log(headX+"===="+food.x);
            //相遇时候
            if (headX == food.x && headY == food.y){
                var last = this.body[this.body.length-1];

                this.body.push({
                    x:last.x,
                    y:last.y,
                    color:last.color
                });
                //this.body.push(last);
                console.log(this.body);
                food.init(map);
            }

        };

        //删除蛇的私有函数
        function remove() {
            //删除map中蛇的div 以及数组中每个元素
            for (var i = elements.length-1;i>=0;i--){
                //从子元素找到父元素再删除子元素
                var ele = elements[i];
                ele.parentNode.removeChild(ele);
                elements.splice(i,1);

            }
        }

    }

    window.Snake = Snake;
}());