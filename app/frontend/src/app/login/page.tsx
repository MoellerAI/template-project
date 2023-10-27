import React from 'react';
import LoginForm from '@/components/ui/loginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full flex-grow">
        <LoginForm />
      </div>
    </div>
  );
};


export default LoginPage;
