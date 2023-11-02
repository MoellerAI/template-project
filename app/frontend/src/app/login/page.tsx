import React from "react";
import LoginForm from "@/components/ui/loginForm";
import RootLayout from "@/app/layout";

const LoginPage: React.FC = () => {
    return (
        <RootLayout>
            <div className="flex items-center justify-center h-screen w-full">
                <div className="w-full flex-grow">
                    <LoginForm />
                </div>
            </div>
        </RootLayout>
    );
};

export default LoginPage;
