import '../MemuItem/MenuItem.css';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className="flex ">
            <div className="w-28 h-28 me-4">
                <img className="rounded-3shape w-28 h-24" src={image} alt="" />
            </div>
            <div className='space-y-3'>
                <h3 className="text-xl">{name}----------------------------------------</h3>
                <p className="text-sm">{recipe}</p>
            </div>
            <div className="ms-auto">
                <p className="text-[#BB8506]">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;