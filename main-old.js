import mouseFollower from './src/features/component/mouseFollower'
import smoothScroll from './src/features/component/smoothScroll'
import imageScrollAnimation from './src/features/component/imageScrollAnimation'
import textRevealAnimation from './src/features/component/textRevealAnimation'
import mobileNavbar from './src/features/component/mobileNavbar'
import homeAnimations from './src/features/page/homePageAnimations'
import shapePageAnimations from './src/features/page/shapeAnimations'
import loaderOnPageLoading from './src/features/component/loaderOnPageLoading'
import loaderOnPageLoaded from './src/features/component/loaderOnPageLoaded'

// Show loading animation
const animateLoader = loaderOnPageLoading()

// On loaded
window.addEventListener('load', () => {
  // Run when page loaded
  animateLoader
    .then(() => loaderOnPageLoaded())
    .then(() => animateOnLoadedPages())
    .catch((error) => {
      console.error(`Error: ${error}`);
    });

  // Text reveal animation
  textRevealAnimation();
})

window.addEventListener('resize', () => {
  // Text reveal animation
  textRevealAnimation();
})

smoothScroll()
mouseFollower()
imageScrollAnimation()
mobileNavbar()
homeAnimations()
shapePageAnimations()
