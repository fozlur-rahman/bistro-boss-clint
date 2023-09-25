import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MemuItem/MenuItem";
import MenuBanner from "../../Shared/MenuBanner/MenuBanner";

const MenuCategory = ({ categoryItem, title, details, bgImg }) => {
    // Check if title is provided before converting it to lowercase
    const btnTitle = title ? title.toLowerCase() : "";

    return (
        <section className="lg:max-w-[1320px] mx-auto">
            {title && (
                <MenuBanner title={title} bgImg={bgImg} details={details}></MenuBanner>
            )}
            <div className=" lg:grid grid-cols-2 gap-6 ">
                {categoryItem.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <Link to={`/order/${btnTitle}`}>
                <button className="btn btn-outline border-0 border-b-2 mx-auto lg:w-[366px] flex mt-10">
                    ORDER YOUR FAVORITE FOOD
                </button>
            </Link>
        </section>
    );
};

export default MenuCategory;
