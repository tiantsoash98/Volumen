<script setup>
import { computed } from 'vue'
// https://stackoverflow.com/questions/45565349/how-to-access-external-json-file-objects-in-vue-js-app
import data from '../../../data.json';

const props = defineProps({
  item: String,
})

function imgUrl(url) {
  return "/" + url;
}
function getShapeHref(slug){
    return "./" + slug + ".html";
}

const suggestedShapes = computed(() => {
    return data.shapes
            .filter(obj => obj.slug !== props.item)
            .slice(1, 3);
})
</script>

<template>
    <section class="section section--margin-xl repertoire">
        <div class="container">
            <div class="repertoire__menu">
                <h3 class="repertoire__title">Other forms</h3>
                <a class="repertoire__see-all" href="./repertoire.html">See all</a>
            </div>
            <div class="repertoire__items">
                <article v-for="(shape, index) in suggestedShapes" :key="shape.slug" :class="`repertoire__item repertoire__item--${index+1}`" >
                    <figure class="repertoire__item-image-wrapper image-scroll__wrapper">
                        <a :href="getShapeHref(shape.slug)">
                            <img class="image-scroll" :src="imgUrl(shape.repertoire.imgId)" :alt="shape.name" loading="lazy">
                        </a>
                    </figure>
                    <div class="repertoire__details">
                        <div class="repertoire__title">
                            <a :href="getShapeHref(shape.slug)">{{ shape.name }}</a>
                        </div>
                        <div class="repertoire__year">
                            <a :href="getShapeHref(shape.slug)" class="hover-link">View</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    
</template>