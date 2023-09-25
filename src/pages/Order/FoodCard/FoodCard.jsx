

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item

    return (
        <div className='bg-[#F3F3F3]  w-[424px]'>
            <div className='h-[300px]   relative'>
                <img className='w-full   h-[300px] object-center' src={image} alt="" />
                <p className="bg-black px-5 py-2 text-white absolute top-5 right-5">${price}</p>
            </div>
            <div className='text-center py-10 px-16 space-y-5'>
                <h1 className='text-2xl'>{name}</h1>
                <p className='text-[16px]'>{recipe}</p>
                <button className='btn btn-[#E8E8E8] btn-outline border-0 border-b-2 mb-10 shadow text-[#BB8506] hover:text-[#BB8506]'>add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;