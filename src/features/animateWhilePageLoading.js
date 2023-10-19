import gsap from "gsap";

function animateWhilePageLoading(){
    let timeline = gsap.timeline({
        defaults: { duration: 0.8, ease: "--alias-easeOutSlow" },
    })

    timeline.from('.loader__logo path', {yPercent: -100, stagger: {each: 0.15, from: 'end'} })
}



export default animateWhilePageLoading