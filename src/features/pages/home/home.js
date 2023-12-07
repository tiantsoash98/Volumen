import { createApp } from "vue";
import Home from "./Home.vue";

function home(){
    createApp(Home).mount('#home');
}

export default home