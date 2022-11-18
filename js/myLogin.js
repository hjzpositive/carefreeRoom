// 我的登录 登录后显示的页面
window.onload = function () {

    var login = document.getElementById('login');
    var user = localStorage.getItem('user');
    var islogin = localStorage.getItem('islogin');
    if (islogin) {
        var str = `<p>欢迎您，${user}</p>`;
        login.innerHTML = str;
        login.id = 'login';
    }
}




// 获取退出登录按钮
// var btn = document.getElementsByClassName("tuichu")[0];
// btn.onclick = function () {
//     alert('确定要退出登录吗？');
//     window.location.href = '../1-my.html'
// }




// var user = document.getElementsByClassName("login")[0];

// // 判断用户是否登录成功
// if (window.localStorage.getItem("true")) {
//     user.innerHTML = "欢迎你，" + window.localStorage.getItem("true");
//     // 退出登录功能
//     btn.onclick = function () {
//         window.localStorage.removeItem("true");
//         setTimeout(function () {
//             window.location.href = "./my.html";
//         }, 1000);
//     };
// }