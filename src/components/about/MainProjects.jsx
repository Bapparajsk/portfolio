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

  function animate() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parent',
        start: 'top top',
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
    .to(frame.current, anime(frame.current.maxIdx))

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

  return (
    <div className="parent relative w-full h-[2000vh]">
      <div className="w-full sticky top-0 left-0 h-screen bg-[url('/solar/frame_1.webp')] bg-cover bg-center bg-no-repeat">
        <canvas
          className="w-full h-screen object-cover"
          id="canvas"
          ref={canvasRef}
        />
        
      </div>
    </div>
  );
};

export default MainProjects;
