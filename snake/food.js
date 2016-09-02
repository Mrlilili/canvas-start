/**
 * Created by admin-b on 2016/8/31.
 * fas
 */
function Food(x, y) {
    this.radius = 3;
    this.color = '#ccc';
    this.x = x;
    this.y = y;
}
Food.prototype.draw = function (context) {
    context.save();
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.closePath();
    context.fillStyle = this.color;
    context.fill();
    context.restore();
}
