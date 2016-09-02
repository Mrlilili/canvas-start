/**
 * Created by admin-b on 2016/8/31.
 * fas
 */
function SnakerBody(length) {
    if (length == undefined) {
        length = 4;
    }
    this.length = length;
    this.x = 0;
    this.y = 0;
    this.w = this.h = 10;
    this.direction = 'right';
    this.headColor = 'red';
    this.bodyColor = 'black';
    this.snakeBodyArray = [];


}
SnakerBody.prototype = {
    draw: function (context) {
        //console.log(this.snakeBodyArray);

        for (var i = 0; i < this.length; i++) {
            context.save()
            context.lineWidth = 1;
            context.strokeStyle = 'green'
            context.beginPath();
            if (i == 0) {
                context.fillStyle = this.headColor;
            } else {
                context.fillStyle = this.bodyColor;
            }
            context.rect(this.snakeBodyArray[i].x, this.snakeBodyArray[i].y, this.w, this.h);
            context.fill();
            context.stroke();
            context.restore();
        }
    },
    move: function (context) {
        this.snakeBodyArray.pop();
        switch (this.direction) {
            case 'up':
                this.snakeBodyArray.unshift({x: this.snakeBodyArray[0].x, y: this.snakeBodyArray[0].y - 10})
                break;
            case 'down':
                this.snakeBodyArray.unshift({x: this.snakeBodyArray[0].x, y: this.snakeBodyArray[0].y + 10})
                break;
            case 'left':
                this.snakeBodyArray.unshift({x: this.snakeBodyArray[0].x - 10, y: this.snakeBodyArray[0].y})
                break;
            case 'right':
                this.snakeBodyArray.unshift({x: this.snakeBodyArray[0].x + 10, y: this.snakeBodyArray[0].y})
                break;
        }


        this.draw(context)
    },
    eat: function () {


        this.snakeBodyArray.push({
            x: this.snakeBodyArray[this.length - 1].x,
            y: this.snakeBodyArray[this.length - 1].y
        })

        this.length += 1;
    }
}