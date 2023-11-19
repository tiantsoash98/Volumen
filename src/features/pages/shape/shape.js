import { createApp } from "vue";
import Shape from "./Shape.vue";
import Suggested from "../../component/Suggested/Suggested.vue";

function shape(){
    /* App mount */
    // https://stackoverflow.com/questions/64010560/passing-props-to-vue-root-instance-via-attributes-on-element-the-app-is-mounted
    const appSelector = "#shape";
    const mountEl = document.querySelector(appSelector);
    createApp(Shape, { ...mountEl.dataset }).mount(appSelector);
    createApp(Suggested, { ...mountEl.dataset }).mount("#suggested");
}

export default shape