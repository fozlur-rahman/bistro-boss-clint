import { FaWallet, FaHome, FaShoppingCart, FaCalendar, FaUtensils, FaBook, } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";



const Dashboard = () => {
    const [isAdmin] = useAdmin();
    // todo: admn role 



    // const isAdmin = true;


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-yellow-600 text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <p>admin</p> : <p>not an admin</p>
                    }
                    {
                        isAdmin ? <>
                            <li> <NavLink to='/dashboard/'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li> <NavLink to='/dashboard/addItem'> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                            {/* <li> <NavLink to='/dashboard/history'><FaWallet></FaWallet>History </NavLink></li> */}
                            <li>  <NavLink to='/dashboard/manageItems'><FaBook></FaBook> Manage Items</NavLink></li>
                            <li>  <NavLink to='/dashboard/mycart'><FaBook></FaBook> Manage Booking</NavLink></li>
                            <li>  <NavLink to='/dashboard/allusers'><FaBook></FaBook> All Users</NavLink></li>
                            <div className="divider"></div>
                            <li> <NavLink to='/dashboard/userhome'><FaHome></FaHome> Home</NavLink></li>
                            <li> <NavLink to='/dashboard/userhome'><FaHome></FaHome> Our Menu</NavLink></li>
                            <li> <NavLink to='/dashboard/userhome'><FaHome></FaHome> Order Food</NavLink></li>

                            <Link to='/'>back to home</Link>
                        </>
                            :
                            <>
                                <li> <NavLink to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink></li>
                                <li> <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                                <li> <NavLink to='/dashboard/payment-history'><FaWallet></FaWallet>Payment History </NavLink></li>
                                <li>  <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                                <div className="divider"></div>
                                <Link to='/'>back to home</Link>
                            </>
                    }

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;