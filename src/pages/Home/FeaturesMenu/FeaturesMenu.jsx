import featuresImg from '../../../assets/home/featured.jpg'
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
import './FeaturesMenu.css';

const FeaturesMenu = () => {
    return (
        <section className='featureMenu '>

            <div className='featureOverly pt-[70px] text-white font-light	'>
                <SectionTitles
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                ></SectionTitles>
                <div className='flex justify-center items-center px-[300px] pb-[130px]  gap-16 text-white'>
                    <div className='w-[50%]'>
                        <img className='z-0' src={featuresImg} alt="" />
                    </div>
                    <div className='w-[50%]'>
                        <h3 className='text-2xl'>March 20, 2023</h3>
                        <h3 className='text-2xl'>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-[#E8E8E8] btn-outline border-0 border-b-2 shadow text-[#BB8506] hover:text-[#BB8506] mt-10 '>add to cart</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FeaturesMenu;