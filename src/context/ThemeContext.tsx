import { ReactNode, createContext, useEffect, useState } from "react";


interface ThemeProviderProps {
    children: ReactNode;
  }
  
  export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
  });
  
  export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme || "light";
      });
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
          setTheme(storedTheme);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);


    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };