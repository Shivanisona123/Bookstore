import React from 'react'
import images from '../assets/Image.jpg'

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-16 px-3 flex flex-col md:flex-row">
        
        {/* LEFT */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-16">
          
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Welcome to Our Bookstore learn
              <span className="text-[#895129]"> something new ✧ </span>
            </h1>

            <p className="font-medium my-5">
              Discover a world of knowledge and imagination at our bookstore.
              Explore our vast collection of books, from timeless classics to
              contemporary bestsellers. Whether you're a passionate reader or
              just looking for your next great read, we have something for
              everyone. Dive into the pages and let your imagination soar!
            </p>
          </div>

          {/* INPUT */}
          <label className="input input-bordered flex items-center gap-2 w-full md:w-96">
            
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>

            <input
              type="email"
              placeholder="mail@site.com"
              required
              className="grow font-medium outline-none"
            />
          </label>
          <div>
            <button className="bg-[#895129] font-semibold btn  mt-6 px-6 text-white" >
              <a href="course">
                Book lover click here 👩🏼‍🏫

              </a>
                
        </button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center mt-10">
           <img src={images} alt="banner" className="w-full float-animation" />
           
                </div>
      </div>
    </>
  );
};

export default Banner;