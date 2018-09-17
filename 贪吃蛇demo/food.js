//食物
(function () {
    //保存食物
    var elements = [];
    //创建食物的构造函数
    function Food(width,height,color,x,y) {
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "yellow";
        this.x = x || 0;
        this.y = y || 0;
    }
    //生成随机食物的方法
    Food.prototype.init = function (map) {
        remove();
        var div = document.createElement("div");
        map.appendChild(div);
        div.style.position = "absolute";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        //随机产生x,y坐标
        this.x = parseInt(Math.random()* map.offsetWidth / this.width) * this.width;
        this.y = parseInt(Math.random() * map.offsetHeight / this.height) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        elements.push(div);
    };

    //私有函数,删除食物
    function remove (){
        for (let i = 0; i < elements.length; i++) {
            var ele = elements[i];
            //删除子元素
            ele.parentNode.removeChild(ele);
            ////再次把elements中的这个子元素也要删除.不是很懂
            elements.splice(i, 1);


        }
    }
    window.Food = Food;
} ());