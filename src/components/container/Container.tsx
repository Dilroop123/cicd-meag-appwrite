import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContextProvider';
import { themeColor } from '../../utils/color';

function Container({ children }: { children: React.ReactNode }) {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Header must be used within a ThemeContextProvider');
    }
    const { theme } = context;
    return (
        <div style={{ backgroundColor: themeColor[theme as keyof typeof themeColor].background, margin: '15px 200px', boxSizing: 'border-box' }}>
            {children}

        </div>
    )
}

export default Container