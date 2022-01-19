const animItems = document.querySelectorAll(".animated");

if (animItems.length > 0) {
    window.addEventListener('scroll', animateOnScroll);
    function animateOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("active");
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove("active");
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animateOnScroll();
}

// Preloader

window.onload = function () {
    document.body.classList.add('loaded');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

// Hamburger

const hambugerBtn = document.getElementById('menu__hamburger');
const hambugerBtnOpen = document.getElementById('menu__hamburger_open');
const mobileMenu = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');


hambugerBtn.addEventListener('click', () => {
    hambugerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
    hambugerBtnOpen.classList.toggle('open');
});

hambugerBtnOpen.addEventListener('click', () => {
    hambugerBtnOpen.classList.toggle('open');
    hambugerBtn.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
})
