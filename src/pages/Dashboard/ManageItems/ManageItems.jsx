import { Helmet } from "react-helmet-async";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import useMenu from "../../../hooks/useMenu";
import { FaTrash, FaUpload } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();


    const handleitemDlete = (item) => {


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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
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
                <title>Bistro Boss | Manage Items</title>
            </Helmet>
            <SectionTitles subHeading={'Manage Now'} heading={'Manage Items Now'}></SectionTitles>
            <div className="w-[80%] mx-auto shadow p-10">
                <div className="divider"></div>
                {/* table for cart items  */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL No</th>
                                <th>Item img</th>
                                <th>item anme</th>
                                <th>price</th>
                                <th className="">Action</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* row 1 */}
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {index + 1}
                                        </div>
                                    </td>
                                    <td>
                                        <img className="w-20" src={item.image} alt="" />
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>{


                                        <button onClick={() => handleMakeAdmin(item._id)} className="btn btn-ghost btn-xs "><FaUpload></FaUpload></button>

                                    }</td>
                                    <th className="text-end">
                                        <button onClick={() => handleitemDlete(item)} className="btn btn-ghost btn-xs "><FaTrash className="text-xl text-red-500"></FaTrash></button>
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

export default ManageItems;