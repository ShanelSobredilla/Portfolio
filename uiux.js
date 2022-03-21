gsap.registerPlugin(ScrollTrigger);


gsap.from ('div.header, div.title', {
  x:-50,
  duration: 1,
  opacity: 0,
  delay:1
})

gsap.from ('div.uiuxtitle', {
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

gsap.to ('div.projecttitle, div.projectinfo, div.whatididtitle, div.whatididinfo, div.toolstitle, div.toolsinfo', {
  scrollTrigger: {
    trigger: 'div.projecttitle, div.projectinfo, div.whatididtitle, div.whatididinfo, div.toolstitle, div.toolsinfo',
    toggleActions: 'restart pause restart pause'
  },
  stagger: 0.3,
  y:20,
  duration: 2,
})

gsap.to ('div.back2', {
  scrollTrigger: {
    trigger: 'div.back2',
    toggleActions: 'restart pause restart pause'
  },
  y:20,
  duration: 1,
})

gsap.to ('div.rsptitle', {
  scrollTrigger: {
    trigger: 'div.rsptitle',
    toggleActions: 'restart pause restart pause'
  },
  y:50,
  duration: 1,
})

gsap.to ('div.projecttitle2, div.projectinfo2, div.whatididtitle2, div.whatididinfo2, div.toolstitle2, div.toolsinfo2', {
  scrollTrigger: {
    trigger: 'div.projecttitle2, div.projectinfo2, div.whatididtitle2, div.whatididinfo2, div.toolstitle2, div.toolsinfo2',
    toggleActions: 'restart pause restart pause'
  },
  stagger: 0.3,
  y:40,
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

$(function(){
  $('.carousel-item2').eq(0).addClass('active');
  var total = $('.carousel-item2').length;
  var current = 0;
  $('#moveRight2').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft2').on('click', function(){
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
           $('.carousel-item2').eq(prev).removeClass('active');
           $('.carousel-item2').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});

$(function(){
  $('.carousel-item3').eq(0).addClass('active');
  var total = $('.carousel-item3').length;
  var current = 0;
  $('#moveRight3').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft3').on('click', function(){
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
           $('.carousel-item3').eq(prev).removeClass('active');
           $('.carousel-item3').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});

$(function(){
  $('.carousel-item4').eq(0).addClass('active');
  var total = $('.carousel-item4').length;
  var current = 0;
  $('#moveRight4').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft4').on('click', function(){
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
           $('.carousel-item4').eq(prev).removeClass('active');
           $('.carousel-item4').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});