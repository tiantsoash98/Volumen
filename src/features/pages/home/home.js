import { createApp } from "vue";
import Home from "./home.vue";

function home(){
    createApp(Home).mount('#home');
}

export default home