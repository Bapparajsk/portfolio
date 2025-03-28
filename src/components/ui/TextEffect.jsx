'use client';

import {memo} from 'react';
import { motion, MoctionSpan } from '@/lib/motion';

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(12px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
    },
  },
  shake: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 0 },
      visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 1 } },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
};

const AnimationComponent = memo(({ word, variants, per }) => {
  if (per === 'word') {
    return (
      <MoctionSpan
        aria-hidden='true'
        variants={variants}
        className='inline-block whitespace-pre'
      >
        {word}
      </MoctionSpan>
    );
  }

  return (
    <span className='inline-block whitespace-pre'>
      {word.split('').map((char, charIndex) => (
        <MoctionSpan
          key={`char-${charIndex}`}
          aria-hidden='true'
          variants={variants}
          className='inline-block whitespace-pre'
        >
          {char}
        </MoctionSpan>
      ))}
    </span>
  );
});

AnimationComponent.displayName = 'AnimationComponent';

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  variants,
  className,
  preset,
}) {
  const words = children.split(/(\S+)/);
  const MotionTag = motion[as];
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <MotionTag
      initial='hidden'
      animate='visible'
      aria-label={children}
      variants={containerVariants}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <AnimationComponent
          key={`word-${wordIndex}`}
          word={word}
          variants={itemVariants}
          per={per}
        />
      ))}
    </MotionTag>
  );
}
