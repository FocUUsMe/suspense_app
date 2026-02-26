    'use client'
    
    import './navBar.css';
    import { useState } from 'react';
    import Link from 'next/link';
    import { Jersey_10 } from 'next/font/google';

    const jersey_10 = Jersey_10({
        subsets: ['latin'],
        weight: ['400']
    });
    
    const NavBar = () => {
        const [ navItems, setNavItems ] = useState([
            {
                id: 1,
                title: 'For you',
                link: '/'
            },
            {
                id: 2,
                title: 'Profile',
                link: '/profile'
            },
            {
                id: 3,
                title: 'Notifications',
                link: ''
            },
            {
                id: 4,
                title: 'Search',
                link: ''
            },
            {
                id: 5,
                title: 'Support',
                link: ''
            }
        ]);

        return (
            <nav className='nav_bar'>
                { navItems.map((item, index) => {
                    return  <Link key={item.id} href={item.link}> 
                             <div
                              className={jersey_10.className}>
                                 {item.title}
                             </div>
                            </Link>
                })}
            </nav>
        )
    }

    export default NavBar;