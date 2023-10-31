import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '@/features/firebase/firebase';
import { useNavigate } from 'react-router-dom'; 

const SignUpForm = () => {
    const navigate = useNavigate(); 
    const initialFormData = {
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    };
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;

        setFormData(prevState => ({
            ...prevState,
            [name]: val
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            console.error("Passwords don't match!");
            return;
        }

        // Check if terms are accepted
        if (!formData.terms) {
            console.error("Please accept the terms and conditions.");
            return;
        }

        // Create user with Firebase
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                sendEmailVerification(userCredential.user)
                    .then(() => {
                        setConfirmationMessage("Verification email sent to " + formData.email + ". Please check your inbox.");
                        setLoading(false);
                        setTimeout(() => {
                            setConfirmationMessage("");
                            setFormData(initialFormData);
                            navigate('/login');
                        }, 5000); // Hide the message after 5 seconds
                    })
                    .catch((error) => {
                        setConfirmationMessage("Error sending verification email. Please try again.");
                        setLoading(false);
                    });
            })
            .catch((error) => {
                setConfirmationMessage("Error registering user: " + error.message);
                setLoading(false);
            });
    };



    return (
        <section className="dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="name@company.com" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="••••••••" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input 
                                    type="password" 
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="••••••••" 
                                    required 
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input 
                                        id="terms" 
                                        name="terms"
                                        type="checkbox" 
                                        checked={formData.terms}
                                        onChange={handleChange}
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                        required 
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                        I accept the <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>
                            {loading ? (
                                <div className="w-full flex justify-center">
                                    <div className="border-t-4 border-primary-600 rounded-full h-10 w-10 animate-spin"></div>
                                </div>
                            ) : confirmationMessage ? (
                                <div className="my-2 text-center text-primary-600">{confirmationMessage}</div>
                            ) : (
                                <button 
                                    type="submit" 
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Create an account
                                </button>
                            )}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;
