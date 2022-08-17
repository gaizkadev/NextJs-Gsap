import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SHorizontal() {
  useEffect(() => {
    gsap.fromTo(
      ".blue",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power3.inOut",
        delay: 1,
        scrollTrigger: {
          trigger: ".blue",
          markers: true,
          start: "center center",
          end: "+=100px center",
          scrub: true,
        },
      }
    );
    gsap.to(".orange p", {
      scrollTrigger: ".orange",
      duration: 2,
      rotation: 360,
    });
    gsap.to(".red", {
      scrollTrigger: {
        trigger: ".red",
        toggleActions: "restart pause reverse pause",
      },
      duration: 1,
      backgroundColor: "#FFA500",
      duration: 2,
      ease: "none",
    });
    gsap.to(".yoyo p", {
      scrollTrigger: ".yoyo",
      scale: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2",
    });
  }, []);
  return (
    <>
      <section>
        <section
          className="panel bg-blue-200 h-screen flex justify-start items-center"
          id="smooth-content"
        >
          <div className="w-1/2">
            <img src="itx_04.webp" className="blue opacity-0" alt="" />
          </div>
        </section>

        <section
          className="panel orange bg-orange-200 h-screen flex justify-center items-center"
          id="smooth-content"
        >
          <p>This element will spin.</p>
        </section>

        <section
          className="panel red bg-red-200 h-screen flex justify-center items-center"
          id="smooth-content"
        >
          <p>This background color will change</p>
        </section>

        <section
          className="panel blue yoyo bg-blue-400 h-screen flex justify-center items-center"
          id="smooth-content"
        >
          <p>Yoyo Text!</p>
        </section>
      </section>
    </>
  );
}

export default SHorizontal;
