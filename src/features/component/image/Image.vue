<script>
export default {
    data(){
        return {
            sizes: {
                landscape: [320,969,1332,1740,2025,2880],
                portrait: [320,544,706,1134,2160]
            }
        }
    },
    props: {
        slug : String,
        shape : String,
        imgId : {
            type: [String, Number],
            default: "1",
        },
        orientation : {
            type: String,
            default: "landscape",
        },
        willChange : {
            type: Boolean,
            default: false
        },
        imgClass : {
            type: String
        },
        loading: {
            type: String,
            default: "lazy"
        },
        defaultSize: {
            type: String,
            default: "100vw"
        },
        mediumSize: {
            type: String,
            default: ""
        },
        smallSize: {
            type: String,
            default: ""
        },
        extraSmallSize: {
            type: String,
            default: ""
        }
    },
    methods: {
        getPortraitSrcset(){
            const srcset = [];

            this.sizes.portrait.forEach((size) => {
                srcset.push(`/${this.slug}-portrait-${this.imgId}-${size}.webp ${size}w`);
            })

            return srcset.join(', ');
        },
        getLandscapeSrcset(){
            const srcset = [];

            this.sizes.landscape.forEach((size) => {
                srcset.push(`/${this.slug}-landscape-${this.imgId}-${size}.webp ${size}w`);
            })

            return srcset.join(', ');
        },
        getSrc(){
            return `/${this.slug}-landscape-${this.imgId}-2880.webp`;
        },
        getOppositeOrientationSrcSet(){
            if(this.orientation == "landscape")
                return this.getPortraitSrcset();

            return this.getLandscapeSrcset();
        },
        getCurrentOrientationSrcSet(){
            if(this.orientation == "landscape")
                return this.getLandscapeSrcset();

            return this.getPortraitSrcset();
        },
        getImgMedia(){
            const newOrientation = this.orientation == "landscape" ? "portrait" : "landscape";
            return `(orientation: ${newOrientation})`;
        },
        getMaxWidth(){
            return this.orientation == "landscape" ? 
                    this.sizes.landscape.slice(-1) : 
                    this.sizes.portrait.slice(-1)
        },
        imgSizes() {
            // (max-width: 576px) 224px, (max-width: 767px) 688px, (max-width: 991px) 43vw, 48vw
            // (max-width: 576px) 47vw, (max-width: 767px) 30vw, 32vw
            let imgSizes = [];
            if (this.mediumSize !== "") imgSizes.push(`(max-width: 991px) ${this.mediumSize}`)
            if (this.smallSize !== "") imgSizes.push(`(max-width: 767px) ${this.smallSize}`)
            if (this.extraSmallSize !== "") imgSizes.push(`(max-width: 576px) ${this.extraSmallSize}`)
            imgSizes.push(this.defaultSize)

            return imgSizes.join(", ");
        },
    },
    computed: {
        
        getImgClass() {
            return "img__item " + this.imgClass;
        }
    }
}
</script>

<template>
    <picture class="img__wrapper">
        <source 
            v-if="willChange"
            :media="getImgMedia()" 
            :srcset="getOppositeOrientationSrcSet()">
        <img
            :sizes="imgSizes()"
            :srcset="getCurrentOrientationSrcSet()"
            :src="getSrc()"
            :alt="shape"
            :class="getImgClass"
            :loading="loading"
        >
    </picture>
</template>

<style scoped>

</style>