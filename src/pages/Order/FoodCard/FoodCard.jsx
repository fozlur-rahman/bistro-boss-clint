import { useContext } from "react";
import Swal from 'sweetalert2'
import { authContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(authContext);
    const [, refetch] = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        console.log(item._id)
        if (user && user.email) {
            const orderedItem = { menuItemId: _id, name, price, image, email: user?.email };
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderedItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch();      // update the add to cart items
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Inserted successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be Login!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Login Now!',
                        'Your file has been Login.',
                        'success'
                    )
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className='bg-[#F3F3F3]  w-[424px]'>
            <div className='h-[300px]   relative'>
                <img className='w-full   h-[300px] object-center' src={image} alt="" />
                <p className="bg-black px-5 py-2 text-white absolute top-5 right-5">${price}</p>
            </div>
            <div className='text-center py-10 px-16 space-y-5'>
                <h1 className='text-2xl'>{name}</h1>
                <p className='text-[16px]'>{recipe}</p>
                <button onClick={() => handleAddToCart(item)} className='btn btn-[#E8E8E8] btn-outline border-0 border-b-2 mb-10 shadow text-[#BB8506] hover:text-[#BB8506]'>add to cart</button>
            </div>
        </div >
    );
};

export default FoodCard;