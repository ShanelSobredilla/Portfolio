gsap.registerPlugin(ScrollTrigger);


gsap.from ('div.header, div.title', {
  x:-50,
  duration: 1,
  opacity: 0,
  delay:1
})

gsap.from ('h1', {
  y:-50,
  duration: 1,
  opacity: 0,
  delay:1.5
})

gsap.from ('div.profile', {
  y:-50,
  duration: 1,
  opacity: 0,
  delay:0.5
})

gsap.from ('div.introduction', {
  y:-50,
  duration: 1,
  opacity: 0,
  delay:2
})

gsap.to ('div.skills_title', {
  scrollTrigger: {
    trigger: 'div.skills_title',
    toggleActions: 'restart pause restart pause'
  },
  x:-40,
  duration: 2,
})

gsap.to ('div.designskills_title, div.technicalskills_title, div.workskills_title', {
  scrollTrigger: {
    trigger: 'div.designskills_title, div.technicalskills_title, div.workskills_title',
    toggleActions: 'restart pause restart pause'
  },
  x:-40,
  duration: 2,
  delay:0.5
})

gsap.to ('li.dskills, li.tskills, li.wskills', {
  scrollTrigger: {
    trigger: 'li.dskills, li.tskills, li.wskills',
    toggleActions: 'restart pause restart pause'
  },
  stagger:0.1,
  x:-40,
  duration: 2,
  delay:1
})


gsap.to ('div.experience_title', {
  scrollTrigger: {
    trigger: 'div.experience_title',
    toggleActions: 'restart pause restart pause'
  },
  x:-40,
  duration: 2,
})

gsap.to ('div.experience_subtitle-1, div.experience_date-1, div.experience_subtitle-2, div.experience_date-2, div.experience_subtitle-3, div.experience_date-3', {
  scrollTrigger: {
    trigger: 'div.experience_subtitle-1, div.experience_date-1, div.experience_subtitle-2, div.experience_date-2, div.experience_subtitle-3, div.experience_date-3',
    toggleActions: 'restart pause restart pause'
  },
  x:-40,
  duration: 2,
  delay:0.5
})

gsap.to ('li.experience1, li.experience2, li.experience3', {
  scrollTrigger: {
    trigger: 'li.experience1, li.experience2, li.experience3',
    toggleActions: 'restart pause restart pause'
  },
  stagger:0.2,
  x:-40,
  duration: 2,
  delay:1
})

gsap.to ('div.education_title, div.languages_title', {
  scrollTrigger: {
    trigger: 'div.education_title, div.languages_title',
    toggleActions: 'restart pause restart pause'
  },
  x:-40,
  duration: 2,
})

gsap.to ('div.education_subtitle, div.education_date, div.education_hs', {
  scrollTrigger: {
    trigger: 'div.education_subtitle, div.education_date, div.education_hs ',
    toggleActions: 'restart pause restart pause'
  },
  x:-40,
  duration: 2,
  delay:0.5
})

gsap.to ('li.school, div.languages_list', {
  scrollTrigger: {
    trigger: 'li.school',
    toggleActions: 'restart pause restart pause'
  },
  stagger:0.2,
  x:-40,
  duration: 2,
  delay:1
})

gsap.to ('div.contact-text', {
  scrollTrigger: {
    trigger: 'div.contact-text',
    toggleActions: 'restart pause restart pause'
  },
  y:-20,
  duration: 1,
})