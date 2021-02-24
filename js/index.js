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


let app = document.getElementById('app');
let scrollAmount = document.body.clientWidth*1/3;
let rows = document.querySelectorAll('.row');
document.querySelector('.slide-right').addEventListener('click', (e) => {
    let currentPage = parseInt(app.getAttribute('data-page'));
    let targetPixel = (currentPage+1) * scrollAmount;
    for(let i = 0; i < rows.length; i++) {
        rows[i].style.transform = "rotate3d(-1,.5,0,-10deg) translateX(-"+targetPixel+"px)"
    }
    app.setAttribute('data-page', currentPage+1);
})
document.querySelector('.slide-left').addEventListener('click', (e) => {
    let currentPage = parseInt(app.getAttribute('data-page'));
    let targetPixel = (currentPage-1) * scrollAmount;
    if(currentPage == 0) return;
    for(let i = 0; i < rows.length; i++) {
        rows[i].style.transform = "rotate3d(-1,.5,0,-10deg) translateX(-"+targetPixel+"px)"
    }
    app.setAttribute('data-page', currentPage-1);
})
document.body.addEventListener('mousemove', (e) => {
    let mouseLocation = {
        x: e.clientX,
        y: e.clientY,
    }
})