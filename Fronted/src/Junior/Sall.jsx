import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const SellForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        productName: "",
        contact: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const showToast = () => {
        toast.success('Order confirmed', {
            position: "top-right",
            autoClose: 3000  // 3 seconds auto close time
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

    return (
        <>
            <Link to="http://localhost:5173/junior-home">
                <div className="text-orange-500 font-extrabold text-3xl fixed ml-3   flex decoration-double underline">
                    <p className="text-5xl ">J</p>unior Junction
                </div>
            </Link>
            <div className="max-w-md mx-auto p-6 rounded-lg mb-12 shadow-md">
                <h2 className="text-2xl font-bold mt-4">Sell Your Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            value={formData.name}  // Bind the input with state
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
                            placeholder="Enter your email"
                            required
                            value={formData.email}  // Bind the input with state
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
                            required
                            placeholder="Enter your password"
                            value={formData.password}  // Bind the input with state
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="modal-action justify-between">
                        <input className='btn btn-primary' type="submit" value="Register" />
                    </div>
                </form>
            </div>
            <div className='flex justify-center mx-auto items-center w-[150vh]'>
                
            </div>
            
            <ToastContainer />
        </>
    );
};

export default SellForm;
