console.log('111');
var input = document.getElementsByTagName('input');
var code = document.getElementById('code');
var tshi_ = document.getElementsByClassName('ts');
var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
var reg1 = /^[a-z0-9]+$/i;


input[0].onblur = function () {
    input[0].placeholder = "请输入您的手机号";
}
input[0].onfocus = function () {
    input[0].placeholder = "请输入11的位手机号";
}


var num = Math.floor(Math.random() * 9000) + 1000;
var min = 60;
var time;
code.onclick = function () {
    clearInterval(time);
    alert('验证码' + num)
    var time = setInterval(function () {
        min--
        if (min > 0) {
            code.innerHTML = '(' + min + '秒)重发';
        }
    }, 1000)
}
input[1].onblur = function () {
    if (input[1].value == num) {
        tshi_[0].innerHTML = '验证码输入正确';
        tshi_[0].style.color = 'green';
    } else {
        tshi_[0].innerHTML = '验证码输入错误';
        tshi_[0].style.color = 'red';
    }
}


input[2].onfocus = function () {
    input[2].placeholder = "请输入6-12位字符的密码";
}
input[2].onblur = function () {
    input[2].placeholder = '请输入密码';
}
input[2].onblur = function () {
    if (reg1.test(input[2].value)) {
        tshi_[1].innerHTML = '密码输入正确';
        tshi_[1].style.color = 'green';
    } else {
        tshi_[1].style.color = 'red';
        tshi_[1].innerHTML = '密码输入错误';
    }
}
input[3].onblur = function () {
    if (input[2].value == input[3].value) {
        tshi_[2].innerHTML = '两次密码输入一致';
        tshi_[2].style.color = 'green';
    } else {
        tshi_[2].style.color = 'red';
        tshi_[2].innerHTML = '两次密码输入不一致';
    }
}


var btn = document.getElementsByClassName('btn')[0];
btn.onclick = function () {
    if (reg.test(input[0].value) && input[1].value == num && reg1.test(input[2].value)) {
        alert('修改成功');
        setCookie('phone', input[0].value)
        setCookie('pas', input[2].value);
        window.location.href = 'http://127.0.0.1:5500/carefreeRoom/1-login.html'
    }
}