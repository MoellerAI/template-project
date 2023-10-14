import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    theme: "light",
    setTheme: (theme: string) => {}
});

export const useTheme = () => {
    return useContext(ThemeContext);
};

type ThemeProviderProps = {
    attribute: string;
    defaultTheme: string;
    enableSystem?: boolean;
    children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, attribute, defaultTheme, enableSystem }) => {
    const [theme, setTheme] = useState<string>(defaultTheme);

    useEffect(() => {
        let savedTheme = window.localStorage.getItem("theme") || defaultTheme;

        if (enableSystem && !savedTheme) {
            const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            savedTheme = isDarkMode ? "dark" : "light";
        }

        setTheme(savedTheme);
    }, [defaultTheme, enableSystem]);

    useEffect(() => {
        // Whenever theme changes, save it in local storage
        window.localStorage.setItem("theme", theme);

        // Apply theme to the desired attribute (class or data-theme in this case)
        if (attribute === "class") {
            document.body.className = theme;
        } else {
            document.body.setAttribute(attribute, theme);
        }
    }, [theme, attribute]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};