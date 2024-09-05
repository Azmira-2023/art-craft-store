import React from 'react';
import clay from "../../../assets/images/cards/clay.jpg";
import jute from "../../../assets/images/cards/jute.jpg";
import painting from "../../../assets/images/cards/painting.png";
import stainedglass from "../../../assets/images/cards/stainedglass.jpg";
import TextileArts from "../../../assets/images/cards/TextileArts.jpg";
import sculpture from "../../../assets/images/cards/sculpture.jpg"
import {Link} from "react-router-dom"


const crafts = [
  {
    id: 1,
    name: "Clay Sculpture",
    image: clay ,
    description: "Handcrafted clay sculptures with intricate designs.",
  },
  {
    id: 2,
    name: "Jute Craft",
    image: jute,
    description: "Eco-friendly jute crafts including bags and decorations.",
  },
  {
    id: 3,
    name: "Painting and Drawing",
    image: painting,
    description: "Stunning paintings and drawings using various mediums.",
  },
  {
    id: 4,
    name: "Stained Glass Art",
    image: stainedglass,
    description: "Colorful stained glass for windows and art pieces.",
  },
  {
    id: 5,
    name: "Textile Arts",
    image: TextileArts,
    description: "Beautiful textile crafts featuring embroidery and weaving.",
  },
  {
    id: 6,
    name: "Ceramics and Pottery",
    image:sculpture,
    description: "Unique ceramic pottery with intricate designs.",
  },
];

const Card = () => {
  return (
    <div className="mt-20 container mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Explore Our Arts and Crafts Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crafts.map((craft) => (
          <div key={craft.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 transform transition duration-500 hover:scale-105">
            <img src={craft.image} alt={craft.name} className="w-full h-60 object-cover" />
            <h2 className="text-xl font-bold mb-2 text-center mt-2">{craft.name}</h2>
            <p className="text-black mb-4 text-center">{craft.description}</p>
           <div className= "text-center">
           <Link>
            <button className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 mt-1 mb-4">
              View Details
            </button>
            </Link>
           </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
