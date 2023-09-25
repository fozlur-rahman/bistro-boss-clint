import FoodCard from "../FoodCard/FoodCard";


const OrderCard = ({ items }) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderCard;