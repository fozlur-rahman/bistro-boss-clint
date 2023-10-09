import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUserShield } from "react-icons/fa";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    })
    //  make admin 
    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire(
                        'Admin!',
                        'Your Updated to  Admin.',
                        'success'
                    )
                }

            })
    }
    // handle user delete 
    const handleUserDlete = (user) => {

        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount)
                    refetch();
                Swal.fire(
                    'Deleted!',
                    'Your  Deleted Successfully .',
                    'success'
                )


            })
    }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <SectionTitles subHeading={'All user here'} heading={'All Users'}></SectionTitles>
            <div className="w-[80%] mx-auto shadow p-10">
                <div className="divider"></div>
                {/* table for cart items  */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className="">Role</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {index + 1}
                                        </div>
                                    </td>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>{

                                        user?.role === 'admin' ? <span className="text-green-600 font-bold">Admin</span> :
                                            <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs "><FaUserShield className="text-xl text-orange-500"></FaUserShield> </button>

                                    }</td>
                                    <th className="text-end">
                                        <button onClick={() => handleUserDlete(user)} className="btn btn-ghost btn-xs "><FaTrash className="text-xl text-red-500"></FaTrash></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;