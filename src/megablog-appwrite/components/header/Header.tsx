import React from 'react'
import './header.css';
import { Container, LogoutBtn } from '../index';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

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
        <header style={{ height: '80px', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
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