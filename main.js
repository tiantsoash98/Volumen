import animateWhilePageLoading from './src/features/animateWhilePageLoading'
import animateOnPageLoaded from './src/features/animateOnPageLoaded'
import mouseFollower from './src/features/mouseFollower'

animateWhilePageLoading()

window.addEventListener('load', () => {
  // Run when page loaded
  setTimeout(() => animateOnPageLoaded(), 3000)
  mouseFollower()
})