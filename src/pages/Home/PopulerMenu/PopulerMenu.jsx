import { useEffect, useState } from "react";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import MenuItem from "../../Shared/MemuItem/MenuItem";



const PopulerMenu = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const populerMenu = data.filter(item => item.category === "popular");
                setItems(populerMenu);
            })
    }, [])
    return (
        <section className="max-w-[1320px] mx-auto my-28">
            <SectionTitles
                subHeading={'Chef it out'}
                heading={'from our menu'}
            ></SectionTitles>
            {/* menu items  */}
            <div className=" lg:grid grid-cols-2 gap-6">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopulerMenu;