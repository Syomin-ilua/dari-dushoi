const burgerBtn = document.querySelector('.burger__btn');
const burgerMenu = document.querySelector('.burger__menu_wrapper');

burgerBtn.addEventListener('click', function(e) {
    e.preventDefault();

    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');

    if(burgerMenu.classList.contains('active')) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = '100%';
    } else {
        document.body.style.position = '';
        document.body.style.top = '';
    }
});

let swiper = new Swiper(".swiper", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

const modalBody = document.querySelectorAll('.modal__body');
const buttonMoreItem = document.querySelectorAll('.button__modal_window');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelectorAll('.modal__close');

buttonMoreItem.forEach(buttonItem => {
    buttonItem.addEventListener('click', function(e) {
        e.preventDefault();

        let buttonAttribute = buttonItem.getAttribute('data-modal');
        let modalItem = document.getElementById(buttonAttribute);
        
        modalItem.classList.add('active');
        overlay.classList.add('active');
        scrollController.disabledScroll();
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault;

        let modalCloseItem = button.closest('.modal__body');

        modalCloseItem.classList.remove('active');
        overlay.classList.remove('active');
        scrollController.enabledScroll();
    });
});

overlay.addEventListener('click', function(e) {
    modalBody.forEach(modal => {
        if(modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    if(orderForm.classList.contains('active')) {
        orderForm.classList.remove('active');
    }

    overlay.classList.remove('active');
    scrollController.enabledScroll();
});

const btnCloseModalOrder = document.querySelector('.modal__order_close');
btnCloseModalOrder.addEventListener('click', function(e) {
    e.preventDefault();

    orderForm.classList.remove('active');
    overlay.classList.remove('active');
    scrollController.enabledScroll();
});

const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overlflow: hidden;
            position: fixed;
            top: -${scrollController.scrollPosition}px;
            left: 0;
            height: 100vh;
            width: 100vw;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `;
        document.documentElement.style.scrollBehavior = 'unset';
    },
    enabledScroll() {
        document.body.style.cssText = '';
        window.scroll({top: scrollController.scrollPosition})
        document.documentElement.style.scrollBehavior = '';
    }
}

const horseTime = document.querySelector('#horse-time');
let priceHorse = document.querySelector('.price__horse');
horseTime.addEventListener('change', () => {
    let time = horseTime.value;

    switch(time) {
        case '30 мин': 
            priceHorse.innerText = 'от 990 ₽';
            break;
        case '1 час': 
            priceHorse.innerText = '1 500 ₽';
            break;
        case '1,5 часа': 
            priceHorse.innerText = '5 000 ₽';
            break;
    }
});

const driveRoute = document.querySelector('#drive-time');
let priceDrive = document.querySelector('.price__drive');
driveRoute.addEventListener('change', () => {
    let route = driveRoute.value;

    switch(route) {
        case '1 маршрут': 
            priceDrive.innerText = '1 800 ₽';
            break;
        case '2 маршрут': 
            priceDrive.innerText = '3 000 ₽';
            break;
        case '3 маршрут': 
            priceDrive.innerText = '5 500 ₽';
            break;
    }
});

const yachtTime = document.querySelector('#yacht-time');
let priceYacht = document.querySelector('.price__yacht');

yachtTime.addEventListener('change', () => {
    let time = yachtTime.value;

    switch(time) {
        case '1 час': 
            priceYacht.innerText = '3 500 ₽';
            break;
        case '2 часа': 
            priceYacht.innerText = '6 500 ₽';
            break;
        case '3 часа': 
            priceYacht.innerText = '9 000 ₽';
            break;
    }
});

const flyTime = document.querySelector('#fly-time');
let priceFly = document.querySelector('.fly__price');

flyTime.addEventListener('change', () => {
    let time = flyTime.value;

    switch(time) {
        case '3 минуты': 
            priceFly.innerText = '1 800 ₽';
            break;
        case '6 минут': 
            priceFly.innerText = '3 000 ₽';
            break;
        case '10 минут': 
            priceFly.innerText = '4 800 ₽';
            break;
    }
});

const domeQuantity = document.querySelector('#dome-quantity');
let priceDome = document.querySelector('.price__dome');

domeQuantity.addEventListener('change', () => {
    let quantity = domeQuantity.value;
    
    switch(quantity) {
        case 'На двоих': 
            priceDome.innerText = '3 000 ₽';
            break;
        case 'До 6 чел.': 
            priceDome.innerText = '5 000 ₽';
            break;
    }
});

const orderButton = document.querySelectorAll('.order__button');
const orderForm = document.querySelector('.modal_body_order');

orderButton.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        if(button.classList.contains('modal__button')) {
            modalBody.forEach(modal => {
                if(modal.classList.contains('active')) {
                    modal.classList.remove('active');
                }
            });
        }
        orderForm.classList.add('active');
        overlay.classList.add('active');
        scrollController.disabledScroll();
    });
});

const linksDesktop = document.querySelectorAll('a[href*="#"]');

linksDesktop.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let blockID = link.getAttribute('href');
        
        if(link.classList.contains('link__scroll-desktop')) {
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
            burgerBtn.classList.toggle('active');
            burgerMenu.classList.toggle('active');

            if(burgerMenu.classList.contains('active')) {
                document.body.style.position = 'fixed';
                document.body.style.top = `-${window.scrollY}px`;
                document.body.style.width = '100%';
            } else {
                document.body.style.position = '';
                document.body.style.top = '';
            }

            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    })
});

const accordionHeaders = document.querySelectorAll('.accordion__header');
const questions = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEventListener('click', function(e) {
        e.preventDefault();

        let accordionActual = accordionHeader.getAttribute('data-id');
        let question = document.getElementById(accordionActual);

        let content = accordionHeader.nextElementSibling;

        if(content.style.maxHeight) {
            document.querySelectorAll('.accordion__text').forEach(el => {
                el.style.maxHeight = null;
            });
            questions.forEach(question => {
                question.classList.remove('active');
            });
        } else {
            document.querySelectorAll('.accordion__text').forEach(el => {
                el.style.maxHeight = null;
                question.classList.remove('active');
            });
            questions.forEach(question => {
                question.classList.remove('active');
            });
            question.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});