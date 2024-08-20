import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {
    // State to manage form input values and validation errors
    const [form, setForm] = useState({
        first_name: '',
        user_email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // New state for loading

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    // Validate form inputs
    const validate = () => {
        const errors = {};
        if (!form.first_name.trim()) errors.first_name = 'This field is required';
        if (!form.user_email.trim()) errors.user_email = 'This field is required';
        else if (!/\S+@\S+\.\S+/.test(form.user_email)) errors.user_email = 'Email ID is invalid';
        if (!form.subject.trim()) errors.subject = 'This field is required';
        if (!form.message.trim()) errors.message = 'This field is required';
        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true); // Set loading to true when submission starts

        emailjs.sendForm('service_3br6m6e', 'template_1irlutk', e.target, 'NtaEhUvivz0pmr0HH')
            .then((result) => {
                toast.success('Response Was Sent SuccessFully', {
                    position: "top-right",
                    autoClose: 2999,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                   
                    });
                // Reset the form after successful submission
                setForm({
                    first_name: '',
                    user_email: '',
                    subject: '',
                    message: '',
                });
                setErrors({});
                setLoading(false); // Set loading to false when submission completes
            }, (error) => {
                toast.error('🦄 Wow so easy!', {
                    position: "top-right",
                    autoClose: 2999,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                   
                    });
                setLoading(false); // Set loading to false when there's an error
            });
    };

    return (
        <>
            <div className="flex justify-center items-center  p-6 bg-transparent ">
                <form   id="contact-form" onSubmit={handleSubmit} className="shadow-[0px_0px_16px_2px_#2c5282] bg-black bg-opacity-20 backdrop-blur-sm p-10 rounded-xl w-full max-w-lg space-y-6">
                    <div className='font-bold text-3xl text-white mb-4'>
                        <h1>Lets Connect 📫</h1>
                    </div>
                    <input type="hidden" name="contact_number" value="697483" />
                    
                    <div className="mb-4">
                        <input
                            type="text"
                            name="first_name"
                            value={form.first_name}
                            onChange={handleChange}
                            placeholder="Enter Name..."
                            className={`bg-black bg-opacity-30 backdrop-blur-sm text-white shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.first_name ? 'border-red-500' : ''}`}
                            id="first_name"
                        />
                        <div className={`min-h-[22px] ${errors.first_name ? 'text-red-500' : 'text-transparent'}`}>
                            {errors.first_name}
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <input
                            type="email"
                            name="user_email"
                            value={form.user_email}
                            onChange={handleChange}
                            placeholder="Email ID"
                            className={`bg-black bg-opacity-30 backdrop-blur-sm text-white shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.user_email ? 'border-red-500' : ''}`}
                            id="user_email"
                        />
                        <div className={`min-h-[22px] ${errors.user_email ? 'text-red-500' : 'text-transparent'}`}>
                            {errors.user_email}
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className={`bg-black bg-opacity-30 backdrop-blur-sm text-white shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? 'border-red-500' : ''}`}
                            id="subject"
                        />
                        <div className={`min-h-[22px] ${errors.subject ? 'text-red-500' : 'text-transparent'}`}>
                            {errors.subject}
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className={`bg-black bg-opacity-30 backdrop-blur-sm text-white shadow appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.message ? 'border-red-500' : ''}`}
                            id="message"
                            rows="4"
                        ></textarea>
                        <div className={`min-h-[22px] ${errors.message ? 'text-red-500' : 'text-transparent'}`}>
                            {errors.message}
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        className={`w-full h-[40px] py-2 px-4  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'bg-gray-600' : 'bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600'} text-white font-bold flex items-center justify-center`}
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? (
                            <div className="loader"></div>
                        ) : (
                            'Send'
                        )}
                    </button>
                </form>
            </div>
            <ToastContainer />
          
        </>
    );
};

export default Contact;
