"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ImponentText } from '../ui/imponent-text';
import useScreenSize from "@/hooks/useScreenSize";

gsap.registerPlugin(ScrollTrigger);

const MainProjects = () => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [screenSize,] = useState(useScreenSize());
  const frame = useRef({
    currIdx: 1,
    maxIdx: 706,
  });
  

  useEffect(() => {
    init();

    const handleResize = () => {
      loadImage(Math.floor(frame.current.currIdx));
    };

    if (typeof window === "undefined") {
      return;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  function init() {
    for (let i = 1; i <= frame.current.maxIdx; i++) {
      const img = new Image();
      img.src = `/solar/frame_${i}.webp`;
      img.onload = () => {
        imagesRef.current[i] = img;
        setImagesLoaded((prev) => {
          const newLoaded = prev + 1;
          if (newLoaded === frame.current.maxIdx) {
            animate();
          }
          return newLoaded;
        });
      };
    }
  }

  function loadImage(idx) {
    if (idx < 0 || idx > frame.current.maxIdx) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[idx];

    if (!img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;
    const scale = Math.max(scaleX, scaleY);

    const newWidth = img.width * scale;
    const newHeight = img.height * scale;

    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmootingEnabled = true;
    ctx.imageSmootingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  }

  function animate() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parent',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 2,
        anticipatePin: 1,
      },
    });

    const anime = (idx) => {
      return {
        currIdx: idx,
        ease: "linear",
        onUpdate: () => {
          loadImage(Math.floor(frame.current.currIdx));
        },
      }
    }

    tl
      .to(frame.current, anime(50), "fast")
      .to(".animate-1", { opacity: 1 }, "fast")

      .to(frame.current, anime(100), "second")
      .to(".animate-1", { y: -50, opacity: 0 }, "second")

      .to(frame.current, anime(150), "thard")
      .to(".animate-2", { y: -50, opacity: 1 }, "thard")

      .to(frame.current, anime(200), "forth")
      .to(".animate-2", { opacity: 1 }, "forth")

      .to(frame.current, anime(250), "fifth")
      .to(".animate-2", { y: -100, opacity: 0 }, "fifth")

      .to(frame.current, anime(270), "ninth")
      .to(".animate-4-bottom", { opacity: 1, y: -50 }, "ninth")
      .to(".animate-4-top", { opacity: 1, y: 50 }, "ninth")

      .to(frame.current, anime(350), "tenth")
      .to(".animate-4-bottom", { opacity: 1, }, "tenth")
      .to(".animate-4-top", { opacity: 1, }, "tenth")

      .to(frame.current, anime(430), "eleventh")
      .to(".animate-4-bottom", { opacity: 0, y: -100, ease: "linear" }, "eleventh")
      .to(".animate-4-top", { opacity: 0, y: 100, ease: "linear" }, "eleventh")

      .to(frame.current, anime(450), "twelfth")
      .to(".animate-5", { opacity: 1 }, "twelfth")

      .to(frame.current, anime(500), "thirteenth")
      .to(".animate-5", { opacity: 1 }, "thirteenth")
      .to("canvas", { scale: 0.7, ease: "circ.inOut", borderRadius: 30 }, "thirteenth")

      .to(frame.current, anime(550), "fourteenth")
      .to(".animate-5", { opacity: 1 }, "fourteenth")
      .to("canvas", { scale: 0.7, ease: "circ.inOut", borderRadius: 30 }, "fourteenth")
      .to(".animate-5 span", { width: 85, ease: "elastic" }, "fourteenth")

      .to(frame.current, anime(600), "fifteenth")
      .to(".animate-5", { opacity: 1 }, "fifteenth")
      .to("canvas", { scale: 1, ease: "linear", borderRadius: 0 }, "fifteenth")

      .to(frame.current, anime(650), "sixteenth")

      .to(frame.current, anime(703), "seventeenth")
      .to(".animate-5 span", { width: 85, ease: "elastic" }, "seventeenth")
  }
 
  return (
    <div className="parent relative w-full h-[1800vh] ">
      <div className="w-full sticky top-0 left-0 h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden">
        <canvas
          className="w-full h-screen object-cover"
          id="canvas"
          ref={canvasRef}
        />
        <div className='absolute bottom-24 left-1/2 !-translate-x-1/2 md:left-24 md:!translate-x-0 animate-1'>
          <h2 className='text-neutral-800 text-2xl md:text-4xl xl:text-6xl font-ubuntu '>
            Welcome to my About
          </h2>
        </div>
        <div className='absolute bottom-24 left-1/2 !-translate-x-1/2 md:right-24 md:!translate-x-0 animate-2 opacity-0'>
          <h2 className='text-neutral-800 text-2xl md:text-4xl xl:text-6xl font-ubuntu'>
            start a new <span className="bg-[linear-gradient(90deg,#0D92F4_0%,#6256CA_40%,#F95454_100%)] text-transparent bg-clip-text font-bold">journey</span>
          </h2>
        </div>
        <div className='absolute top-10 left-20 max-w-[600px] animate-4-top opacity-0 bg-white p-4 rounded-lg hidden md:block'>
          <p className="text-left  text-neutral-800 text-xl">
            I'm a passionate software engineer skilled in <ImponentText
              words={"Java, JavaScript, TypeScript,"} /> ans <ImponentText words={"Node.js"} />. I specialize in
            full-stack development, working with frameworks like <ImponentText
              words={"React.js, Next.js, Express, Tailwind CSS, SASS, "} />, ans <ImponentText
              words={"Framer Motion"} /> .
            My experience includes working with <ImponentText
              words={"AWS, Google Cloud, Firebase, BullMQ,"} />and <ImponentText words={"MongoDB"} />.
            My experience spans across <ImponentText
              words={"AWS, Google Cloud, Firebase, BullMQ,"} /> ans <ImponentText words={"MongoDB"} />.
          </p>
        </div>
        <div className='absolute bottom-20 right-20 max-w-[600px] animate-4-bottom opacity-0 bg-black p-4 rounded-lg hidden md:block'>
          <p className="text-left  text-neutral-200 text-xl">
            I've created impactful projects, including <ImponentText words={"my-own-facebook"} /> and
            an <ImponentText words={"animated 3D portfolio"} />, showcasing both technical expertise and
            creativity. With over <ImponentText words={"900+ problems solved on LeetCode"} />, I continually
            enhance my problem-solving abilities and stay eager to take on new challenges.
          </p>
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-5 text-neutral-800 text-sm md:text-2xl font-bold font-ubuntu'>
          I am a Software <span className="line inline-block w-[20px] h-[2px] md:h-1 bg-black"></span> Developer
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
