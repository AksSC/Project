        var card1 = document.getElementById('activator');
        var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

        var toggle = false;

        tl.to('.activator', {
            background: '#805ad5',
            'borderRadius': '5em 0 0 5em'
        });
        tl.to('nav', {
            'clipPath': 'ellipse(100% 100% at 50% 50%)'
        }, "-=.5")
        tl.to('nav img', {
            opacity: 1,
            transform: 'translateX(0)',
            stagger: .05
        }, "-=.5")
        tl.pause();

        card1.addEventListener('click', () => {
            toggle = !toggle;
            if (toggle ? tl.play() : tl.reverse());
        })


        var card2 = document.getElementById('card');

        var rule = CSSRulePlugin.getRule(".card::before");
        var rule2 = CSSRulePlugin.getRule(".card::after");

        var tl2 = gsap.timeline({defaults: {ease: "power2.inOut"}});

        tl2.to(rule, {
            width: '100%'
        })
        tl2.to(rule2, {
            width: '100%'
        }, "-=.3")
        tl2.to('h1', {
            color: 'white'
        }, "-=.7")
        tl2.to('p', {
            'clipPath': 'circle(140% at 0% 100%)',
            'transform': 'translateX(0)',
            ease: Back.easeOut.config(4),
        }, "-=.3")
        tl2.pause();

        card2.addEventListener('mouseenter', () => {
            tl2.play();
        })
        card2.addEventListener('mouseleave', () => {
            tl2.reverse();
        })
