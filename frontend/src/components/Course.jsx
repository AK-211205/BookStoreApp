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




// import React, { useEffect, useState } from 'react';
// import Cards from "./Cards";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Course() {
//     console.log("Course component rendered"); 

//     const [book, setBook] = useState([]);

//     useEffect(() => {
//         const getBook = async () => {
//             try {
//                 const res = await axios.get("http://localhost:4001/Book");
//                 console.log(res.data);
//                 setBook(res.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getBook();
//     }, []); // Empty dependency array ensures this effect runs only once

//     return (
//         <>
//             <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//                 <div className="mt-28 items-center justify-center text-center">
//                     <h1 className="text-2xl md:text-4xl">
//                         We are delighted to have you
//                         <span className="text-pink-500"> Here!!! :)</span>
//                     </h1>
//                     <p className="mt-12">
//                      "Your unused books can become someone else's treasure. Donate today".
                     
//                     </p>
//                     <p>
//                         "Books have the power to change lives. Share that power by donating your books".
//                     </p>
//                     <Link to="/">
//                         <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//                             Back
//                         </button>
//                     </Link>
//                 </div>
//                 <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
//                     {
//                         book.map((item) => (
//                             <Cards key={item.id} item={item} />
//                         ))
//                     }
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Course;




import React, { useEffect, useState } from 'react';
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
    console.log("Course component rendered"); 

    const [cards, setCards] = useState([]);

    useEffect(() => {
        // In a real app, you would fetch this data from your backend
        // For now, we'll use static data matching your image
        const mockCards = [
            {
                id: 1,
                title: "Build multi-step agents calling custom tools",
                description: "Create agentic systems on a single screen. Integrate any LLM into your workflows as fast as you can drag in drop.",
                sectionTitle: "Explore AI",
                checklistItems: [
                    { text: "Running Custom Unit Testing", checked: false },
                    { text: "Update Rolled Back Automatically", checked: false }
                ],
                secondarySectionTitle: "IT Team Notified of New Ticket",
                secondaryChecklistItems: [
                    { text: "Custom Unit Testing failed", checked: false },
                    { text: "Update Installed", checked: false }
                ]
            },
            {
                id: 2,
                title: "Self-host everything – including AI models",
                description: "Protect your data by deploying on prem.",
                checklistItems: [
                    { text: "Deploy with Docker", checked: true },
                    { text: "Access the entire source code on", checked: true }
                ]
            },
            {
                id: 3,
                title: "Chat with your own data",
                description: "Use Slack, Teams, SMS, voice, or our embedded chat interface to get accurate answers from your data, create tasks, and complete workflows.",
                content: [
                    "Who held meetings with Spacex last week?",
                    "On Wednesday, Joe updated the status to 'won' in Salesforce after a Zoom call.",
                    "On Thursday, Sue provided on-site setup and closed the ServiceNow ticket.",
                    "Create a task in Astra..."
                ]
            }
        ];
        
        setCards(mockCards);
        
        // In a real implementation, you would use something like this:
        /*
        const getCards = async () => {
            try {
                const res = await axios.get("http://localhost:4001/cards");
                setCards(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getCards();
        */
    }, []);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        We are delighted to have you 
                        <span className="text-pink-500"> Here!!! :)</span>
                    </h1>
                    <p className="mt-12 text-[24px]">
                        "Your unused books can become someone else's treasure. Donate today 
                        Books have the power to change lives. Share that power by donating your books"
                    </p>
                    
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Course;
