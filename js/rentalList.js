let mb = document.querySelector('.mb');
let area = document.querySelector('.area');
let price = document.querySelector('.price');
let house = document.querySelector('.house');
let more = document.querySelector('.more');
let a1 = document.querySelector('.a1');
let p1 = document.querySelector('.p1');
let h1 = document.querySelector('.h1');
let m1 = document.querySelector('.m1');
let list = document.querySelector('.list');
// 直接写的方法
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
let as = document.querySelector('.list').querySelectorAll('a');
console.log(as);
as.forEach((item, index) => {

    touch.on(as, 'tap', function () {
        as[index].className = '';
        this.className = 'active';
    })
});