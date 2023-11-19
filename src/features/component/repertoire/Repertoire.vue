<script setup>
// https://stackoverflow.com/questions/45565349/how-to-access-external-json-file-objects-in-vue-js-app
import data from '../../../data.json';

const props = defineProps({
  item: String,
})

const shapes = data.shapes;

function getShapeHref(slug){
    return "./" + slug + ".html";
}

function getImgByOrientation(slug, orientation, imgId){
    return `/${slug}-${orientation}-${imgId}.webp`;
}
</script>

<template>
    <div class="container">
        <div class="repertoire__items">
            <article v-for="(shape, index) in shapes" :key="shape.id" :class="`repertoire__item repertoire__item--${index+1}`" >
                <figure class="repertoire__image-wrapper image-scroll__wrapper">
                    <a :href="getShapeHref(shape.slug)">
                        <img class="repertoire__img repertoire__img--main image-scroll" :src="getImgByOrientation(shape.slug, shape.repertoire.preferedOrientation, shape.repertoire.imgId)" :alt="shape.name" loading="eager">
                        <img class="repertoire__img repertoire__img--hover" :src="getImgByOrientation(shape.slug, shape.repertoire.preferedOrientation, shape.repertoire.hoverId)" :alt="shape.name" loading="lazy">
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
</template>