// // import React from 'react'
// import React, { useEffect, useState } from 'react'
// import Cards from "./Cards"
// // import list from "../../public/list.json"
// import axios from "axios"
// import {Link} from "react-router-dom"
// function Course() {
//     console.log("Course component rendered"); 
//     useEffect(()=>{
//       const [book, setBook]=useState([])
//       useEffect(()=>{
//         const getBook=async()=>{
//           try{
//             const res= await axios.get("http://localhost:4001/Book");
//             console.log(res.data)
//             setBook(res.data)
//           }catch (error){
//             console.log(error)
//           }
//         }
//         getBook();
//       })
//     },[]
//     );
//   return (
//     <>
//       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div className="mt-28 items-center justify-center text-center">
//           <h1 className="text-2xl md:text-4xl">
//             We are delighted to have you{""}
//             <span className="text-pink-500"> Here!!! :)</span>
//           </h1>
//           <p className="mt-12">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat saepe dolorum harum qui doloribus debitis corporis architecto autem voluptas minus numquam ratione, temporibus nihil impedit deserunt rerum nulla quaerat.
//           </p>
//           <Link to="/">
//             <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//             Back
//             </button>
//           </Link>
//         </div>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
//             {
//               Book.map((item)=>(
//                 <Cards key={item.id} item={item}/>
//               ))
//             }
//         </div>
//       </div>
//     </>
//   )
// }

// export default Course




import React, { useEffect, useState } from 'react';
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
    console.log("Course component rendered"); 

    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/Book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        We are delighted to have you
                        <span className="text-pink-500"> Here!!! :)</span>
                    </h1>
                    <p className="mt-12">
                     "Your unused books can become someone else's treasure. Donate today".
                     
                    </p>
                    <p>
                        "Books have the power to change lives. Share that power by donating your books".
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Course;
