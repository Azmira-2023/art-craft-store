import React from 'react';

const Gallery = () => {
  return (
    <div className='mt-4 p-8 mb-8'>
      <h1 className='text-5xl text-black text-center'>
        #Craftopia
      </h1>
      <p className='text-center text-2xl mt-4'>
        Checkout Our Community's Photos
      </p>

      <div className="grid grid-cols-6 gap-2 mt-8 ">
       
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3q98zzKUy2pwzg1_PyqbEW8bvb9P-W4oQqQ&s"
          alt="Craft"
          className="w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://cdn.exoticindia.com/images/products/original/sculptures-2016/pab312.jpg"
          alt="Craft 3"
          className="w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt9Krc0obmU9sQ_QZglSdudWlWPbwT-JZIepvyFJQ5IbCZ-ndXx2Sv2wXtX-kz1784szs&usqp=CAU"
          alt="Craft 4"
          className="w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://i.pinimg.com/originals/f1/7e/1a/f17e1acce6b3c0f5e1de2ef1b5e17227.jpg"
          alt="Craft 5"
          className="w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55RFQw9Jn7yKwyG66HNJz0hjK5NJ6DbShxA&s"
          alt="Craft 6"
          className="w-full h-auto object-cover mx-auto"
        />
        <img
          src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1589488955/tie-dye_om5gi8"
          alt="Craft 7"
          className="w-full h-auto object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default Gallery;
