const tl = gsap.timeline({paused: true})
    .timeScale(1.5)
    .to('#plus', {duration: .4, transform: 'scale(0)', transformOrigin: 'center center', ease: "power2.out"})
    .to("#rect", {duration: .4, width: 277, ease: "power2.out"},)
    .to("#oval", {duration: .4, width: 270, ease: "power2.out"}, '<')
    .to('#btn', {duration: .4, width: 281, ease: "power2.out"}, '<')
    .to('#oval', {
            keyframes: {
                '0%': {opacity: 0},
                '35%': {opacity: 0.5},
                '50%': {opacity: 1},
                '65%': {opacity: 0.5},
                '100%': {opacity: 0},
            },
            yoyo: 0,
            duration: .4,
            ease: "power2.out"
        }, '<'
    )
    .fromTo('#substract_path',
        {
            rotation: 180,
            opacity: .25,
        },
        {
            duration: .7,
            rotation: 360,
            transform: 'scale(1) ',
            opacity: 1,
            transformOrigin: 'center center',
            ease: "power2.out"
        }, '<')
    .to("#circle1", {duration: .8, width: 282, ease: "power2.out"})
    .to('#blockText', {
        keyframes: {
            '0%': {fill: 'white', opacity: 0.25},
            '50': {fill: 'white', opacity: 0.75},
            '100%': {fill: 'white', opacity: 1}
        },
        duration: .6,
        ease: "power2.out",
    }, '<')

    .to('#substract_path',
        {
            keyframes: {
                '0%': {fill: 'white', opacity: 0.25},
                '50': {fill: 'white', opacity: 0.75},
                '100%': {fill: 'white', opacity: 1}
            },
            duration: .6,
            ease: "power2.out",
        }, '<')

group.addEventListener('mouseenter', function () {
        tl.play()


    }
)

group.addEventListener('mouseleave', function () {
    tl.reverse()
})










