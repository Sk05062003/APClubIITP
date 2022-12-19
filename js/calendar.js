const calendar_wrapper = document.querySelector(".calendar-wrapper");
const previousYear = document.querySelector(".previous");
const currentYear = document.querySelector(".current");
const nextYear = document.querySelector(".next");
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
fetch("./calendar_data.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        data.forEach(el => {
            const htmlData = `<div class="calendar-card swiper-slide" data-year=${new Date(el.date).getFullYear()}>
                                <div class="circular-date">
                                    <p class="circular-date-heading">${new Date(el.date).getDate()}/${Number(new Date(el.date).getMonth()) + 1}</p>
                                    <p class="circular-date-heading">${weekday[new Date(el.date).getDay()]}</p>
                                </div>
                                <div class="text-content">
                                    <h2 class="card-title">${el.title}</h2>
                                    <p class="description">
                                        ${el.description}
                                    </p>
                                </div>
                        </div>`;
            calendar_wrapper.insertAdjacentHTML("beforeend", htmlData);
        });
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            centerSlide: true,
            fade: true,
            grabCursor: true,
            pagination: {
                el: ".cal-pagination",
                clickable: true,
                dynamicBullets: true
            },
            navigation: {
                nextEl: ".cal-button-next",
                prevEl: ".cal-button-prev"
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                650: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3,
                },
            }
        });

        setInterval(() => {
            const active = calendar_wrapper.querySelector(".swiper-slide-active");
            // console.log(active.dataset.year);
            previousYear.innerHTML = Number(active.dataset.year) - 1;
            currentYear.innerHTML = active.dataset.year;
            nextYear.innerHTML = Number(active.dataset.year) + 1;
        }, 100);
    });
