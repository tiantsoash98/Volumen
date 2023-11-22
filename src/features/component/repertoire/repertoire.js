import $ from "jquery";
import { createApp } from "vue";
import Repertoire from "./Repertoire.vue";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";

function repertoire(){
    createApp(Repertoire).mount('#repertoire');

    let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');
    gsap.registerPlugin(CustomEase) 
    CustomEase.create("customEase", defaultEase);

    
    // Repertoire item hover
    
    let items = gsap.utils.toArray('.repertoire__item')

    SplitType
        .create('.repertoire__description', 
        {
            types: 'chars', 
            lineClass: 'repertoire__description--line', 
            wordClass: 'repertoire__description--word',
            charClass: 'repertoire__description--char',
        });

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
            .to(item.querySelector('.repertoire__name'), {
                opacity: 0,
                duration: 1,
            }, '<')
            .to(item.querySelectorAll('.repertoire__description--char'), {
                yPercent: -100,
                opacity: 1,
                duration: 0.6,
                stagger: 0.015
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
                opacity: 1,
                delay: 0.6
            })
            .to(item.querySelectorAll('.repertoire__description--char'), {
                opacity: 0
            }, '<')
            .to(item.querySelector('.repertoire__name'), {
                opacity: 1
            }, '<')
            .set(item.querySelector('.repertoire__img--hover'), {
                scale: 1
            })
            .set(item.querySelectorAll('.repertoire__description--char'), {
                yPercent: 0
            })
        })
    });
}

export default repertoire