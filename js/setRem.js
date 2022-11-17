function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}

// window.onresize = setRem;
var timer = null;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        setRem();
    }, 300)
}
// 当页面 加载时也要调用setRem
window.onload = setRem;