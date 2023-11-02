import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/app/home/page";
import LoginPage from "./app/login/page";
import SignUpPage from "@/app/signup/page";
import AboutPage from "@/app/about/page";
import ContactPage from "./app/contact/page";
import { AuthProvider } from "./components/ui/authContext";
import "@/app/globals.css";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} index />
                    <Route path="/login" element={<LoginPage />} index />
                    <Route path="/signup" element={<SignUpPage />} index />
                    <Route path="/about" element={<AboutPage />} index />
                    <Route path="/contact" element={<ContactPage />} index />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
