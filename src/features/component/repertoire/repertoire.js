import $ from "jquery";
import { createApp } from "vue";
import Repertoire from "./Repertoire.vue";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

function repertoire(){
    createApp(Repertoire).mount('#repertoire');

    let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');
    gsap.registerPlugin(CustomEase) 
    CustomEase.create("customEase", defaultEase);

    
    // Repertoire item hover
    
    let items = gsap.utils.toArray('.repertoire__item')

    items.forEach((item) => {
        // Hover in
        $(item).on('mouseenter', () => {
            gsap.timeline({
                defaults: { 
                    duration: 1,
                    ease: "customEase" 
                },
            })
            // Image animation
            .to(item.querySelector('.repertoire__img--main'), {
                opacity: 0,
                duration: 1,
                delay: 0.5
            })
            .from(item.querySelector('.repertoire__img--hover'), {
                scale: 1.2,
                duration: 2
            }, '<')
            // Title animation
            .to(item.querySelector('.repertoire__title--name'), {
                yPercent: -100,
                duration: 1.3,
            }, '<')
            .to(item.querySelector('.repertoire__title--description'), {
                yPercent: -100,
                opacity: 1,
                duration: 1.3,
            }, '<')
        })

        // Hover out
        $(item).on('mouseleave', () => {
            gsap.timeline({
                defaults: { 
                    duration: 1, 
                    ease: "customEase" },
            })
            .to(item.querySelector('.repertoire__img--main'), {
                opacity: 1
            })
            .to(item.querySelector('.repertoire__title--description'), {
                yPercent: 0,
                opacity: 0
            }, '<')
            .to(item.querySelector('.repertoire__title--name'), {
                yPercent: 0
            }, '<')
            .set(item.querySelector('.repertoire__img--hover'), {
                scale: 1
            })
        })
    });

    
}

export default repertoire