import './src/styles/style.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from '@barba/core';
import Lenis from '@studio-freight/lenis';
import CustomEase from 'gsap/CustomEase';
import home from "./src/features/pages/home/home";
import homeScroll from "./src/features/pages/home/home-scroll";
import shape from "./src/features/pages/shape/shape";
import shapeScroll from "./src/features/pages/shape/shape-scroll";
import header from "./src/features/component/header/header";
import headerScroll from "./src/features/component/header/header-scroll";
import cursor from "./src/features/component/cursor/cursor";
import imageScroll from "./src/features/component/effects/imageScroll";
import footer from './src/features/component/footer/footer';
import loader from './src/features/component/loader/loader';
import repertoire from './src/features/component/repertoire/repertoire';
import shapeAnimation from './src/features/pages/shape/shape-animation';
import suggestedScroll from './src/features/component/suggested/suggested-scroll';
import about from "./src/features/pages/about/about";
import aboutScroll from "./src/features/pages/about/about-scroll";
import aboutAnimation from './src/features/pages/about/about-animation';


gsap.registerPlugin(ScrollTrigger, CustomEase);

const select = (e) => document.querySelector(e);
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
    select('.header').classList.remove('header--scrolling');
  });

  barba.init({
    sync: true,
    timeout: 7000,
    preventRunning: true,
    debug: false,
    transitions: [{
      name: 'default-transitions',
      async once() {
        loader()
        initScroll();
        initCursor();
        initScript();
        await initLoader();
      },
      async afterOnce(){
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
      async beforeEnter(data){
        initScroll();
        initScript();
      },
      async enter(data){
        // animate loading screen out
        pageTransitionOut(data.next);
      },
    }], 
    views: [
    {
      namespace: 'home',
      beforeEnter(){
        select('body').className = 'body body--home';
        home()
        repertoire()
        homeScroll()
      }
    },
    {
      namespace: 'icosahedral',
      beforeEnter(){
        select('body').className = 'body body--icosahedral';
        shape()
        shapeScroll()
        suggestedScroll()
      },
      afterEnter(){
        shapeAnimation()
      }
    },
    {
      namespace: 'sphere',
      beforeEnter(){
        select('body').className = 'body body--sphere';
        shape()
        shapeScroll()
        suggestedScroll()
      },
      afterEnter(){
        shapeAnimation()
      }
    },
    {
      namespace: 'square',
      beforeEnter(){
        select('body').className = 'body body--square';
        shape()
        shapeScroll()
        suggestedScroll()
      },
      afterEnter(){
        shapeAnimation()
      }
    },
    {
      namespace: 'pyramid',
      beforeEnter(){
        select('body').className = 'body body--pyramid';
        shape()
        shapeScroll()
        suggestedScroll()
      },
      afterEnter(){
        shapeAnimation()
      }
    },
    {
      namespace: 'cube',
      beforeEnter(){
        select('body').className = 'body body--cube';
        shape()
        shapeScroll()
        suggestedScroll()
      },
      afterEnter(){
        shapeAnimation()
      }
    },
    {
      namespace: 'repertoire',
      beforeEnter(){
        select('body').className = 'body body--repertoire';
        repertoire()
      },
    },
    {
      namespace: 'about',
      beforeEnter(){
        select('body').className = 'body body--about';
        about()
        aboutScroll()
      },
      afterEnter(){
        aboutAnimation()
      }
    }
  ]
  });
}


// Init all pages
function initScript(){
  // Run scripts
  header()
  headerScroll()
  footer()
  imageScroll()
}

// Init cursor
function initCursor(){
  cursor()
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
    },
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

  return timeline;
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

  return timeline;
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

  return timeline;
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}