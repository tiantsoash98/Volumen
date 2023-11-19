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
                defaults: { ease: "customEase" },
            })
            .to(item.querySelector('.repertoire__img--main'), {
                opacity: 0,
                duration: 1,
                delay: 0.5
            })
            .from(item.querySelector('.repertoire__img--hover'), {
                scale: 1.2,
                duration: 2
            }, '<')
        })

        // Hover out
        $(item).on('mouseleave', () => {
            gsap.timeline({
                defaults: { duration: 1, ease: "customEase" },
            })
            .to(item.querySelector('.repertoire__img--main'), {
                opacity: 1
            })
            .set(item.querySelector('.repertoire__img--hover'), {
                scale: 1
            })
        })
    });

    
}

export default repertoire