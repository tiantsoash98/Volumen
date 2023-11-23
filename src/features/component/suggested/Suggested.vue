<script>
// https://stackoverflow.com/questions/45565349/how-to-access-external-json-file-objects-in-vue-js-app
import data from '../../../data.json';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        // Randomly select one suggested to show in portrait mode
        const randomPortraitIndex = randomIntFromInterval(0, 2)

        // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        return {
            randomPortraitIndex,
            modules: [FreeMode, Navigation],
        };
    },
    props: {
        item: String,
    },
    methods: {
        onSwiper(swiper){
            // console.log(swiper)
        },
        onSlideChange() {
            // On slide change function
        },
        isPortrait(index){
            return index == this.randomPortraitIndex;
        },
        getShapeHref(slug){
            return "./" + slug + ".html";
        },
        getImgByOrientation(slug, imgId, isPortrait){
            return isPortrait ? 
                    `/${slug}-portrait-${imgId}.webp` 
                    : `/${slug}-landscape-${imgId}.webp`;
        },
        articleClass(index, isPortrait){
            return `suggested__item suggested__item--${index+1} ${isPortrait ? "suggested__item--portrait" : "" }`;
        }
    },
    computed: {
        suggestedShapes(){
            const suggested = data.shapes
                                    .filter(obj => obj.slug !== this.item)

            // Double for swiper loop
            return suggested.concat(suggested)
        }
    }
}
</script>

<template>
    <section class="section section--margin-xxl suggested">
        <div class="container">
            <div class="suggested__menu">
                <h2 class="suggested__title">Other forms</h2>
                <a class="hover-link" href="./repertoire.html">See all</a>
            </div>
        </div>
        <div class="suggested__items">
            <swiper
                :space-between="20"
                :loop="true"
                :freeMode="true"
                :modules="modules"
                :navigation="true"
                :breakpoints="{
                    767: {
                        slidesPerView: 3.1,
                    },
                    576: {
                        slidesPerView: 2.1,
                    },
                    320: {
                        slidesPerView: 1.1,
                    }
                }"
                class="suggested__swiper"
            >
                <swiper-slide v-for="(shape, index) in suggestedShapes" :key="shape.slug" >
                    <article :class="articleClass(index, isPortrait(index))">
                        <figure class="suggested__image-wrapper">
                            <a :href="getShapeHref(shape.slug)">
                                <img class="suggested__img" :src="getImgByOrientation(shape.slug, shape.repertoire.imgId, isPortrait(index))" :alt="shape.name" loading="lazy">
                            </a>
                        </figure>
                        <div class="suggested__details">
                            <div class="suggested__title">
                                <a :href="getShapeHref(shape.slug)">{{ shape.name }}</a>
                            </div>
                            <div class="suggested__view">
                                <a :href="getShapeHref(shape.slug)" class="hover-link">View</a>
                            </div>
                        </div>
                    </article>
                </swiper-slide>
            </swiper>
        </div>
    </section>
    
</template>