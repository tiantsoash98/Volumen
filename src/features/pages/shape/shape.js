import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

function shape(){
    let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');

    gsap.registerPlugin(CustomEase) 
    CustomEase.create("customEase", defaultEase);

    gsap.timeline({
        defaults: { duration: 2, ease: "customEase" },
    })
    .from('.shape-hero__img', {
        scale: 1.3,
    })
}

export default shape