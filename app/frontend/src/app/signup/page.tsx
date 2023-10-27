import React from 'react';
import SignUpForm from '@/components/ui/signupForm';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full flex-grow">
        <SignUpForm />
      </div>
    </div>
  );
};


export default SignUpPage;
