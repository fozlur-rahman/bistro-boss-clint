import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2';



const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const image_upload_key = import.meta.env.VITE_Image_Upload_Key;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_upload_key}`


    // console.log(image_upload_key);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const image_url = imageResponse.data.display_url

                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: image_url };

                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log(data.data)
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset();
                            }
                        })
                }
            })
    }
    // console.log(errors)
    // const handleAddItem = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const category = form.category.value;
    //     const price = form.price.value;
    //     const details = form.details.value;
    //     const image = form.image.value;
    //     console.log(name, category, price, details, image)
    // }
    return (
        <div>
            <SectionTitles subHeading={'Add new'} heading={'add item'}></SectionTitles>


            <div className="w-2/3 mx-auto shadow  p-10">

                <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto space-y-4" action="">
                    <div className="flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                            {...register("name", { required: true, maxLength: 120 })}
                            className="border rounded-lg  p-3" type="text" placeholder="Enter item name" />
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name">Category</label>
                            <select
                                {...register("category", { required: true })}
                                id="category" className="select select-bordered w-full max-w-xs">
                                <option value="" disabled>Who shot first?</option>
                                <option value="dessert">Dessert</option>
                                <option value="soup">Soup</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="name">Price</label>
                            <input
                                {...register("price", { required: true, maxLength: 120 })}
                                id="price" className="border rounded-lg  p-3" type="number" placeholder="Enter item image" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Details</label>
                        <textarea
                            {...register("recipe", { required: true, maxLength: 120 })}
                            id="details" className="textarea textarea-bordered" rows='4' placeholder="text here"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Image</label>
                        <input
                            {...register("image", { required: true, maxLength: 120 })}
                            id="image" className="border rounded-lg  p-3" type="file" placeholder="Enter item image" />
                    </div>
                    <button className="btn capitalize">add items</button>

                </form>
            </div>

        </div>
    );
};

export default AddItem;