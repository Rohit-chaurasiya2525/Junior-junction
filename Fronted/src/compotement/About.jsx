import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
       <h3 className="font-extrabold text-4xl bg-slate-400 flex text-black"><p className="font-extrabold text-6xl">J</p>unior junction</h3>
   <div className=" flex  lg:items-center lg:justify-center  items-start mt-8">
    <Link to = "/"> <button className="btn btn-primary w-52 ">Back</button></Link>
   
   </div>
    <div className="bg-gray-100 min-h-[80vh] flex items-center   justify-center py-10 px-4">
  
      <div className="max-w-4xl bg-white shadow-md mb-24 rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              className="w-full h-64 object-bottom mt-5"
              src="https://plus.unsplash.com/premium_photo-1687989651321-9e13763964e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW4lMjBjYW1wdXMlMjBib3klMjBhbmQlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Campus Life"
            />

          </div>
          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              About Junior Junction
            </h2>
           
            <p className="text-gray-600 mb-4">
              Junior Junction is a platform designed to help final-year students
              pass on their bicycles, laptops, and other essentials to their
              juniors. Our mission is to make the transition smooth and ensure
              that these items find a good home, helping juniors in their
              academic journey.
            </p>
            <p className="text-gray-600">
              Whether you're looking to sell or buy, Junior Junction is the
              perfect place to connect with your peers and make the exchange
              easy and hassle-free. Join us today and be a part of a growing
              community!
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
