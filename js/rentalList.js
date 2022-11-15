var mb = document.querySelector('.mb');
var area = document.querySelector('.area');
var price = document.querySelector('.price');
var house = document.querySelector('.house');
var more = document.querySelector('.more');
var a1 = document.querySelector('.a1');
var p1 = document.querySelector('.p1');
var h1 = document.querySelector('.h1');
var m1 = document.querySelector('.m1');
var list = document.querySelector('.list');
touch.on(a1, 'tap', function () {
    area.style.display = 'flex';
    price.style.display = 'none';
    house.style.display = 'none';
    more.style.display = 'none';
    mb.style.display = 'block';
    list.style.position = 'absolute';
    list.style.top = '0';
    list.style.left = '0';
    area.style.top = '-127px';
    touch.on(mb, 'tap', function () {
        area.style.display = 'none';
        mb.style.display = 'none';
        list.style.position = 'absolute';
        list.style.top = '181px';
        list.style.left = '0';
    })
})
touch.on(p1, 'tap', function () {
    price.style.display = 'block';
    area.style.display = 'none';
    house.style.display = 'none';
    more.style.display = 'none';
    mb.style.display = 'block';
    list.style.position = 'absolute';
    list.style.top = '0';
    list.style.left = '0';
    price.style.top = '-127px';
    touch.on(mb, 'tap', function () {
        price.style.display = 'none';
        mb.style.display = 'none';
        list.style.position = 'absolute';
        list.style.top = '181px';
        list.style.left = '0';
    })
})
touch.on(h1, 'tap', function () {
    house.style.display = 'block';
    price.style.display = 'none';
    area.style.display = 'none';
    more.style.display = 'none';
    mb.style.display = 'block';
    list.style.position = 'absolute';
    list.style.top = '0';
    list.style.left = '0';
    house.style.top = '-127px';
    touch.on(mb, 'tap', function () {
        house.style.display = 'none';
        mb.style.display = 'none';
        list.style.position = 'absolute';
        list.style.top = '181px';
        list.style.left = '0';
    })
})
touch.on(m1, 'tap', function () {
    more.style.display = 'block';
    price.style.display = 'none';
    house.style.display = 'none';
    area.style.display = 'none';
    mb.style.display = 'block';
    list.style.position = 'absolute';
    list.style.top = '0';
    list.style.left = '0';
    more.style.top = '-127px';
    touch.on(mb, 'tap', function () {
        more.style.display = 'none';
        mb.style.display = 'none';
        list.style.position = 'absolute';
        list.style.top = '181px';
        list.style.left = '0';
    })
})
