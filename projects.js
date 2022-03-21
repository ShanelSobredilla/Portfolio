gsap.from('body', {
	opacity: 0,
	duration:1
}) 

gsap.to ('div.uiux, div.branding, div.illustrations', {
	scrollTrigger:'div.uiux, div.branding, div.illustrations',
	stagger: 0.5,
	y:40,
	duration: 1,
})