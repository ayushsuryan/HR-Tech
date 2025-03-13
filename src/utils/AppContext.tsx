import React, { createContext, useState, useEffect, ReactNode } from "react";
import { generateCssVariables } from "../theme/theme";

// Define the context interface
export interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the context with default values
const defaultContext: AppContextType = {
  darkMode: true,
  toggleDarkMode: () => {},
};

// Export the context
export const AppContext = createContext<AppContextType>(defaultContext);

// Define the provider props interface
interface AppContextProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply theme variables whenever darkMode changes
  useEffect(() => {
    try {
      const theme = darkMode ? "dark" : "light";
      const cssVars = generateCssVariables(theme);

      // Apply CSS variables to the document root
      Object.entries(cssVars).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
      });

      // Set the body class for Ionic to use the correct theme
      document.body.classList.toggle("dark", darkMode);
    } catch (error) {
      console.error("Error applying theme variables:", error);
    }
  }, [darkMode]);

  // Create the context value
  const value: AppContextType = {
    darkMode,
    toggleDarkMode,
  };

  // Return the provider with children
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}; 