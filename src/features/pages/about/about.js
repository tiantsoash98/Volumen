import { createApp } from "vue";
import About from "./About.vue";

function about(){
    createApp(About).mount('#about');
}

export default about