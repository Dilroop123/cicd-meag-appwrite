import './header.css';
import { LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import { themeColor } from '../../utils/color';

function Header() {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Header must be used within a ThemeContextProvider');
    }
    const { theme } = context;


    const IsAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    //  const navigate = useNavigate();
    const navitems = [
        {
            name: 'HOME',
            url: '/',
            active: true
        },
        {
            name: 'LOGIN',
            url: '/login',
            active: !IsAuthenticated
        },
        {
            name: 'SIGNUP',
            url: '/signup',
            active: !IsAuthenticated
        },
        {
            name: 'ALL BLOGS',
            url: '/all-posts',
            active: IsAuthenticated
        },
        {
            name: 'ADD BLOG',
            url: '/add-post',
            active: IsAuthenticated
        }
    ];

    return (
        <header style={{ backgroundColor: themeColor[theme as keyof typeof themeColor].background, height: '80px', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
            <nav>
                <div>
                    <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
                        {
                            navitems?.filter((item) => {
                                return item.active == true;
                            })?.map((nav) => {
                                return (
                                    <Link key={nav.name} to={nav.url} style={{ textDecoration: 'none' }}>
                                        <li style={{ listStyle: 'none', color: 'gray' }}>

                                            {nav.name}</li>
                                    </Link>
                                )

                            })
                        }


                    </ul>

                </div>
            </nav>
            {IsAuthenticated &&
                <div style={{ marginRight: '20px' }}>
                    <LogoutBtn />
                </div>


            }
        </header>

    )
}

export default Header