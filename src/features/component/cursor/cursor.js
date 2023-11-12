import MouseFollower from "mouse-follower";
import gsap from "gsap";

function cursor(){
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
        container: document.body,
        speed: 1,
        ease: 'expo.out',
    });
}

export default cursor