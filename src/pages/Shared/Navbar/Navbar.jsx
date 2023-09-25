import { useContext } from "react";
import { Link, } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
    // const location = useLocation();

    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('logout complete')
            })
    }

    // Conditionally build the navItems array based on the user's authentication status
    // const navItems = [
    //     { label: "Home", path: "/" },
    //     { label: "Contact Us", path: "/contact" },
    //     { label: "Dashboard", path: "/dashboard" },
    //     { label: "Our Menu", path: "/ourMenu" },
    //     { label: "Our Order", path: "/order" },
    //     { label: "Sign Up", path: "/signup" },
    //     user ? <button onClick={handleLogOut}>Log Out</button>
    //         : { label: "Login", path: "/login" },

    // ];

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ourMenu'>Our Menu</Link></li>
        <li><Link to='/order'>Our Order</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
        {
            user ? <button onClick={handleLogOut}>Log Out</button>
                : <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="max-w-screen-2xl navbar fixed z-10 bg-black bg-opacity-70 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center ms-auto hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
