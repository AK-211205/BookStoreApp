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
          className="w-full max-w-8xl mx-auto object-contain"
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






// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// function Banner() {
//   const { scrollY } = useScroll();

//   // 🎬 Animate image moving left and shrinking
//   const imageX = useTransform(scrollY, [0, 400], ['0%', '-40%']);
//   const imageScale = useTransform(scrollY, [0, 400], [1, 0.8]);

//   // 🎬 Animate text fading in from right
//   const textOpacity = useTransform(scrollY, [200, 500], [0, 1]);
//   const textX = useTransform(scrollY, [200, 500], ['40%', '0%']);

//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white">
//       {/* Animated Image */}
//       <motion.div
//         className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10"
//         style={{
//           x: imageX,
//           scale: imageScale,
//         }}
//       >
//         <img
//           src="/Banner.jpg"
//           alt="Banner"
//           className="w-full max-w-[900px] object-contain"
//         />
//       </motion.div>

//       {/* Animated Text */}
//       <motion.div
//         className="absolute right-0 top-0 h-full flex items-center justify-center z-20 px-8 max-w-2xl text-left"
//         style={{
//           opacity: textOpacity,
//           x: textX,
//         }}
//       >
//         <div className="bg-white/90 p-6 md:p-10 rounded-xl shadow-xl backdrop-blur">
//           <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
//             A book is a dream that you hold in your hands.{' '}
//             <span className="text-pink-500">— Neil Gaiman.</span>
//           </h1>
//           <p className="text-base md:text-lg text-gray-700">
//             Welcome to our Book Bridge, a unique platform dedicated to redistributing books to those in need. Our mission is to collect donated books from individuals and connect them with NGOs and orphanages, ensuring that children have access to a wide range of reading materials at no cost. By giving these books a second life, we hope to foster a love for reading and learning among underprivileged communities. Join us in this initiative to spread knowledge and make a difference — one book at a time.
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Banner;




// import React from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// function Banner() {
//   const { scrollY } = useScroll();

//   // Image animation - shrinks and moves left
//   const imageX = useTransform(scrollY, [0, 500], ['0%', '-25%']);
//   const imageScale = useTransform(scrollY, [0, 500], [1, 0.6]);
//   const imageWidth = useTransform(scrollY, [0, 500], ['100%', '50%']);

//   // Text animation - fades in and centers
//   const textOpacity = useTransform(scrollY, [100, 400], [0, 1]);
//   const textScale = useTransform(scrollY, [100, 400], [0.9, 1]);

//   return (
//     <div className="w-full h-screen relative overflow-hidden bg-white sticky top-0">
//       {/* Shrinking Image on Left */}
//       <motion.div
//         className="absolute left-0 top-0 h-full flex justify-center items-center z-10"
//         style={{
//           x: imageX,
//           scale: imageScale,
//           width: imageWidth,
//         }}
//       >
//         <img
//           src="/Banner.jpg"
//           alt="Banner"
//           className="h-full object-cover"
//         />
//       </motion.div>

//       {/* Centered Content */}
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center z-20 px-8"
//         style={{
//           opacity: textOpacity,
//           scale: textScale,
//         }}
//       >
//         <div className="bg-white/90 p-8 rounded-xl shadow-xl backdrop-blur max-w-2xl w-full">
//           <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4 text-center">
//             Book Bridge
//           </h1>
//           <blockquote className="text-2xl italic mb-6 text-gray-700 text-center">
//             "A book is a dream that you hold in your hands."
//             <span className="not-italic text-pink-600"> — Neil Gaiman</span>
//           </blockquote>
//           <div className="text-lg text-gray-600 space-y-4 text-center">
//             <p>
//               Welcome to our Book Bridge, a unique platform dedicated to redistributing books to those in need.
//             </p>
//             <p>
//               Our mission is to collect donated books from individuals and connect them with NGOs and orphanages.
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Banner;