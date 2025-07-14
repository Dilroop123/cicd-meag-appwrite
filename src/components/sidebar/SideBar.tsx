import { useContext, useState } from 'react';
import './sidebar.css';
import { ThemeContext } from '../../context/ThemeContextProvider';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Header must be used within a ThemeContextProvider');
    }
    const { updateTheme } = context;

    const toggleSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ? '➡️' : '⬅️'}
            </button>
            <h2 className="logo" style={{ fontSize: !isCollapsed ? '20px' : '10px' }}>Theme</h2>
            {!isCollapsed && <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ width: '100%', backgroundColor: 'white', border: '1px solid gray', padding: '3spx' }} onClick={() => updateTheme('light')}>Light</button>
                <button style={{ width: '100%', backgroundColor: 'white', border: '1px solid gray', padding: '3spx' }} onClick={() => updateTheme('dark')}>Dark</button>
            </div>}


        </div>
    );
};

export default Sidebar;
