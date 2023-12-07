<script>
// https://stackoverflow.com/questions/45565349/how-to-access-external-json-file-objects-in-vue-js-app
import data from '../../../data.json';
import Image from '../../component/image/Image.vue';

export default {
    components: {
        Image
    },
    props: {
        item: String,
    },
    methods: {
        imgUrl(url) {
            return "/" + url;
        }
    },
    computed: {
        shape(){
            return data.shapes.filter(obj => obj.slug == this.item)[0];
        }
    }
}

</script>

<template>
    <section class="section section--no-margin-top shape-hero__wrapper">
        <div class="shape-hero__img-wrapper">
            <div class="shape-hero__img-overlay"></div>
            <!-- <img class="shape-hero__img" :src="imgUrl(shape.heroImg)" :alt="shape.subtitle" loading="eager"> -->
            <Image 
                class="shape-hero__img" 
                :slug="shape.slug" 
                :shape="shape.name" 
                :img-id="shape.repertoire.imgId"
                loading="eager"
                :alt="shape.subtitle"/>
        </div>
        <div class="shape-hero__content-wrapper">
            <div class="shape-hero__name-wrapper">
                <h1 class="shape-hero__name">{{ shape.name }}</h1>
            </div>
            <div class="shape-hero__description-wrapper">
                <h2 class="shape-hero__description">{{ shape.subtitle }}</h2>
            </div>
            <div class="shape-hero__scroll-wrapper">
                <div class="shape-hero__scroll shape-hero__scroll--first">Scroll</div>
                <div class="shape-hero__scroll shape-hero__scroll--second">Scroll</div>
            </div>
        </div>
    </section>
    <section class="section section--no-margin-top section--padding-top-md shape-introduction">
        <div class="container">
            <div class="shape-introduction__row shape-introduction__row--first">
                <div class="shape-introduction__text-wrapper shape-introduction__text-wrapper--1">
                    <p class="shape-introduction__content">{{ shape.description.firstRow }}</p>
                </div>
                <div class="shape-introduction__text-wrapper shape-introduction__text-wrapper--2">
                    <p class="shape-introduction__content">{{ shape.description.secondRow }}</p>
                </div>
                <div class="shape-introduction__img-wrapper image-scroll__wrapper">
                    <!-- <img class="shape-introduction__img image-scroll" :src="imgUrl(shape.description.img)" :alt="shape.name"> -->
                    <Image 
                        class="shape-introduction__img image-scroll"
                        :slug="shape.slug" 
                        :shape="shape.name" 
                        :img-id="shape.description.img"
                        loading="lazy"
                        :alt="shape.name"/>
                </div>
            </div>
            <div class="shape-introduction__description-wrapper">
                <p class="shape-introduction__description">{{ shape.description.thirdRow }}</p>
            </div>
        </div>
    </section>
    <section class="section section--margin-xl shape-visual">
        <div class="container shape-visual__center-wrapper">
            <div class="shape-visual__label-wrapper">
                <span>Volumen</span>
                <span>{{ shape.name }}</span>
                <span>2023</span>
            </div>
        </div>
        <div class="shape-visual__main-wrapper">
            <div class="shape-visual__sticky-wrapper">
                <div class="shape-visual__overlay"></div>
                <div class="shape-visual__clip">
                    <div class="shape-visual__img-wrapper">
                        <!-- <img class="shape-visual__img" :src="imgUrl(shape.visual.img)" :alt="shape.visual.alt" loading="lazy"> -->
                        <Image 
                            class="shape-visual__img"
                            :slug="shape.slug" 
                            :shape="shape.name" 
                            :img-id="shape.visual.img"
                            loading="lazy"
                            :alt="shape.visual.alt" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section--no-margin-top section--padding-top-md shape-content">
        <div class="shape-content__wrapper">
            <div class="shape-content__left-wrapper">
                <div class="shape-content__sticky-title">{{ shape.content.title }}</div>
                <div class="shape-content__info-wrapper">
                    <div class="shape-content__by">Designed by</div>
                    <div class="shape-content__author">Jamy Rasanda</div>
                </div>
            </div>
            <div class="shape-content__right-wrapper">
                <div class="shape-content__text-wrapper">
                    <div class="shape-content__title-wrapper">
                        <span>{{ shape.name }}</span>
                    </div>
                    <div class="shape-content__paragraph-wrapper">
                        <p v-for="(paragraph, index) in shape.content.paragraph" :class="`shape-content__paragraph shape-content__paragraph--${index+1}`" :key="index">{{paragraph }}</p>
                    </div>
                </div>
                <div class="shape-content__img-track">
                    <div class="shape-content__sticky-wrapper">
                    <div class="shape-content__img-wrapper">
                        <!-- <img v-for="(img, index) in shape.content.images" :class="`shape-content__img shape-content__img--${index+1}`" :src="imgUrl(img.src)" :key="index" :alt="img.alt" loading="lazy"> -->
                        <Image 
                            v-for="(img, index) in shape.content.images"
                            :key="img+index"
                            :class="`shape-content__img shape-content__img--${index+1}`"
                            :slug="shape.slug" 
                            :shape="shape.name" 
                            :img-id="img.src"
                            loading="lazy"
                            :alt="img.alt" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>