/**
 * Created by admin-b on 2016/8/31.
 * fas
 */
canvas.addEventListener('touchstart', function (e) {
    console.log(e.touches[0].clientX);
})
canvas.addEventListener('touchend', function (e) {
    console.log(e.changedTouches[0].clientX);
})