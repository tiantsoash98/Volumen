import { createApp } from "vue";
import Repertoire from "../../component/repertoire/Repertoire.vue";

function home(){
    createApp(Repertoire).mount('#repertoire');
}

export default home