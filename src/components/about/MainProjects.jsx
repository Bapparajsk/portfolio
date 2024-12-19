"use client";
import React, { useEffect, useRef, useState } from 'react'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const MainProjects = () => {
  
  const canvasRef = useRef(null);
  const [, setImagesloaded] = useState(1);
  const [images, setImages] = useState([]);
  const [frame, setFrame] = useState({
    currIdx: 1,
    maxIdx: 285
  });


  useEffect(() => {
    init();
  }, [])

  function init() {
    for (let i = 1; i <= frame.maxIdx; i++) {
      const img = new Image();
      img.src = `/solar/frame_${i}.webp`;
      img.onload = () => {
        images[i] = img;
        setImagesloaded(prev => {
          prev++;
          if (prev === frame.maxIdx) {
            animate();
          }
          return prev;
        })
      }

      setImages(prev => ([...prev, img]));
    }
  }

  function animate() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parent',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
        anticipatePin: 1
      }
    });

    tl.to(frame, {
      currIdx: frame.maxIdx+1,
      onUpdate: () => {
        loadImage(Math.floor(frame.currIdx));
      }
    });
  }

  function loadImage(idx) {

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');

    if (!(idx >= 1 && idx <= frame.maxIdx)) return;

    const img = images[idx];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;

    const newWidth = img.width * scaleX;
    const newHeight = img.height * scaleY;

    const offsetX = (canvas.width - newWidth) / 2;
    const offsetY = (canvas.height - newHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

    setFrame(prev => ({...prev, currIdx: idx}));
  }


  return (
    <div className="parent relative w-full h-[1200vh]">
      <div className="w-full sticky top-0 left-0 h-screen bg-[url('/solar/frame_1.webp')] bg-cover bg-center bg-no-repeat">
        <canvas className="w-full h-screen object-cover" id='canvas' ref={canvasRef}></canvas>
      </div>
    </div>
  )
}

export default MainProjects
