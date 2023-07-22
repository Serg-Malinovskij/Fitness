"use strict"
AOS.init(); // инициализируем библиотеку AOS

// Spoller Btn

// let spollerBtn = document.getElementById('header-spoller');
// const spollerIcon = document.querySelector('.header__spoller-icon');
// const spollerList = document.querySelector('.header__spoller-list');

// console.log(spollerBtn);
// console.log(spollerIcon);
// console.log(spollerList);

// spollerBtn.addEventListener('click', function(){
//  spollerIcon.classList.toggle('rotate');
//  spollerList.classList.toggle('_open');
//  });

//  document.addEventListener('click', function(e){
//   if(e.target.closest(".header__spoller-list-item")){
//     spollerIcon.classList.remove('rotate');
//     spollerList.classList.remove('_open');
//   }
//   })

// ================================================================================
// menu-burger
const iconBurger = document.querySelector('.menu__icon');  // получаем в константу иконку меню-бургер
const headerMenu = document.querySelector('.header__menu');  // получаем в константу весь блок с меню
const menuItem = document.querySelectorAll('.menu__item');  // получаем в константу все пункты меню

iconBurger.addEventListener('click', function (e) {
  iconBurger.classList.toggle('menu-open');
  headerMenu.classList.toggle('_open');
  document.body.classList.toggle('_lock');
}
);

//  проходим циклом forEach по пунктам меню и назначаемм каждому по клику обработчик, который срабатывает 
// при открытом мобильном меню. Обработчик закрывает мобильное меню и возвращает иконку бургера-меню в начальное "закрытое" положение
// забираем у body класс ._lock(запрещает прокрутку)
menuItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    if (headerMenu.closest('._open')) {
      headerMenu.classList.remove('_open');
      iconBurger.classList.remove('menu-open');
      document.body.classList.remove('_lock');
     }
  })
})

// назначаем обработчик на весь document
// document.addEventListener('click', function(e){
//   // если мы кликнули не на блок меню, то забираем у меню user-header класс .open и оно закрывается
// if(!e.target.closest('.user-header')){
//   user_menu.classList.remove('open');
// }
// })

// поле ввода для поиска
const searchIcon = document.querySelector('.action-header__search-btn');
const searchBox = document.querySelector('.action-header__search-box');
// searchIcon.addEventListener('click', function(){
//   searchBox.classList.toggle('_active');
// })


// ТАБЫ tab --в переводе с английского "вкладка"
const tabs = document.querySelectorAll('.tabs__item'); // получаем в константу все табы-вкладки на странице
const contents = document.querySelectorAll('.tabs__content-block');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabs.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
  tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
    tabs.forEach(function (tab) {
      tab.classList.remove("active");
    });
    // и добавляем текущему
    tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс active у предыдущего активного блока:
    contents.forEach(function (item) {
      item.classList.remove('active');
    })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс active (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
    contents[index].classList.add('active');
  });

})


// ТАБЫ tab --в переводе с английского "вкладка"
const tabs2 = document.querySelectorAll('.news__tab-item'); // получаем в константу все табы-вкладки на странице
const contents2 = document.querySelectorAll('.news__tab-content');   // получаем в константу все блоки с контентом таба на странице

// проходим циклом forEach по коллекции вкладок:
tabs2.forEach(function (tab, index) {
  // по клику добавляем выбранному табу класс active:
  tab.addEventListener("click", function () {
    //ПРЕДВАРИТЕЛЬНО проходим по всем табам удаляем класс active у предыдущего активного таба:
    tabs2.forEach(function (tab) {
      tab.classList.remove("active");
    });
    // и добавляем текущему
    tab.classList.add("active");

    //проходим по всем блокам с контентом и удаляем класс active у предыдущего активного блока:
    contents2.forEach(function (item) {
      item.classList.remove('active');
    })
    // для отображения содержимого в соответствии с выбранной вкладкой, добавляем блоку с контентом класс active (текущий индекс совпадает,
    //  т.к. кол-во вкладок и кол-во блоков с контентом одинаково)
    contents2[index].classList.add('active');
  });

})





const header = document.querySelector('.header');
console.log(header);
const initialYValue = window.scrollY;
console.log(`величина прокрутки равна: ${initialYValue}px`);

document.addEventListener('scroll', function headerSetBackground(){
  const windowScrollTop = window.scrollY;

  if(windowScrollTop > initialYValue ){
    header.classList.add('bg');
    
  } else{
    header.classList.remove('bg');
  }
 
});


//  кнопка НАВЕРХ
 const scrollBtn = document.querySelector('.go-top'); // получаем в константу нашу кнопку
 // если проскроллить более чем на высоту окна, то добавляем кнопке класс active(показываем кнопку)
window.addEventListener('scroll', function(){
   if(window.scrollY>window.innerHeight){
    scrollBtn.classList.add('active');
  }
  else{
    scrollBtn.classList.remove('active');
  }
})
//  функция прокрутки страницы в самый верх (метод window.scrollTo(x,y)(можно передать объект с параметрами))
function scrollTopTop(){
window.scrollTo( {
  top:0,
  behavior:'smooth'
    }
  )
}
scrollBtn.addEventListener('click', scrollTopTop);






