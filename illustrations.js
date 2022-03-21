gsap.registerPlugin(ScrollTrigger);


gsap.from ('div.header, div.title', {
  x:-50,
  duration: 1,
  opacity: 0,
  delay:1
})

gsap.from ('div.salontitle', {
  y:-50,
  duration: 1,
  opacity: 0,
  delay:1.5
})

gsap.from ('div.hero', {
  y:-50,
  duration: 1,
  opacity: 0,
  delay:0.5
})

gsap.from ('div.back', {
  y:-50,
  duration: 1,
  opacity: 0,
  delay:2
})

gsap.to ('div.dadaism-item__container', {
  scrollTrigger: {
    trigger: 'div.dadaism-item__container',
    toggleActions: 'restart pause restart pause'
  },
  y:30,
  duration: 2,
})

gsap.to ('div.sur-item__container', {
  scrollTrigger: {
    trigger: 'div.sur-item__container',
    toggleActions: 'restart pause restart pause'
  },
  y:30,
  duration: 2,
})

gsap.to ('div.mag-item__container', {
  scrollTrigger: {
    trigger: 'div.mag-item__container',
    toggleActions: 'restart pause restart pause'
  },
  y:30,
  duration: 2,
})

gsap.to ('div.ab-item__container', {
  scrollTrigger: {
    trigger: 'div.ab-item__container',
    toggleActions: 'restart pause restart pause'
  },
  y:30,
  duration: 2,
})

gsap.to ('div.zoo-item__container', {
  scrollTrigger: {
    trigger: 'div.zoo-item__container',
    toggleActions: 'restart pause restart pause'
  },
  y:30,
  duration: 2,
})

gsap.to ('h2.nextproject_subtitle', {
  scrollTrigger: {
    trigger: 'h2.nextproject_subtitle',
    toggleActions: 'restart pause restart pause'
  },
  y:-20,
  duration: 1,
})

gsap.to ('h1.nextproject_title', {
  scrollTrigger: {
    trigger: 'h1.nextproject_title',
    toggleActions: 'restart pause restart pause'
  },
  y:-20,
  duration: 1,
})

$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});