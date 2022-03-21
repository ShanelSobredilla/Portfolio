gsap.registerPlugin(ScrollTrigger)

gsap.from ('div.header, div.title', {
  x:-50,
  duration: 1,
  opacity: 0,
  delay:1
})

gsap.from ('div.contact-text', {
  y:100,
  opacity:0,
  duration: 1,
  delay:1.5
})