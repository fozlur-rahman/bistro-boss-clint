import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitles from '../../../components/SectionTitles/SectionTitles';

// img 
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
const Category = () => {
    return (
        <section>

            <SectionTitles
                subHeading={'From 11:00am To 10:00pm'}
                heading={'order online' }
            >
            </SectionTitles>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide><img className='w-[400px] relative' src={img1} alt="" />
                    <p className=' absolute bottom-10 left-[40%] text-white text-3xl'>Salad</p>
                </SwiperSlide>
                <SwiperSlide><img className='w-[400px]' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[400px]' src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[400px]' src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[400px]' src={img5} alt="" /></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;