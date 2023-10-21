import animateWhilePageLoading from './src/features/animateWhilePageLoading'
import animateOnPageLoaded from './src/features/animateOnPageLoaded'

animateWhilePageLoading()

window.addEventListener('load', () => {
  // Run when page loaded
  setTimeout(() => animateOnPageLoaded(), 3000)
})