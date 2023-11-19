<script setup>
function imgUrl(url) {
  return "/" + url;
}
</script>

<template>
    <div class="container">
        <div class="repertoire__menu">
        <h3 class="repertoire__title">Repertoire of forms</h3>
        <!-- <a class="repertoire__see-all" href="#">See all</a> -->
        </div>
        <div class="repertoire__items">
        <article class="repertoire__item repertoire__item--1" >
            <figure class="repertoire__item-image-wrapper image-scroll__wrapper">
                <a href="./the-icosahedral.html">
                    <img class="image-scroll" src="/the-icosahedral-landscape-1.webp" alt="The Icosahedral" loading="lazy">
                </a>
            </figure>
            <div class="repertoire__details">
                <div class="repertoire__title">
                    <a href="./the-icosahedral.html">The Icosahedral</a>
                </div>
                <div class="repertoire__year"><a href="./the-icosahedral.html" class="hover-link">View</a></div>
            </div>
        </article>
        <article class="repertoire__item repertoire__item--2" >
            <figure class="repertoire__item-image-wrapper image-scroll__wrapper">
                <a href="./the-sphere.html">
                    <img class="image-scroll" src="/the-sphere-portrait-1.webp" alt="The Sphere" loading="lazy">
                </a>
            </figure>
            <div class="repertoire__details">
                <div class="repertoire__title">
                    <a href="./the-sphere.html">The Sphere</a>
                </div>
                <div class="repertoire__year"><a href="./the-sphere.html" class="hover-link">View</a></div>
            </div>
        </article>
        <article class="repertoire__item repertoire__item--3" >
            <figure class="repertoire__item-image-wrapper image-scroll__wrapper">
                <a href="./sphere/">
                    <img class="image-scroll" src="/the-square-landscape-1.webp" alt="The Square" loading="lazy">
                </a>
            </figure>
            <div class="repertoire__details">
                <div class="repertoire__title">
                    <a href="./sphere/">The Square</a>
                </div>
                <div class="repertoire__year"><a href="./sphere/" class="hover-link">View</a></div>
            </div>
        </article>
        <article class="repertoire__item repertoire__item--4" >
            <figure class="repertoire__item-image-wrapper image-scroll__wrapper">
                <a href="./sphere/">
                    <img class="image-scroll" src="/the-pyramid-portrait-1.webp" alt="The Pyramid" loading="lazy">
                </a>
            </figure>
            <div class="repertoire__details">
                <div class="repertoire__title">
                    <a href="./sphere/">The Pyramid</a>
                </div>
                <div class="repertoire__year"><a href="./sphere/" class="hover-link">View</a></div>
            </div>
        </article>
        <article class="repertoire__item repertoire__item--5" >
            <figure class="repertoire__item-image-wrapper image-scroll__wrapper">
                <a href="./sphere/">
                    <img class="image-scroll" src="/the-cube-landscape-1.webp" alt="The Cube" loading="lazy">
                </a>
            </figure>
            <div class="repertoire__details">
                <div class="repertoire__title">
                    <a href="./cube">The Cube</a>
                </div>
                <div class="repertoire__year"><a href="./sphere/" class="hover-link">View</a></div>
            </div>
        </article>
        </div>
    </div>
</template>