function setRem() {
    let uiW = 375;
    let winW = document.documentElement.clientWidth || document.body.clientWidth;
    ratio = winW / uiW;
    document.documentElement.style.fontSize = ratio * 10 + "px";
}
setRem();
// 防抖

let timer = null;
window.onresize = () => {
    clearTimeout(timer);
    timer = setTimeout(setRem, 300);
}