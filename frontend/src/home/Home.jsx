import React from 'react'
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar/>
      <Banner />
      <Freebook/>
      <Footer />
    </>
  )
}

export default Home

// import React from 'react';
// import Banner from '../components/Banner';
// import FreeBook from '../components/Freebook';

// export default function Home() {
//   return (
//     <div className="relative">
//       {/* Fixed banner that animates on scroll */}
//       <div className="sticky top-0 z-50 h-screen">
//         <Banner />
//       </div>

//       {/* Spacer to allow scrolling through the animation */}
//       <div className="h-[600px]"></div>

//       {/* Rest of your content */}
//       <div className="relative z-10 bg-white">
//         {/* <FreeBook /> */}
//         {/* Other components */}
//       </div>
//     </div>
//   );
// }