import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";
import { createApp } from "vue";
import Shape from "./Shape.vue";

function shape(){
    /* App mount */
    // https://stackoverflow.com/questions/64010560/passing-props-to-vue-root-instance-via-attributes-on-element-the-app-is-mounted
    const appSelector = "#shape";
    const mountEl = document.querySelector(appSelector);
    createApp(Shape, { ...mountEl.dataset }).mount(appSelector);
    
    
    /* Animations */
    let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');

    gsap.registerPlugin(CustomEase) 
    CustomEase.create("customEase", defaultEase);

    SplitType.create('.shape-hero__description-wrapper');

    // Header animation on after enter
    gsap.timeline({
        defaults: { duration: 2, ease: "customEase" },
    })
    .from('.shape-hero__img', {
        scale: 1.3,
    })
    .from('.shape-hero__description-wrapper .char' , { 
        yPercent: 100, 
        duration: 1.5,
        stagger: 0.02
    }, '<+0.3')
}

export default shape