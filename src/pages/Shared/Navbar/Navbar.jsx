import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('Home');


    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/#' },
        { label: 'Services', path: '/#' },
        { label: 'Contact', path: '/#' },
    ];

    const handleItemClick = (label) => {
        setActiveItem(label);
    };

    return (
        <div className="max-w-screen-2xl navbar fixed z-10 bg-black bg-opacity-70 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems.map((item) => (
                            <li key={item.label} className={activeItem === item.label ? 'bg-yellow-500' : ''}>
                                <Link onClick={() => handleItemClick(item.label)} to={item.path} >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center ms-auto hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item) => (
                        <li key={item.label} className={activeItem === item.label ? 'text-yellow-500' : ''}>
                            <Link to={item.path} onClick={() => handleItemClick(item.label)}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;