import chef1 from '../../../assets/home/slide1.jpg';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';
// import chef2 from '../../../assets/home/slide2.jpg';
// import chef3 from '../../../assets/home/slide3.jpg';

const ChefRecommends = () => {
    return (
        <section className='mb-28 lg:max-w-[1320px] mx-auto'>
            <SectionTitles
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            >
            </SectionTitles>
            <div className='flex justify-between gap-10 '>
                <div className='bg-[#F3F3F3]'>
                    <div className=''>
                        <img className='w-full h-[300px] object-center' src={chef1} alt="" />
                    </div>
                    <div className='text-center py-10 px-16 space-y-5'>
                        <h1 className='text-2xl'>Caeser Salad</h1>
                        <p className='text-[16px]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='btn btn-[#E8E8E8] btn-outline border-0 border-b-2 shadow text-[#BB8506] hover:text-[#BB8506]'>add to cart</button>
                    </div>
                </div>
                <div className='bg-[#F3F3F3]'>
                    <div>
                        <img className='w-full h-[300px]' src={chef1} alt="" />
                    </div>
                    <div className='text-center py-10 px-16 space-y-5'>
                        <h1 className='text-2xl'>Caeser Salad</h1>
                        <p className='text-[16px]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='btn btn-[#E8E8E8] btn-outline border-0 border-b-2 shadow text-[#BB8506] hover:text-[#BB8506]'>add to cart</button>
                    </div>
                </div>
                <div className='bg-[#F3F3F3]'>
                    <div>
                        <img className='w-full h-[300px]' src={chef1} alt="" />
                    </div>
                    <div className='text-center py-10 px-16 space-y-5'>
                        <h1 className='text-2xl'>Caeser Salad</h1>
                        <p className='text-[16px]'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='btn btn-[#E8E8E8] btn-outline border-0 border-b-2 shadow text-[#BB8506] hover:text-[#BB8506]'>add to cart</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ChefRecommends;