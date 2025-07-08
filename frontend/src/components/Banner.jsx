import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Banner() {
  const { scrollY } = useScroll();

  // Image shrinking steps
  const imageScale = useTransform(
    scrollY,
    [0, 100, 200, 300, 400],
    [1.1, 1.0, 0.9, 0.85, 0.8]
  );

  // Text headline animation
  const headingOpacity = useTransform(scrollY, [150, 250], [0, 1]);
  const headingY = useTransform(scrollY, [150, 300], [100, 0]);

  // Paragraph animation
  const paraOpacity = useTransform(scrollY, [250, 350], [0, 1]);
  const paraY = useTransform(scrollY, [250, 400], [100, 0]);

  // Input + Button animation
  const inputOpacity = useTransform(scrollY, [350, 450], [0, 1]);
  const inputY = useTransform(scrollY, [350, 500], [50, 0]);

  return (
    <div className="w-full flex flex-col items-center text-center mt-20">
      {/* Shrinking Image */}
      <motion.div style={{ scale: imageScale }} className="mt-20">
        <img
          src="/Banner.jpg"
          alt="Banner"
          className="w-full max-w-6xl mx-auto object-contain"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold mt-10 leading-snug max-w-3xl px-4"
        style={{
          opacity: headingOpacity,
          y: headingY,
        }}
      >
        A book is a dream that you hold in your hands.{' '}
        <span className="text-pink-500">— Neil Gaiman.</span>
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        className="text-xl mt-8 max-w-3xl px-4"
        style={{
          opacity: paraOpacity,
          y: paraY,
        }}
      >
        Welcome to our Book Bridge, a unique platform dedicated to redistributing books to those in need.
        Our mission is to collect donated books from individuals and connect them with NGOs and orphanages,
        ensuring that children have access to a wide range of reading materials at no cost. 
        By giving these books a second life, we hope to foster a love for reading and learning among underprivileged communities. 
        Join us in this initiative to spread knowledge and make a difference—one book at a time.
      </motion.p>

      {/* Input + Button */}
      <motion.div
        style={{ opacity: inputOpacity, y: inputY }}
        className="mt-10 flex flex-col items-center gap-4"
      >
        <label className="input input-bordered flex items-center gap-2 w-full max-w-md mx-auto">
          <svg className="h-4 w-4 opacity-70" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5 3A1.5 1.5..." />
            <path d="M15 6.954..." />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>

        <button
          className="btn btn-secondary"
          onClick={() =>
            window.location.href =
              'https://docs.google.com/forms/d/e/1FAIpQLSee-U2BM5J51SRtng0lKnmrMprWVjOF4H2HrpM7LASNXH7dNw/viewform'
          }
        >
          NGO's
        </button>
      </motion.div>
    </div>
  );
}

export default Banner;
