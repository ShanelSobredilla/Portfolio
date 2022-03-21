gsap.registerPlugin(ScrollTrigger);


gsap.from ('div.header, div.title', {
	x:-50,
	duration: 1,
	opacity: 0,
	delay:0.5
})

gsap.from ('div.featurebody', {
	y:50,
	duration: 1,
	opacity: 0,
	delay: 1
})

gsap.to ('div.philosophytitle', {
	scrollTrigger: {
		trigger: 'div.philosophytitle',
		toggleActions: 'restart pause restart pause'
	},
	y:30,
	duration: 3,
})

gsap.to ('div.philosophy1', {
	scrollTrigger: {
		trigger: 'div.philosophy1',
		toggleActions: 'restart pause restart pause'
	},
	x:30,
	duration: 3,
})

gsap.to ('div.philosophy2', {
	scrollTrigger: {
		trigger: 'div.philosophy2',
		toggleActions: 'restart pause restart pause'
	},
	x:-55,
	duration: 2,
})

gsap.to ('div.cvlink', {
	scrollTrigger: {
		trigger: 'div.cvlink',
		toggleActions: 'restart pause restart pause'
	},
	y:-20,
	duration: 3,
})

gsap.to ('li.midar, li.rsp', {
	scrollTrigger: {
		trigger: 'li.midar, li.rsp',
		toggleActions: 'restart pause restart pause'
	},
	stagger: 0.5,
	y:20,
	duration: 1,
})

gsap.to ('li.swansalon, li.koreanair', {
	scrollTrigger: {
		trigger: 'li.swansalon, li.koreanair',
		toggleActions: 'restart pause restart pause'
	},
	stagger: 0.5,
	y:20,
	duration: 1,
})

gsap.to ('li.poster', {
	scrollTrigger: {
		trigger: 'li.poster',
		toggleActions: 'restart pause restart pause'
	},
	stagger: 0.5,
	y:20,
	duration: 1,
})

gsap.to ('div.contact-text', {
	scrollTrigger: {
		trigger: 'div.contact-text',
		toggleActions: 'restart pause restart pause'
	},
	y:10,
	duration: 1,
})