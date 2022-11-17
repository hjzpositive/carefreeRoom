console.log('111');
//tab切换
var login = document.getElementsByClassName('act')
var lis = document.querySelector('.title').children;
for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        var index = this.getAttribute('index');
        lis[index].className = 'active';
        // console.log(lis.length);
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
            lis[index].className = 'active'
        }
        for (var k = 0; k < login.length; k++) {
            login[k].style.display = 'none';
            login[index].style.display = 'block'
        }
    }
}

//普通登录
var input_ = document.getElementsByClassName('input1')[0];
var input_1 = document.getElementsByClassName('input2')[0];
var tshi_ = document.getElementsByClassName('ts');
console.log(input_);
// console.log(tshi_[0].innerHTML);
var iphoneage = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
var passwordage = /^[a-z0-9]+$/i;
input_.onfocus = function () {
    // alert('1111')
    tshi_[0].innerHTML = '请输入正确的手机号';
    tshi_[0].style.display = 'red';
}
input_.onblur = function () {
    console.log(iphoneage.test(input_.value));
    if (iphoneage.test(input_.value)) {
        // alert('111')
        tshi_[0].innerHTML = '手机格式输入正确';
        tshi_[0].style.color = 'green';
    } else {
        tshi_[0].style.color = 'red';
        tshi_[0].innerHTML = '手机格式输入错误';
    }
}
input_1.onblur = function () {
    if (passwordage.test(input_1.value)) {
        tshi_[1].innerHTML = '密码输入正确';
        tshi_[1].style.color = 'green';
    } else {
        tshi_[1].style.color = 'red';
        tshi_[1].innerHTML = '密码输入错误';
    }
}
// 验证码登录

var input_2 = document.getElementsByClassName('input3')[0];
var input_3 = document.getElementsByClassName('input4')[0];
var tshi_1 = document.getElementsByClassName('ts1');
var code = document.getElementById('code');
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
input_3.onblur = function () {
    if (input_3.value == num) {
        tshi_1[0].innerHTML = '验证码输入正确';
        tshi_1[0].style.color = 'green';
    } else {
        tshi_1[0].innerHTML = '验证码输入错误';
        tshi_1[0].style.color = 'red';
    }
}

