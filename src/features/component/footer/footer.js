import { createApp } from "vue";
import Footer from './Footer.vue';

function footer(){
    createApp(Footer).mount('#footer');
}

export default footer