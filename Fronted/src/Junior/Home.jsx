import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Home = () => {
    const [navbarScroll, setNavbarScroll] = useState(false);
    const [textColor, setTextColor] = useState('text-red-500');
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-black'];
    const [changeMode, setchangeMode] = useState(false);
    const handlerMOde = () => {
        setchangeMode(!changeMode);
    }

    useEffect(() => {
        document.body.style.backgroundColor = changeMode ? "black" : "";
        document.body.style.color = changeMode ? "white" : "black"
    }, [changeMode])
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",

    });

    const showToast = () => {
        toast.success('Registration sucessfully ', {
            position: 'top-left',
            autoClose: 3000 // milisecond
        })
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Reset form fields
        setFormData({
            name: "",
            email: "",
            password: "",
            productName: "",
            contact: ""
        });

        showToast();
    };


    useEffect(() => {
        let index = 0;
        const changeColor = () => {
            setTextColor(colors[index]);
            index = (index + 1) % colors.length;
            setTimeout(changeColor, 500);
        };
        changeColor();
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavbarScroll(true);
        } else {
            setNavbarScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                style={{
                    backgroundColor: navbarScroll ? 'darkorange' : 'wheat',
                    transition: 'background-color 3s ease-in-out'
                }}
                className='transition-all  z-10 flex flex-wrap fixed w-full justify-center items-center gap-5 py-6 text-white'>
                <h2 className='font-bold text-black text-2xl'>
                    <div className='flex'>
                        <p className='text-4xl font-extrabold flex'>J</p>unior Junction

                    </div>
                </h2>
                <input
                    className='py-3 hidden rounded-xl md:block border-2 border-black text-black w-80'
                    placeholder='Location'
                    type="text"
                />
                <input
                    className='py-3 border-2 rounded-lg border-black text-black sm:w-32 md:w-40 lg:w-[80vh]'
                    placeholder='Find Books, Laptop, Current Affairs, Bicycle, ...'
                    type="text"
                />
                <div className="dropdown dropdown-bottom text-black">
                    <div tabIndex={0} role="button" className="font-bold">English ^</div>
                    <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>English</a></li>
                        <li><a>Hindi</a></li>
                    </ul>
                </div>
                <div className='text-xl'>💬</div>
                {changeMode ? <svg onClick={handlerMOde}
                    className="swap-on h-10 w-10 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                    : <svg onClick={handlerMOde}
                        className="swap-off h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>}


                <div>🔔</div>

                <Link to='/Sall'>
                    <button className="btn btn-outline btn-success w-[45vh] lg:w-[15vh] rounded-2x font-bold text-xl">
                        + SELL
                    </button>
                </Link>
            </nav>

            <div className='h-40'></div> <h3 className='text-3xl font-bold relative left-5'>
                Our Branch
            </h3>
            <div className='flex justify-center items-center z-10  '>
                <div className="carousel w-[125vh] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>   </div>

            <div className='flex justify-center items-center'>

            </div>

            <div className='flex justify-center items-center'>
                <button onClick={() => document.getElementById('my_modal_4').showModal()}>
                    {/* Items */}
                    <div className='flex justify-around gap-5 mt-14'>


                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={175} src="book1.jpg" alt="" /> <p className='font-bold '>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>This Book Recyclabe...</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={175} src="book1.jpg" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button> This Book Recyclabe...</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={175} src="book1.jpg" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>This Book Recyclabe...</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={175} src="book1.jpg" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>This Book Recyclabe...</p>  </div>
                    </div>


                    <div className={`text-3xl font-bold ${textColor} flex justify-center mt-5`}>
                        <h2>Neet Section</h2>
                    </div>
                    <div className='flex justify-around gap-5 mt-5'>


                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={130} src="neet1.jpg" alt="" /> <p className='font-bold '>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>This Book Neet...</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={155} src="neet 3.jpg" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button> This Book for Neet</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={155} src="neet 3.jpg" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>This Book Online...</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={250} src="book4.jpg" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>This Book Neet...</p>  </div>
                    </div>
                    <div className={`text-3xl font-bold ${textColor} flex justify-center mt-5`}>
                        <h2>Assigment Section</h2>
                    </div>

                    <div className='flex justify-around gap-5 mt-5'>


                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={250} src="https://plus.unsplash.com/premium_photo-1682430465413-4bdc7e6c1741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGVzfGVufDB8fDB8fHww" alt="" /> <p className='font-bold '>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>Assigment Query</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={320} src="https://media.istockphoto.com/id/669452232/photo/confined-space-hazard-assesment-form.webp?b=1&s=612x612&w=0&k=20&c=W51wJOs6FLMIwMKhAaKcybP4nJZYdgX_Qcf8eKcJr8A=" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button> What's Professor Ask</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={250} src="https://media.istockphoto.com/id/846255614/photo/corporate-decision-concept.webp?b=1&s=612x612&w=0&k=20&c=wJP3nCE9sDcDtjYSMOUrMTnjzOsPlqE3VVWCSC-8TLQ=" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>All Details</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={175} src="book1.jpg" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button></p>  </div>
                    </div>
                    <div className={`text-3xl font-bold ${textColor} flex justify-center mt-5`}>
                        <h2>Laptops</h2>
                    </div>
                    <div className='flex justify-center gap-5 mt-5'>


                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={305} src="https://plus.unsplash.com/premium_photo-1661663748661-49058ed13db1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Vjb25kJTIwaGFuZCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" /> <p className='font-bold '>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button></p> Laptop's Section </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={305} src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Vjb25kJTIwaGFuZCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>Senior Laptop's</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={175} src="https://plus.unsplash.com/premium_photo-1675538078410-2cec60aa046c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Vjb25kJTIwaGFuZCUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>Senior Laptop's</p>  </div>
                        <div className=' border-2 border-gray-200 h-60 w-64 items-center'> <img className=' mx-auto' width={360} src="https://media.istockphoto.com/id/2159119352/photo/laptop-computer-with-www-on-search-bar-over-blur-store-on-screen-with-copy-space-on-line.webp?b=1&s=612x612&w=0&k=20&c=2lymNozhKXl9n1UvJUaxqmua6rlH8csrH6wjKWnxBtQ=" alt="" /> <p className='font-bold ml-12 mx-auto items-center'>Physics Wallah</p> <p className='font-thin'> <button className=" mb-10 bg-blue-700 btn-primary w-20 h-9 rounded-2xl">Order !</button>Second Laptop's</p>  </div>
                    </div>
                </button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 h-[75vh] max-w-5xl">
                        <h2 className="text-2xl font-bold mb-4">Order Now</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Preparation</span>
                                </label>
                                <select className="select select-bordered w-full">
                                    <option disabled selected>Select Your Preparation</option>
                                    <option>IIT JEE</option>
                                    <option>NEET</option>
                                    <option>UPSC</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="modal-action justify-between">
                                <input className='btn btn-primary' type="submit" value="Register" />
                                <form method="dialog">
                                    <button className="btn btn-primary">Close</button>
                                </form>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>


            <div className='flex justify-center items-center'>
                <button onClick={() => document.getElementById('my_modal_4').showModal()}>

                </button>
            </div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover"><Link to="/about">About</Link></a>
    <a className="link link-hover"><Link to = "contact">Contact Us</Link></a>
    <a className="link link-hover"><Link to = ""></Link></a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>

        </>
    );
};

export default Home;















