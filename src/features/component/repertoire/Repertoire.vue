<script>
// https://stackoverflow.com/questions/45565349/how-to-access-external-json-file-objects-in-vue-js-app
import data from '../../../data.json';
import Image from '../image/Image.vue';

export default {
    components: {
        Image
    },
    data(){
        return {
            shapes: data.shapes
        }
    },
    props: {
        item: String,
    },
    methods: {
        getShapeHref(slug){
            return `./${slug}.html`;
        },
        getImgByOrientation(slug, orientation, imgId){
            return `/${slug}-${orientation}-${imgId}.webp`;
        },
        defaultSize(index){
            if(index == 2) return "100vw";
            else if(index == 4) return "66vw"
            return "50vw";
        }
    },
    computed: {
        suggestedShapes(){
            return data.shapes
                        .filter(obj => obj.slug !== this.item)
                        .slice(1, 3);
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="repertoire__items" role="list">
            <article v-for="(shape, index) in shapes" :key="shape.id" :class="`repertoire__item repertoire__item--${index+1}`" role="listitem">
                <figure class="repertoire__image-wrapper image-scroll__wrapper">
                    <a :href="getShapeHref(shape.slug)">
                        <Image 
                            :class="'repertoire__img repertoire__img--main image-scroll'"
                            :slug="shape.slug" 
                            :shape="shape.name" 
                            :imgId="shape.repertoire.imgId"
                            :orientation="shape.repertoire.preferedOrientation"
                            :loading="'eager'"
                            :defaultSize="defaultSize(index)"
                            :smallSize="'100vw'"
                        />
                        <Image
                            :class="'repertoire__img repertoire__img--hover'"
                            :slug="shape.slug" 
                            :shape="shape.name" 
                            :img-id="shape.repertoire.hoverId"
                            :orientation="shape.repertoire.preferedOrientation"
                            :loading="'lazy'"
                            :defaultSize="defaultSize(index)"
                            :smallSize="'100vw'"
                        />
                    </a>
                </figure>
                <div class="repertoire__details">
                    <div class="repertoire__title-wrapper">
                        <a :href="getShapeHref(shape.slug)">
                            <div class="repertoire__name">{{ shape.name }}</div>
                            <div class="repertoire__description">{{ shape.subtitle }}</div>
                        </a>
                    </div>
                    <div class="repertoire__view">
                        <a :href="getShapeHref(shape.slug)" class="hover-link">View</a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>