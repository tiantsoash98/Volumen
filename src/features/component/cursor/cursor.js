import $ from "jquery";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

function cursor(){
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
        container: document.body,
        speed: 1,
        ease: 'expo.out',
        skewingText: 0,
    });

    // $('article').on('mouseenter', () => {
    //     cursor.removeState('-exclusion');
    // });
    
    // $('article').on('mouseleave', () => {
    //     cursor.addState('-exclusion');
    // });
}

export default cursor