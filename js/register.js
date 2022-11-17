console.log('111');
// 注册
var input = document.getElementsByTagName('input');
var code = document.getElementById('code');
var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
var reg1 = /^[a-z0-9]+$/i;
var time;
var num = Math.floor(Math.random() * 9000) + 1000;

input[0].onblur = function () {
    input[0].placeholder = "请输入您的手机号";
}
input[0].onfocus = function () {
    input[0].placeholder = "请输入11的位手机号";
}
code.onclick = function () {
    var min = 60;
    num = Math.floor(Math.random() * 9000) + 1000;
    clearInterval(time);
    alert('您的验证码为' + num);
    time = setInterval(function () {
        min--;
        if (min >= 0) {
            code.innerHTML = '(' + min + '秒)重发';
        }
    }, 1000)
}
input[2].onfocus = function () {
    input[2].placeholder = "请输入6-12位字符的密码";
}
input[2].onblur = function () {
    input[2].placeholder = '请输入密码';
}

var btn = document.getElementsByClassName('btn')[0];
btn.onclick = function () {
    if (reg.test(input[0].value) && input[1].value == num && reg1.test(input[2].value)) {
        alert('注册成功');
        setCookie('phone', input[0].value)
        setCookie('pas', input[2].value);
        window.location.href = 'http://127.0.0.1:5500/carefreeRoom/1-login.html'
    } else {
        alert('注册失败，请检查信息是否正确');
    }
}