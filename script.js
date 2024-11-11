
// function MouseFollower(){
//     var crsr = document.querySelector("#crsr")

// document.querySelector("#main").addEventListener("mousemove", function(dets){
//     gsap.to(crsr,{
//         left: dets.clientX,
//         top: dets.clientY
//     })
// })}
// MouseFollower();
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageMasker(".mask-target" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "View",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


  Shery.makeMagnet(".magnet");







document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left: dets.clientX,
        top: dets.clientY
    })
})

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%, -50%)scale(1)"
        });
    });
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%, -50%)scale(0)"
        });
    });
});

function textsplitter(){
    var h1= document.querySelector("#page4 h1");
    var h1s= document.querySelector("#page4 h1").textContent.split("")
    var clutter = ""
    h1s.forEach(function(elem){
        clutter += `<span>${elem}</span>`
    })
    
    h1.innerHTML = clutter
}

textsplitter();

    
function NavSVGAnimation(){
    gsap.to("#page4 h1 span",{
        color: "#000",
        stagger: 0.3,
        delay: .2,
        scrollTrigger: {
            trigger: "#page4 h1",
            scroller: "body",
            scrub:1,
            // markers: true,
            start: "top 60%",
            end: "top 20%"
        }
      
    })
    
    
    gsap.to("#navpart1 svg",{
        transform: "translateY(-100%)",
        
        scrollTrigger:{
            trigger: "#page1",
            scroller: "body",
            start: "top 0%",
            end: "top -5%",
            scrub:true
        }
    
    })
    
}

NavSVGAnimation()

var tl = gsap.timeline()
tl.from("#herotext h1",{
    x: -150,
    stagger: 0.3,
    duration:1,
    scrub: 2,
    opacity: 0
},'a')
tl.from("#heroimage img",{
    scale: .5,
    opacity: 0,
    duration: 1,
    scrub: 2
},'a')


gsap.from("#page2 .elem",{
    y:100,
    opacity: 0,
    duration: 1,
    stagger: .2,
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        start: "top 50%",
        end: "top 10%",
        // markers: true,
        scrub: true
    }
})


gsap.from("#page2-foot #pfootWrap, #pfootRight",{
    opacity:0,
    duration: 1.2,
    stagger:.2,
    scrollTrigger:{
        trigger: "#page2-foot",
        scroller: "body",
        start: "top 50%",
        end: "top 10%"
    }
})

gsap.from("#page3 .child",{
    y:-100,
    opacity: 0,
    delay: .7,
    stagger: .2,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        start: "top 50%",
        end: "top -50%",
        // markers: true,
        scrub: true
    }
})

gsap.fromTo("#foot-2 svg", 
    {
      strokeDashoffset: 488,     // Initial offset
      fill: "transparent"        // Initial fill color
    }, 
    {
      strokeDashoffset: 0,       // Final offset to reveal stroke
      fill: "#000",              // Final fill color
      duration: 4,               // Animation duration
      ease: "power1.inOut",      // Easing function
      scrollTrigger: {
        trigger: "#foot-2",      // Element that triggers the animation
        start: "top center",     // When #foot-2 reaches the center of the viewport
        toggleActions: "play none none none", // Play the animation once on scroll
        // markers: true            // Enable markers for debugging
      }
    }
  );