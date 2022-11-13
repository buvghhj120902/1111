import React, { useEffect, useRef } from 'react'
import './header.css'

import { motion } from 'framer-motion'
import { Container, Nav, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import userIcon from '../../assets/images/user-icon.png'

const nav_link = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => {

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        scrollTop >= 1 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    const menuRef = useRef(null)

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    return (
        <>

            <header className="header">

                <Container>

                    <Row>

                        <div className="nav_wrapper">

                            <div className="logo">
                                <i class="ri-tumblr-line"></i>
                                <div>
                                    <h1>tanmart</h1>
                                </div>
                            </div>

                            <div className="navigation" ref={menuRef} onClick={menuToggle}>

                                <ul className="menu">

                                    {nav_link.map((item, index) => (

                                        <li className="nav_item" key={index}>

                                            <NavLink to={item.path} style={{ textDecoration: 'none', color: '#34495e' }} className={(navClass) => navClass.isActive ? 'nav_active' : ''} >{item.display}
                                            </NavLink>

                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <div className="nav_icon">

                                <span className="fav_icon">
                                    <i class="ri-heart-line"></i>
                                    <span className="sss">1</span>
                                </span>

                                <span className="cart_icon">
                                    <i class="ri-briefcase-line"></i>
                                    <span className="sss">1</span>
                                </span>

                                <span>
                                    <motion.img whileTap={{ scale: 2 }} src={userIcon} alt="" />
                                </span>

                                <div className="mobile_menu">

                                    <span onClick={menuToggle} >
                                        <i class="ri-menu-line"></i>
                                    </span>

                                </div>


                            </div>


                        </div>

                    </Row>


                </Container>

            </header>

        </>
    )
}
export default Header
