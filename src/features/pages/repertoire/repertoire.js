import { createApp } from "vue";
import Repertoire from "../../component/repertoire/Repertoire.vue";

function repertoire(){
    createApp(Repertoire).mount('#repertoire');
}

export default repertoire