import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from '@barba/core';
import Lenis from '@studio-freight/lenis';
import CustomEase from 'gsap/CustomEase';


gsap.registerPlugin(ScrollTrigger, CustomEase);

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
const defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');
CustomEase.create("customEase", defaultEase);

// Init all
initPageTransitions();


function initPageTransitions(){

  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });

  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
  });

  // scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
  });

  barba.init({
    sync: true,
    timeout: 7000,
    transitions: [{
      name: 'default-transitions',
      once(data) {
        // Init Scroll smoother
        initScroll();
        // Init all scripts
        initScript();
        // Init loader
        initLoader();
      },
      async afterOnce(data){
        await delay(3000);
        loaderOut();
      },
      async leave(data){
        // animate loading screen in
        pageTransitionIn(data);
        await delay(1500);
        data.current.container.remove();
      },
      async afterLeave() {
        // Reset all scroll triggers
        ScrollTrigger.getAll().forEach(t => t.kill());
      },
      async enter(data){
        // animate loading screen out
        pageTransitionOut(data.next);
      },
      async beforeEnter(data){
        initScroll();
        initScript();
      }
    }], 
    views: [
    {
      namespace: 'home',
      beforeEnter(){
        select('body').className = 'body body--home';
      }
    },
    {
      namespace: 'shape',
      beforeEnter(){
        select('body').className = 'body body--shape';
      }
    }]
  });
}


// Init all pages
function initScript(){
  // Run scripts

  // Check and run current page scripts
  const isHome = select('body').classList.contains('body--home')
  if(isHome){
    // home()
    // homeScroll()
  }

  const isShape = select('body').classList.contains('body--shape')
  if(isShape){
    // shape()
    // shapeScroll()
  }
}

// Init scroll
function initScroll(){
  
  // Lenis scroll
  const lenis = new Lenis({
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

// Animation - First Page Load
function initLoader(){

  let timeline = gsap.timeline({
      defaults: { 
        duration: 1, 
        ease: "customEase" 
      }
  })
  .set('.loader', {
    display: 'flex'
  })
  .to('.loader__logo path', {
    y: 0, 
    opacity: 1, 
    stagger: {
      each: 0.06, 
      from: 'end'
    }, 
    duration: 0.8 
  })
  .to('.loader__logo', {
    '--bottom-y': 100, 
    '--y-percent': 100 
  }, '+=0.6s')
}

// Animation - First Page Loader Out
function loaderOut(){

  let timeline = gsap.timeline({
      defaults: { 
        duration: 1.5, 
        ease: "customEase" 
      },
  })
  .to('.loader__frame', {
    opacity: 0 
  })
  .to('.loader__logo', {
    opacity: 0 
  }, '<+=0.1s')
  .set('.loader', {
    display: 'none' 
  })
}

// Animation - Page transition In
function pageTransitionIn(data) {

  let timeline = gsap.timeline({
    defaults: { 
      duration: 1, 
      ease: "customEase" 
    }
  })
  .set('.loader', {
    display: 'flex'
  })
  .to('.loader__frame', {
    opacity: 1
  })
}

// Animation - Page transition Out
function pageTransitionOut(data) {
  let timeline = gsap.timeline({
    defaults: { 
      duration: 1.5, 
      ease: "customEase" 
    },
  })
  .to('.loader__frame', {
    opacity: 0 
  })
  .set('.loader', {
    display: 'none' 
  })
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}