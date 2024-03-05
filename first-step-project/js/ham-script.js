// "use strict"

// <===================================================First Tabs SERVICES===================================>
const servicesParent = document.querySelector(".services-parent");
const servicesItem = document.querySelectorAll(".services-item");
const servicesContent = document.querySelectorAll(".services-content");


servicesParent.addEventListener("click", function (evt) {
    // проверка - перебираем массив "кнопок" - если есть "активный" класс - то убираем => что бы кнопки переключались!
    servicesItem.forEach(item =>{
        if (item.classList.contains("services-item-active")) {
            item.classList.remove("services-item-active")
        }
    })
    // первое - просто добавляем активный класс кнопке по нажатию - но нужна проверка на уже активный класс, если он есть - убираем
    evt.target.classList.add("services-item-active")
    // терерь проверка - совпадают ли значения в атрибутах дата? - если совпадают меняет активный класс уже у дивака с содержимым! 
    servicesContent.forEach( (item) => {
        if (item.dataset.name === evt.target.dataset.name) {
            item.classList.add("services-content-active");
            return;
        }
        item.classList.remove("services-content-active");
    })
})
// <===================================================Our Amazing Work=====================================================>

const amazingServiceMenu = document.querySelector(".amazing-parent");
let amazingImages = document.querySelectorAll(".amaz-work-item");


amazingServiceMenu.addEventListener("click", function (event) {
    if (event.target.classList.contains("amazing-parent")) {
        return;
    }
    amazingImages.forEach(item => {
        if (event.target.dataset.filter === item.dataset.filter) {
            item.classList.add("amaz-item-active");
        } else if (event.target.dataset.filter === "All"){
            item.classList.add("amaz-item-active");
        }
        else {
            item.classList.remove("amaz-item-active");
        }
    })

})
// <=============!=========Load more button========!============>
const loadMore = document.getElementById("load-btn");
const amazParent = document.querySelector(".amaz-img-parent");
const grDes = "Graphic Design";
const webDes = "Web Design";
const landPgs = "Landing Pages";
const wordprs = "Wordpress";
const spinner = document.querySelector(".spinner")


loadMore.addEventListener("click", function () {
    spinner.classList.add("spinner-active")
    let spinTimer = setTimeout(function () {
        spinner.classList.remove("spinner-active")
        for (let i = 4; i <=6; i++) {
            amazParent.insertAdjacentHTML("beforeend",`<li class="amaz-work-item amaz-item-active" data-filter="Graphic Design" >
                    <div class="hover-block">
                        <div class="hover-links-parent">
                            <a href="#" class="hover-block-links first-link"></a>
                            <a href="#" class="hover-block-links second-link"></a>
                        </div>
                        <p class="hover-title">creative design</p>
                        <p class="hover-img-filter">${grDes}</p>
                    </div>
                    <img src="./image/graphic-design/graphic-design${i}.jpg" alt="${grDes}${i}"></li>`);
            amazParent.insertAdjacentHTML("beforeend", `<li class="amaz-work-item amaz-item-active" data-filter="Web Design" >
                    <div class="hover-block">
                        <div class="hover-links-parent">
                            <a href="#" class="hover-block-links first-link"></a>
                            <a href="#" class="hover-block-links second-link"></a>
                        </div>
                        <p class="hover-title">creative design</p>
                        <p class="hover-img-filter">${webDes}</p>
                    </div>
                    <img src="./image/web-design/web-design${i}.jpg" alt="${webDes}${i}"></li>`);
            amazParent.insertAdjacentHTML("beforeend", `<li class="amaz-work-item amaz-item-active" data-filter="Landing Pages" >
                    <div class="hover-block">
                        <div class="hover-links-parent">
                            <a href="#" class="hover-block-links first-link"></a>
                            <a href="#" class="hover-block-links second-link"></a>
                        </div>
                        <p class="hover-title">creative design</p>
                        <p class="hover-img-filter">${landPgs}</p>
                    </div>
                    <img src="./image/landing-page/landing-page${i}.jpg" alt="${landPgs}${i}"></li>`);
            amazParent.insertAdjacentHTML("beforeend", `<li class="amaz-work-item amaz-item-active" data-filter="Wordpress" >
                    <div class="hover-block">
                        <div class="hover-links-parent">
                            <a href="#" class="hover-block-links first-link"></a>
                            <a href="#" class="hover-block-links second-link"></a>
                        </div>
                        <p class="hover-title">creative design</p>
                        <p class="hover-img-filter">${wordprs}</p>
                    </div>
                    <img src="./image/wordpress/wordpress${i}.jpg" alt="${wordprs}${i}"></li>`);

        }
        amazingImages = document.querySelectorAll(".amaz-work-item");
        loadMore.style.cssText = "display: none;"
    }, 2500);
})

// <=====================================================slider Images============================================================>

const leftSliderBtn = document.getElementById("slider-left-btn");
const rightSliderBtn = document.getElementById("slider-right-btn");
const persons = document.querySelectorAll(".person-info-item");
const slider = document.querySelector(".slider-wrapper");
const sliderItem = document.querySelectorAll(".slider-item img");
let current = 0;
let currentImage = document.querySelector(".slider-active")

slider.addEventListener("click", (event) => {
    sliderItem.forEach(item => {
        if (item.closest("li").classList.contains("slider-active")) {
            item.closest("li").classList.remove("slider-active")
        }
    })
    event.target.closest("li").classList.add("slider-active");
    persons.forEach((item, index)=> {
        if (event.target.closest("li").dataset.name === item.dataset.name) {
            item.classList.add("is-active");
            current = index;
        } else {
            item.classList.remove("is-active");
        }
    })
})

rightSliderBtn.addEventListener("click", function () {
    persons[current].classList.remove("is-active");
    sliderItem[current].closest("li").classList.remove("slider-active");
    current++;
    if (current === sliderItem.length) {
        current = 0;
    }
    sliderItem[current].closest("li").classList.add("slider-active");
    persons[current].classList.add("is-active");
})

leftSliderBtn.addEventListener("click", function () {
    persons[current].classList.remove("is-active");
    sliderItem[current].closest("li").classList.remove("slider-active");
    current--;
    if (current < 0) {
        current = 3;
    }
    sliderItem[current].closest("li").classList.add("slider-active");
    persons[current].classList.add("is-active");
})


