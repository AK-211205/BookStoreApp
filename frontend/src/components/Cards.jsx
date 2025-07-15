// import React from 'react'

// function Cards({item}) {
//     return (
//         <>
        
//             <div className="mt-4 my-3 p-3" >
//                 <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
//                     <figure>
//                         <img
//                             src={item.image}
//                             alt="Shoes" />
//                     </figure>
//                     <div className="card-body">
//                         <h2 className="card-title">
//                             {item.name}
//                             <div className="badge badge-secondary">{item.category}</div>
//                         </h2>
//                         <p>{item.title}</p>
//                         <div className="card-actions justify-between">
//                             <div className="badge badge-outline">${item.price}</div>
//                             <div className="cursor-pointer px-2 py-1 rounded-full boader-[2px] hover:bg-pink-500 hover:text-white  duration-200">Buy Now</div>
//                             <div className="cursor-pointer px-2 py-1 rounded-full boader-[2px] hover:bg-pink-500 hover:text-white  duration-200">Add</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default Cards



import React, { useRef } from 'react';

function Cards({ item }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const { left, top, width, height } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        
        card.style.setProperty('--mouse-x', x);
        card.style.setProperty('--mouse-y', y);
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="card relative p-6 rounded-lg shadow-md overflow-hidden group h-full flex flex-col transition-all duration-300"
            style={{
                '--mouse-x': 0.5,
                '--mouse-y': 0.5,
                '--card-bg': 'rgb(237, 233, 254)', // Light purple base
                '--spotlight-start': 'rgba(236, 72, 153, 0.6)', // Pink
                '--spotlight-end': 'rgba(234, 179, 8, 0.4)', // Yellow
                backgroundColor: 'var(--card-bg)',
            }}
        >
            {/* Gradient spotlight effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(
                        circle at calc(var(--mouse-x) * 100%) calc(var(--mouse-y) * 100%),
                        var(--spotlight-start),
                        var(--spotlight-end),
                        transparent 70%
                    )`,
                }}
            />
            
            {/* Card content */}
            <div className="relative z-10">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                {/* Checklist Sections */}
                {item.sectionTitle && (
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-gray-700">{item.sectionTitle}</h3>
                        <ul className="space-y-1">
                            {item.checklistItems?.map((checkItem, index) => (
                                <li key={index} className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        checked={checkItem.checked} 
                                        onChange={() => {}} 
                                        className="mr-2 checkbox checkbox-sm checkbox-primary border-gray-400"
                                    />
                                    <span className={checkItem.checked ? 'line-through text-gray-500' : 'text-gray-700'}>
                                        {checkItem.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {item.secondarySectionTitle && (
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2 text-gray-700">{item.secondarySectionTitle}</h3>
                        <ul className="space-y-1">
                            {item.secondaryChecklistItems?.map((checkItem, index) => (
                                <li key={index} className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        checked={checkItem.checked} 
                                        onChange={() => {}} 
                                        className="mr-2 checkbox checkbox-sm checkbox-primary border-gray-400"
                                    />
                                    <span className={checkItem.checked ? 'line-through text-gray-500' : 'text-gray-700'}>
                                        {checkItem.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {/* Content Section */}
                {item.content && (
                    <div className="space-y-2 mt-auto">
                        {item.content.map((text, index) => (
                            <p key={index} className="text-sm text-gray-700">
                                {text}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cards;