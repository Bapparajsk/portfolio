"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const MainProjects = () => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
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
        end: 'bottom top',
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

    .to(frame.current, anime(300), "ninth")
    .to(".animate-4", { x: "0%", ease: "linear" }, "ninth")

    .to(frame.current, anime(350), "tenth")
    .to(".animate-4", { x: "0%" }, "tenth")

    .to(frame.current, anime(400), "eleventh")
    .to(".animate-4", { x: "0%", opacity: "0", ease: "circ.inOut" }, "eleventh")

    .to(frame.current, anime(450), "twelfth")
    .to(".animate-5", { opacity: 1 }, "twelfth")

    .to(frame.current, anime(500), "thirteenth")
    .to(".animate-5", { opacity: 1 }, "thirteenth")
    .to("canvas", { scale: 0.7,  ease: "circ.inOut" }, "thirteenth")

    .to(frame.current, anime(550), "fourteenth")
    .to(".animate-5", { opacity: 1 }, "fourteenth")
    .to("canvas", { scale: 1,  ease: "linear" }, "fourteenth")

    .to(frame.current, anime(600), "fifteenth")
    .to(".animate-5 span", { width: 100, ease: "elastic" }, "fifteenth")

    .to(frame.current, anime(650), "sixteenth")
    .to(".animate-5 span", { width: 20, ease: "elastic" }, "sixteenth")

    .to(frame.current, anime(703), "seventeenth")
    .to(".animate-5 span", { opacity: 0 }, "seventeenth")
  }

  return (
    <div className="parent relative w-full h-[1800vh] ">
      <div className="w-full sticky top-0 left-0 h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden">
        <canvas
          className="w-full h-screen object-cover"
          id="canvas"
          ref={canvasRef}
        />
        <div className='absolute bottom-24 left-24 animate-1'>
          <h2 className='text-neutral-800 text-6xl font-bold font-ubuntu '>
            I am a Software Engineer
          </h2>
        </div>
        <div className='absolute bottom-24 right-24 animate-2 opacity-0'>
          <h2 className='text-neutral-800 text-6xl font-bold font-ubuntu '>
            I am a Software Engineer
          </h2>
        </div>
        <div className='absolute bottom-0 right-0 h-full w-1/4 bg-black translate-x-full animate-4'></div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 animate-5 text-neutral-800 text-2xl font-bold font-ubuntu'>
          I am a Software <span className="line inline-block w-[20px] h-1 bg-black"></span>  Engineer
        </div>
      </div>
    </div>
  );
};

export default MainProjects;
