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

    let descriptionLines = gsap.utils.toArray('.about-main__text--line')

    if(descriptionLines.length == 0) {
        // Hero text
        SplitType.create('.about-main__text', 
        {
            types: 'lines, words', 
            lineClass: 'about-main__text--line', 
            wordClass: 'about-main__text--word'
        });

        descriptionLines = gsap.utils.toArray('.about-main__text--line')
    }

    descriptionLines.forEach((line) => {
        gsap.timeline({
            defaults: { duration: 1, ease: "customEase" },
        })
        .from(line.querySelectorAll('.about-main__text--word'), {
            opacity: 0,
            yPercent: 100,
            delay: delay
        })

        delay+=0.15
    })

    gsap.timeline({
        defaults: { duration: 1.5, ease: "customEase" },
    })
    .from('.about-main__img-wrapper', {
        yPercent: 10,
        opacity: 0,
        delay: delay + 0.5
    })
}

export default aboutAnimation