import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitType from "split-type";

function aboutAnimation(){
    let defaultEase = getComputedStyle(document.body).getPropertyValue('--default-ease');
    CustomEase.create("customEase", defaultEase);

    let titleLines = gsap.utils.toArray('.about-main__title--line')

    if(titleLines.length == 0) {
        // Hero title
        SplitType.create('.about-main__title', 
        {
            types: 'lines, words', 
            lineClass: 'about-main__title--line', 
            wordClass: 'about-main__title--word'
        });

        titleLines = gsap.utils.toArray('.about-main__title--line')
    }

    let delay = 0

    titleLines.forEach((line) => {
        gsap.timeline({
            defaults: { duration: 1, ease: "customEase" },
        })
        .from(line.querySelectorAll('.about-main__title--word'), {
            opacity: 0,
            yPercent: 100,
            delay: delay
        })

        delay+=0.15
    })

    gsap.timeline({
        defaults: { duration: 1.5, ease: "customEase" },
    })
    .fromTo('.about-main__text', {
        opacity: 0,
        yPercent: 50,
    }, {
        opacity: 1,
        yPercent: 0,
        delay: delay + 0.5
    })

    gsap.timeline({
        defaults: { duration: 1.5, ease: "customEase" },
    })
    .from('.about-main__img-wrapper', {
        yPercent: 10,
        opacity: 0,
        delay: delay + 0.8
    })
}

export default aboutAnimation