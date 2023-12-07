<script>
import Image from '../../component/image/Image.vue';

export default {
    components: {
        Image
    }
}

</script>

<template>
    <section class="section section--margin-xl about-main">
            <div class="container">
                <div class="about-main__wrapper">
                    <div class="about-main__content about-main__content--first">
                        <div class="about-main__title">Welcome to Volumen, a digital haven for enthusiasts, creatives, and inquisitive minds alike,</div>
                    </div>
                    <div class="about-main__content about-main__content--second">
                        <div class="about-main__title">dedicated to exploring the captivating world of shapes.</div>
                    </div>
                    <div class="about-main__content about-main__content--third">
                        <div class="about-main__text about-main__text--end">
                            We believe in the profound beauty and endless possibilities embedded in the geometry that surrounds us. </div>
                    </div>
                </div>
                <Image
                    class="about-main__img-wrapper image-scroll__wrapper"
                    :imgClass="'image-scroll'"
                    :slug="'the-all'" 
                    :shape="'All forms combined'" 
                    :imgId="1"
                    :orientation="'portrait'"
                    :willChange="false"
                    :loading="'lazy'"
                />
            </div>
        </section>
        <section class="section section--margin-md about-symphony">
            <div class="container">
                <div class="about-symphony__wrapper">
                    <div class="about-symphony__header">
                        <div class="about-symphony__title-wrapper">
                            <div class="about-symphony__title about-symphony__title--1">Giving life to the</div>
                            <div class="about-symphony__title about-symphony__title--2">symphony of shapes</div>
                        </div>
                    </div>
                    <div class="about-symphony__content-wrapper">
                        <p class="about-symphony__content about-symphony__content--1">
                            Shapes are more than mere structures, they are the building blocks of our understanding, the canvas for our creativity, and the inspiration for innovation.
                        </p>
                        <p class="about-symphony__content about-symphony__content--2">
                            Let's unravel the secrets, appreciate the aesthetics, and embrace the boundless creativity that springs from the fundamental elements of form.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--margin-md about-beauty">
            <div class="about-beauty__section-height">
                <div class="about-beauty__sticky-element">
                    <div class="about-beauty__track">
                        <div class="about-beauty__track-flex">
                            <div class="about-shape__wrapper" role="list" >
                                <div class="about-shape__item about-shape__item--1 about-shape__item--visible-first" role="listitem">
                                    <Image
                                        class="about-shape__img-wrapper"
                                        :imgClass="'about-grid__img'"
                                        :slug="'the-pyramid'" 
                                        :shape="'The Pyramid'" 
                                        :imgId="3"
                                        :orientation="'portrait'"
                                        :willChange="false"
                                        :loading="'lazy'"
                                    />
                                </div>
                                <div class="about-shape__item about-shape__item--2 about-shape__item--visible-first" role="listitem">
                                    <Image
                                        class="about-shape__img-wrapper"
                                        :imgClass="'about-grid__img'"
                                        :slug="'the-sphere'" 
                                        :shape="'The Sphere'" 
                                        :imgId="3"
                                        :orientation="'portrait'"
                                        :willChange="false"
                                        :loading="'lazy'"
                                    />
                                </div>
                                <div class="about-shape__item about-shape__item--3 about-shape__item--visible-first" role="listitem">
                                    <Image
                                        class="about-shape__img-wrapper"
                                        :imgClass="'about-grid__img'"
                                        :slug="'the-cube'" 
                                        :shape="'The Cube'" 
                                        :imgId="3"
                                        :orientation="'portrait'"
                                        :willChange="false"
                                        :loading="'lazy'"
                                    />
                                </div>
                                <div class="about-shape__item about-shape__item--4" role="listitem">
                                    <Image
                                        class="about-shape__img-wrapper"
                                        :imgClass="'about-grid__img'"
                                        :slug="'the-square'" 
                                        :shape="'The Square'" 
                                        :imgId="3"
                                        :orientation="'portrait'"
                                        :willChange="false"
                                        :loading="'lazy'"
                                    />
                                </div>
                                <div class="about-shape__item about-shape__item--5" role="listitem">
                                    <Image
                                        class="about-shape__img-wrapper"
                                        :imgClass="'about-grid__img'"
                                        :slug="'the-icosahedral'" 
                                        :shape="'The Icosahedral'" 
                                        :imgId="3"
                                        :orientation="'portrait'"
                                        :willChange="false"
                                        :loading="'lazy'"
                                    />
                                </div>
                            </div>
                            
                            <div class="about-grid__section-width">
                                <div class="about-grid__sticky-element">
                                    <div class="about-grid__overlay"></div>
                                    <div class="about-grid__content-wrapper">
                                        <div class="about-grid__title-wrapper">
                                            <div class="about-grid__title">Beauty in every curve, line, and angle</div>
                                        </div>
                                        <div class="about-grid__description-wrapper">
                                            <p class="about-grid__description">Explore the stories behind iconic shapes, discover their historical significance, and delve into the myriad ways they shape our world.</p>
                                        </div>
                                    </div>
                                    <Image
                                        class="about-grid__img-wrapper about-grid__img-wrapper--1"
                                        :imgClass="'about-grid__img'"
                                        :slug="'the-all'" 
                                        :shape="'All forms combined'" 
                                        :imgId="2"
                                        :orientation="'landscape'"
                                        :willChange="true"
                                        :loading="'lazy'"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </section>

        <section class="section about-quote">
            <div class="container">
                <div class="about-quote__label-wrapper">
                    <span>Volumen</span>
                    <span>2023</span>
                </div>
                <div class="about-quote__main-wrapper">
                    <div class="about-quote__row about-quote__row--1">
                        <div class="about-quote__content about-quote__content--1">Every shape tells</div>
                        <div class="about-quote__content about-quote__content--2">a story,</div>
                        <Image
                            class="about-quote__img-wrapper about-quote__img-wrapper--1 image-scroll__wrapper"
                            :imgClass="'image-scroll'"
                            :slug="'the-cube'" 
                            :shape="'The Cube'" 
                            :imgId="6"
                            :orientation="'landscape'"
                            :willChange="false"
                            :loading="'lazy'"
                        />
                    </div>
                    <div class="about-quote__row about-quote__row--2">
                        <div class="about-quote__content about-quote__content--3">every story</div>
                        <div class="about-quote__content about-quote__content--4">sparks new ideas.</div>
                        <Image
                            class="about-quote__img-wrapper about-quote__img-wrapper--2 image-scroll__wrapper"
                            :imgClass="'image-scroll'"
                            :slug="'the-pyramid'" 
                            :shape="'The Pyramid'" 
                            :imgId="6"
                            :orientation="'landscape'"
                            :willChange="false"
                            :loading="'lazy'"
                        />
                    </div>
                </div>
                <div class="about-spacer"></div>
                <div class="about-credits">
                    <div class="about-credits__content-wrapper">
                        <div class="about-credits__title-wrapper">
                            <div class="about-credits__title">Welcome to Volumen</div>
                        </div>
                        <div class="about-credits__credits about-credits__credits--left">
                            <span>Orchestrated with artistry by</span>
                            <span>Tiantsoa Rabemananjara</span>
                            <span>Web Design & Development</span>
                            <ul class="about-credits__links">
                                <li class="about-credits__link"><a href="https://www.linkedin.com/in/tiantsoa-rabemananjara-254655152/" target="_blank" class="hover-link">Linkedin</a></li>
                                <li class="about-credits__link-separator">, </li>
                                <li class="about-credits__link"><a href="https://www.instagram.com/tiantsoa_sh/" target="_blank" class="hover-link">Instagram</a></li>
                                <li class="about-credits__link-separator">, </li>
                                <li class="about-credits__link"><a href="mailto:tiantsoa.sh@gmail.com" target="_blank" class="hover-link">Email</a></li>
                            </ul>
                        </div>
                        <div class="about-credits__credits about-credits__credits--right">
                            <span>Crafted with precision by</span>
                            <span>Jamy Rasanda</span>
                            <span>3D Artist</span>
                            <ul class="about-credits__links">
                                <li class="about-credits__link"><a href="https://www.instagram.com/jamyrasanda/" target="_blank" class="hover-link">Instagram</a></li>
                                <li class="about-credits__link-separator">, </li>
                                <li class="about-credits__link"><a href="https://www.artstation.com/jamyrasanda" target="_blank" class="hover-link">ArtStation</a></li>
                                <li class="about-credits__link-separator">, </li>
                                <li class="about-credits__link"><a href="https://www.linkedin.com/in/jamy-rasanda-a853bb168/" target="_blank" class="hover-link">Linkedin</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div class="about-spacer"></div>
                <div class="about-home">
                    <a href="./index.html" class="about-home__link hover-link">Back to Index</a>
                </div>
                <div class="about-spacer"></div>
            </div>
        </section>        
</template>