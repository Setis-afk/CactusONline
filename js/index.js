//Fixed-Nav
window.addEventListener('scroll', () => {
	const nav = document.querySelector('.main-nav');

	const y = window.scrollY;

	if (y >= 100) {
		nav.classList.add('fixed');
	} else if (y < 50) {
		nav.classList.remove('fixed');
	}
});


//Clock


function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline="March 01 2021 00:00:00 GMT+0300"; //for Ukraine

initializeClock('countdown', deadline);


//Swiper


document.querySelectorAll('.services__swiper-container').forEach(function (elem) {
	new Swiper(elem, {
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 5000,
		},
		spaceBetween: 10,
		navigation: {
			nextEl: elem.nextElementSibling.nextElementSibling,
			prevEl: elem.nextElementSibling,
		},
		breakpoints: {
			525: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
		}
	});
});
