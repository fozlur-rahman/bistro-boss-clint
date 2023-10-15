import { Helmet } from "react-helmet-async";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from '../../../hooks/useCart'
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart)
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitles subHeading={'your carted menu'} heading={'Your Cart here'}></SectionTitles>

            <div className="w-[80%] mx-auto shadow p-10">
                <div className="uppercase flex justify-between">
                    <h2 className="text-2xl">Total Order: {cart.length}</h2>
                    <h2 className="text-2xl">Total price: ${parseFloat(totalPrice.toFixed(2))}</h2>
                    <Link to='/dashboard/payment'><button className="btn btn-warning">pay</button></Link>
                </div>
                <div className="divider"></div>
                {/* table for cart items  */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>SL No</th>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* row 1 */}
                            {cart.map((item, index) => (
                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {index + 1}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <th className="text-end">
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs "><FaTrash className="text-xl"></FaTrash></button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
