import MouseFollower from "mouse-follower";
import gsap from "gsap";

function mouseFollower(){
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
        container: document.body,
        speed: 1,
        ease: 'expo.out',
    });
}

export default mouseFollower