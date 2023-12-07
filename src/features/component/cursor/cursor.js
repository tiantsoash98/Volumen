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

    let matchMedia = gsap.matchMedia();

    matchMedia.add("(hover: none)", () => {
        cursor.destroy()
    });
    
}

export default cursor