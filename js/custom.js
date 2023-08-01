$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    });

    const SLIDE_LIST = document.querySelectorAll('.main_visual .list li')

    console.log(SLIDE_LIST);

    var main_slide = new Swiper(".main_slide", {
        loop: true,
        autoplay: {     //자동슬라이드 (false-비활성화)
            delay: 5000, // 시간 설정
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 3500,


        slideActiveClass: 'on',
        on: {
            slideChangeTransitionStart: function () {
                SLIDE_LIST.forEach(it => it.classList.remove('on'));
                SLIDE_LIST[this.realIndex].classList.add('on');
            }
        }

    });


    SLIDE_LIST.forEach((it, idx) => {
        it.addEventListener('click', e => {
            e.preventDefault();
            main_slide.slideTo(idx)
        })
    })

})