import { createContext, useState } from 'react'

type ThemeContextValue = {
    theme: any,
    updateTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);


function ThemeContextProvider({ children }: any) {
    const [theme, setTheme] = useState('light');

    const updateTheme = (theme: string) => {
        setTheme(theme);
    }

    const contextValues = {
        theme,
        updateTheme
    }
    return (
        <ThemeContext.Provider value={contextValues}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider