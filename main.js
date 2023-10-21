import animateWhilePageLoading from './src/features/animateWhilePageLoading'
import animateOnPageLoaded from './src/features/animateOnPageLoaded'
import mouseFollower from './src/features/mouseFollower'
import heroImageOverlay from './src/features/heroImageOverlay'
import smoothScroll from './src/features/smoothScroll'

animateWhilePageLoading()

window.addEventListener('load', () => {
  // Run when page loaded
  setTimeout(() => animateOnPageLoaded(), 3000)
  heroImageOverlay()
})

mouseFollower()
smoothScroll()