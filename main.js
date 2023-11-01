
import animateWhilePageLoading from './src/features/component/animateWhilePageLoading'
import animateOnPageLoaded from './src/features/component/animateOnPageLoaded'
import mouseFollower from './src/features/component/mouseFollower'
import heroImageOverlay from './src/features/page/homePageAnimations'
import smoothScroll from './src/features/component/smoothScroll'
import imageScrollAnimation from './src/features/component/imageScrollAnimation'
import textRevealAnimation from './src/features/component/textRevealAnimation'
import mobileNavbar from './src/features/component/mobileNavbar'
import homeAnimations from './src/features/page/homePageAnimations'
import shapePageAnimations from './src/features/page/shapeAnimations'

// Show loading animation
animateWhilePageLoading()

// On loaded
window.addEventListener('load', () => {
  // Run when page loaded
  setTimeout(() => animateOnPageLoaded(), 3000);

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