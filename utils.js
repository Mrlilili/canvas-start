window.utils = {};
//鼠标点击事件
window.utils.captureMouse = function (element) {
    var mouse = {
        x: 0, y: 0
    };

    element.addEventListener('mousemove', function (event) {
        var x, y;
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        //将当前的坐标值减去元素的偏移位置，即为鼠标位于当前canvas的位置
        x -= element.offsetLeft;
        y -= element.offsetTop;

        mouse.x = x;
        mouse.y = y;
    }, false)
    //返回值为mouse对象
    return mouse;
}

//触摸事件
window.utils.captureTouch = function (element) {
    var touch = {
        x: null,
        y: null,
        isPressed: false,
        event: null
    };
      var body_scrollLeft = document.body.scrollLeft,
          element_scrollLeft = document.documentElement.scrollLeft,
          body_scrollTop = document.body.scrollTop,
          element_scrollTop = document.documentElement.scrollTop,
          offsetLeft = element.offsetLeft,
          offsetTop = element.offsetTop;

    // 绑定touchstart事件
    element.addEventListener('touchstart', function (event) {
        touch.isPressed = true;
        touch.event = event;
    }, false);

    // 绑定touchend事件
    element.addEventListener('touchend', function (event) {
        touch.isPressed = false;
        touch.x = null;
        touch.y = null;
        touch.event = event;
    }, false);

    //绑定touchmove事件
    element.addEventListener('touchmove', function (event) {
        var x, y,
            touch_event = event.touches[0]; //第一次touch

        if (touch_event.pageX || touch_event.pageY) {
            x = touch_event.pageX;
            y = touch_event.pageY;
        } else {
            x = touch_event.clientX + body_scrollLeft + element_scrollLeft;
            y = touch_event.clientY + body_scrollTop + element_scrollTop;
        }
        //减去偏移量
        x -= offsetLeft;
        y -= offsetTop;

        touch.x = x;
        touch.y = y;
        touch.event = event;
    }, false);
    //返回touch对象
    return touch;
};


utils.containsPoint = function(rect, x, y){
    return !(x<rect.x || x>rect.x + rect.width ||
    y<rect.y || y>rect.y + rect.height);
}

//动画循环
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (callback) {
        return window.setTimeout(callback, 17 /*~ 1000/60*/);
    });
}

//动画循环取消
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
    window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
    window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
    window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
    window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
    window.clearTimeout);
}