import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import './Navbar.css';

const Navbar = () => {
    const { user, logOut } = useContext(authContext);
    const navigate = useNavigate();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            });
    };

    return (
        <div className="max-w-screen-2xl navbar fixed z-10 bg-black bg-opacity-70 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        {/* Dropdown label content */}
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/ourMenu' >Our Menu</NavLink></li>
                        <li><NavLink to='/order' >Our Order</NavLink></li>
                        <li>
                            {user ? (
                                <button onClick={handleLogOut}>Log Out</button>
                            ) : (
                                <NavLink to='/login' >Login</NavLink>
                            )}
                        </li>
                        <li>
                            <NavLink to='/dashboard'>
                                <FaShoppingCart className="text-3xl relative" />
                                <p className="absolute top-0 right-0 text-red-600">+{cart?.length || 0}</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center ms-auto hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' >Home</NavLink></li>
                    <li><NavLink to='/ourMenu' >Our Menu</NavLink></li>
                    <li><NavLink to='/order' >Our Order</NavLink></li>
                    <li>
                        {user ? (
                            <button onClick={handleLogOut}>Log Out</button>
                        ) : (
                            <NavLink to='/login' >Login</NavLink>
                        )}
                    </li>
                    <li>
                        <NavLink to='/dashboard'>
                            <FaShoppingCart className="text-3xl relative" />
                            <p className="absolute top-0 right-0 text-red-600">+{cart?.length || 0}</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
