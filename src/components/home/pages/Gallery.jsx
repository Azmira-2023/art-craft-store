import React from 'react';

const Gallery = () => {
  return (
    <div className='mt-4 p-8 mb-8'>
      <h1 className='text-5xl text-black text-center'>
        #Craftopia
      </h1>
      <p className='text-center text-3xl mt-4 text-yellow-500'>
        Checkout Our Community's Photos
      </p>

      {/* Centering the grid container */}
      <div className="grid grid-cols-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 mx-auto ml-52">
        {/* Larger image that spans 2 columns */}
        <div className="relative col-span-1">
          <img
            src="https://media.istockphoto.com/id/495192239/photo/watermelon-carving.jpg?s=612x612&w=0&k=20&c=KdBKKk8BMWjP2ujicmdzpFIDUgKIvesQfERCNSLyKWQ="
            alt="Craft"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>
        
        {/* Smaller images */}
        <div className="relative">
          <img
            src="https://cdn.exoticindia.com/images/products/original/sculptures-2016/pab312.jpg"
            alt="Craft 3"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>
        
        <div className="relative">
          <img
            src="https://www.toonsmag.com/wp-content/uploads/2020/05/Learn-to-Draw-Cartoons.jpg"
            alt="Craft 4"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>
        
        <div className="relative col-span-2">
          <img
            src="https://i.pinimg.com/originals/f1/7e/1a/f17e1acce6b3c0f5e1de2ef1b5e17227.jpg"
            alt="Craft 5"
            className="w-80 h-96 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55RFQw9Jn7yKwyG66HNJz0hjK5NJ6DbShxA&s"
            alt="Craft 6"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="relative">
          <img
            src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1589488955/tie-dye_om5gi8"
            alt="Craft 7"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="relative">
          <img
            src="https://m.media-amazon.com/images/I/915gdc21OBL.jpg"
            alt="Craft 7"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="relative">
          <img
            src="https://m.media-amazon.com/images/I/51kKlWW7FRS._AC_UF894,1000_QL80_.jpg"
            alt="Craft 7"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="relative col-span-2">
          <img
            src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2012/12/thumb_720_450_824.jpg"
            alt="Craft 7"
            className="w-full h-96 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="relative">
          <img
            src="https://cdn.britannica.com/41/132941-050-4C82BFBF/jar-porcelain-underglaze-cobalt-blue-decoration-enamels.jpg"
            alt="Craft 7"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>

        <div className="relative">
          <img
            src="https://www.kroger.com/product/images/large/front/0066786528493"
            alt="Craft 7"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div>
{/*         
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQ_-OlUmetwNS-_HpXo-CcybTjY77BFjTaw&s"
            alt="Craft 7"
            className="w-full h-72 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
