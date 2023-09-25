


const MenuBanner = ({ bgImg, title, details }) => {
    return (

        <div style={{ backgroundImage: `url("${bgImg}")` }} className="w-[1320px] h-[700px] mx-auto text-center mt-28 p-28 mb-[100px] text-white flex items-center">
            <div className="bg-[rgba(0,0,0,.70)] p-24  space-y-5">
                <h2 className="text-5xl">{title}</h2>
                <p className="text-[16px]">{details}</p>
            </div>
        </div>
    );
};

export default MenuBanner;