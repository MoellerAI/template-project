import React from "react";
import SignUpForm from "@/components/ui/signupForm";
import RootLayout from "@/app/layout";

const SignUpPage: React.FC = () => {
    return (
        <RootLayout>
            <div className="flex items-center justify-center h-screen w-full">
                <div className="w-full flex-grow">
                    <SignUpForm />
                </div>
            </div>
        </RootLayout>
    );
};

export default SignUpPage;
