<script>
import { computed } from 'vue'
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
      return {
        modules: [FreeMode, Navigation],
      };
    },
    props: {
        item: String,
    },
    methods: {
        onSwiper(swiper){
            console.log(swiper)
        },
        onSlideChange() {
        
        },
        getShapeHref(slug){
            return "./" + slug + ".html";
        },
        getImgByOrientation(slug, orientation, imgId){
            return `/${slug}-${orientation}-${imgId}.webp`;
        },
        articleClass(index, orientation){
            return `suggested__item suggested__item--${index+1} ${orientation === 'portrait' ? "suggested__item--portrait" : "" }`;
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
                :slides-per-view="4.1"
                :space-between="20"
                :loop="true"
                :freeMode="true"
                :modules="modules"
                :navigation="true"
                class="suggested__swiper"
            >
                <swiper-slide v-for="(shape, index) in suggestedShapes" :key="shape.slug" >
                    <article :class="articleClass(index,  shape.repertoire.preferedOrientation)">
                        <figure class="suggested__image-wrapper">
                            <a :href="getShapeHref(shape.slug)">
                                <img class="suggested__img" :src="getImgByOrientation(shape.slug, shape.repertoire.preferedOrientation, shape.repertoire.imgId)" :alt="shape.name" loading="lazy">
                            </a>
                        </figure>
                        <div class="suggested__details">
                            <div class="suggested__title">
                                <a :href="getShapeHref(shape.slug)">{{ shape.name }}</a>
                            </div>
                            <div class="suggested__year">
                                <a :href="getShapeHref(shape.slug)" class="hover-link">View</a>
                            </div>
                        </div>
                    </article>
                </swiper-slide>
            </swiper>
        </div>
    </section>
    
</template>