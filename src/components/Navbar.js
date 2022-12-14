import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Rent</Link></li>
        <li><Link to='/'>Buy</Link></li>
        <li><Link to='/'>Sell</Link></li>
        <li tabIndex={0}>
            <Link>
                Manage Properties
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2">
                <li><Link to='/'>Submenu 1</Link></li>
                <li><Link to='/'>Submenu 2</Link></li>
            </ul>
        </li>
        <li><Link to='/'>Resources</Link></li>
    </>
    return (
        <div className='bg-base-100 sticky top-0 z-10 shadow-lg'>
            <div className="navbar max-w-[1280px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Estatery</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn btn-primary btn-sm mr-3 normal-case rounded">Login</Link>
                    <Link to='/login' className="btn btn-primary btn-outline btn-sm normal-case rounded">Sign Up</Link>
                </div>
            </div>
        </div>

    )
}

export default Navbar