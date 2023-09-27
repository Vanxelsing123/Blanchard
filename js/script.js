/*swiper*/


const swiper = new Swiper('.swiper-hero', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

});

var swiper2 = new Swiper(".swiper-gallery", {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    320: {
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
},
  pagination: {
      el: ".gallery-pagination",
      type: "fraction",
    },
    slidesPerGroup: 2,
    navigation: {
      nextEl: ".gallery-button-next",
      prevEl: ".gallery-button-prev",
    },
  });


  const swiper3 = new Swiper('.swiper-events', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
    spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
  },
    navigation: {
      nextEl: '.swiper-button-next-events',
      prevEl: '.swiper-button-prev-events',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:true,
    },
  });

  var swiper4 = new Swiper(".swiper-projects", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 3,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
  },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".four-btn-next",
      prevEl: ".four-btn-prev",
    },
  });


/*dropdown*/

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})


const btns = document.querySelectorAll(".btn-dropdown");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

/* document.querySelectorAll('.dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown-menu').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open')
                },0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`) ) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                }
            }
        });
    });
}); */

/*accordion*/

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordion__control');
            const content = self.querySelector('.accordion__content');
            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                
            } else
            control.setAttribute('aria-expanded', false);
            content.setAttribute('aria-hidden', true);
           
        });
    });
});

/*maps*/

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.754831, 37.610416],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
    geometry: {
    type: "Point", // тип геометрии - точка
    coordinates: [] // координаты точки
    }
    });
    // Собственные стили //
    var myPlacemark = new ymaps.Placemark([55.754831, 37.610416], {}, {
        iconImageHref: 'mdi_location_on.svg',
        iconImageSize: [30,42],
        iconImage0ffset: [-3, -42]
    });
    // Размещение геообъекта на карте.
    myMap.controls.remove('zoomControl');
    myMap.controls.remove("mapTools")
    .remove("typeSelector")
    .remove("searchControl")
    .remove("trafficControl")
    .remove("miniMap")
    .remove("scaleLine")
    .remove("routeEditor")
    .remove("smallZoomControl");
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');
  }

  // burger

  const burger = document.querySelector('.burger');
const header__nav = document.querySelector('.header__nav');
const header__item = header__nav.querySelectorAll('a');
const body = document.body;

burger.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger.classList.toggle('burger--active');
    header__nav.classList.toggle('header__nav--visible');
});

header__item.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    header__nav.classList.remove('header__nav--visible')
    });
});


// search

const headerBtn = document.querySelector('.header__btn');
const headerForm = document.querySelector('.header__form');
const formBtn = document.querySelector('.form__header__btn');

    headerBtn.addEventListener('click',  (e) => {
        headerForm.classList.toggle("header__form--active");
    });

    formBtn.addEventListener('click',  (e) => {
        event.preventDefault();
        headerForm.classList.remove("header__form--active");
    });


// Select 
const defaultSelect = () => {
  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false
  });
}

defaultSelect()

