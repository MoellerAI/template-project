import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, User } from "firebase/auth";

export const AuthContext = createContext<{ currentUser: User | null } | null>(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) return <div></div>;

    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

// Custom hook for easier access to auth context
export const useAuth = () => {
    return useContext(AuthContext);
};
