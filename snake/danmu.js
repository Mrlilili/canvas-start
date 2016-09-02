function Danmu() {
    this.danmuArray = ['你的意念不够强', '逼出了一些不可描述的字幕', '意念不够开启游戏', '还是用滑动进行控制吧', '左滑左转', '右滑右转', '上滑向上', '下滑向下', '长按加速', '心情好就做个积分排行榜', '看明白了完了就点击屏幕开始吧', '你的意念不够强', '逼出了一些不可描述的字幕', '意念不够不好开始完啦', '还是用滑动进行控制吧', '左滑左转', '右滑右转', '上滑向上', '下滑向下', '长按加速', '心情好就做个积分排行榜', '看明白了完了就点击屏幕开始吧', '点击屏幕开始', '点击屏幕开始', '点击屏幕开始','点击屏幕开始', '点击屏幕开始','点击屏幕开始', '点击屏幕开始'];
    this.viewW = window.innerWidth;
    this.viewH = window.innerHeight;


}
Danmu.prototype.print = function (viewBox) {


    var danmuBox = document.createElement("div");
    danmuBox.className = 'danmuBox';
    var danmuItemArray = [];
    for (var i = 0; i < this.danmuArray.length; i++) {

        danmuItemArray[i] = document.createElement('span')
        danmuItemArray[i].className = 'danmuItem speed' + (Math.floor(Math.random() * 9) + 1);
        var danmuText = document.createTextNode(this.danmuArray[i]);
        //danmuItemArray[i].style.left = Math.random() * this.viewW + 'px';
        danmuItemArray[i].style.left = 100 + Math.random() * 100 + '%';

        danmuItemArray[i].style.top = Math.random() * this.viewH + 'px';
        danmuItemArray[i].appendChild(danmuText);
    }

    for (var i in danmuItemArray) {

        danmuBox.appendChild(danmuItemArray[i]);

    }


    viewBox.appendChild(danmuBox);


}