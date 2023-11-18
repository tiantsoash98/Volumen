import { createApp } from "vue";
import Loader from './Loader.vue';

function loader(){
    createApp(Loader).mount('#loader');
}

export default loader