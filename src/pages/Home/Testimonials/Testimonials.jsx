import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import { FaQuoteLeft } from 'react-icons/fa';
import '@smastrom/react-rating/style.css'
import SectionTitles from "../../../components/SectionTitles/SectionTitles";


const Testimonials = () => {
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {

                setreviews(data);
            })
    }, [])

    return (
        <div className="lg:max-w-[1320px] mx-auto py-20">
            <SectionTitles
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitles>
            <div className="text-center">

            </div>

            <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 3000 }} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide className=""
                        key={review._id}
                    >
                        <div className=" w-3/4 mx-auto text-center flex flex-col justify-center items-center">

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="text-8xl my-10"></FaQuoteLeft>
                            <p className="my-5">{review.details}</p>
                            <h3 className="text-3xl text-[#CD9003]">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Testimonials;