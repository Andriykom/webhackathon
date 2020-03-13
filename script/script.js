window.addEventListener('scroll', function () {
    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});
let btn1 = document.getElementsByClassName('w-btn')[0];
let btn2 = document.getElementsByClassName('w-btn')[1];
let btn3 = document.getElementsByClassName('w-btn')[2];
btn1.addEventListener('click', function () {
    btn1.classList.add('clicked');
    btn2.classList.remove('clicked');
    btn3.classList.remove('clicked');
});
btn2.addEventListener('click', function () {
    btn1.classList.remove('clicked');
    btn2.classList.add('clicked');
    btn3.classList.remove('clicked');
});
btn3.addEventListener('click', function () {
    btn3.classList.add('clicked');
    btn1.classList.remove('clicked');
    btn2.classList.remove('clicked');
});


let w_btn1 = document.getElementsByClassName('w-bth')[0];
let w_btn2 = document.getElementsByClassName('w-bth')[1];
let w_btn3 = document.getElementsByClassName('w-bth')[2];
btn1.onclick = function(){
    document.getElementById('w-title').innerHTML = "Ти зайшов на сайт - тобі цікаво";
    document.getElementById('w-list1').innerHTML = `Перший крок зроблено. Ти молодець! Тепер варто подумати, що ти будеш робити далі.
                    1. Закриєш сайт; 2. Зареєструєшся на хакатон!`;
    document.getElementById('w-list2').innerHTML = `Постав собі запитання: "Я готовий показати себе?"`;
    document.getElementById('w-list3').innerHTML = `Відповідь "ТАК" ?? То натискай "Зареструватись"`;
};
btn2.onclick = function(){
    document.getElementById('w-title').innerHTML = "Залишай свою пошту вище, та ми тобі напишемо!";
    document.getElementById('w-list1').innerHTML = `Тобі залишається відповісти на лист, який прийде тобі на скриньку протягом дня`;
    document.getElementById('w-list2').innerHTML = `Оплатити 150 грн`;
    document.getElementById('w-list3').innerHTML = `ііііі.... готуватись до старту`;
};
btn3.onclick = function(){
    document.getElementById('w-title').innerHTML = "Настав час хакатону і ти прийшов";
    document.getElementById('w-list1').innerHTML = `Ти маєш зверстати макет(html, css, js(за бажанням)`;
    document.getElementById('w-list2').innerHTML = `Ми вибераємо переможця(критерії оцінювання дивись нижче)`;
    document.getElementById('w-list3').innerHTML = `І переможець отримує грошовий приз(дет. нижче)`;
};
