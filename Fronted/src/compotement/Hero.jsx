import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div
  className="hero h-[90vh]"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-black">Junior Junction</h1>
      <p className="mb-5">
      "Junior Junction is a helpful website that has supported many students, especially those who can’t afford expensive things like books, bicycles, Copy,laptops and etc Education Related Items. Created by <b className='text-black'>Rohit Chauraiya</b> this platform connects students, making it easy for those with extra items to pass them on to others who need them. This way, Junior Junction has become a great resource, ensuring that all students have what they need to do well in their studies."
      </p>
      <p className='font-bold text-yellow-400 '>Visit Now!</p> <br />
      <div className='flex gap-8 justify-center'>
        <Link to="/junior-home"> <button className="btn btn-primary font-bold lg:w-96 sm:w-72">Visit Now !</button></Link>

        <Link to="/job"> <button className="btn btn-primary font-bold lg:w-96 sm:w-72">Meet Senior</button></Link>

      </div>
    
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
