import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Controller, FreeMode } from 'swiper/modules';

import SplitText from '../animation/SplitText'
import TestimonialV2Data from "../../../src/assets/jsonData/testimonial/TestimonialV2Data.json"
import SingleTestimonialV2 from './SingleTestimonialV2';
import { useState } from 'react';

interface DataType {
    sectionClass?: string
}

const TestimonialDevelopment = ({ sectionClass }: DataType) => {

    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <>
            <div className={`testimonial-style-two-area text-center default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                            <div className="site-heading">
                                <h4 className="sub-title">Testimonials</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={120}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        What People Say
                                    </SplitText>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="testimonials-quote">
                                <div className="icon">
                                    <img src="/assets/img/shape/3.png" alt="Image Not Found" />
                                </div>
                            </div>
                            <Swiper className="testimonial-style-two-carousel"
                                modules={[Navigation, Controller]}
                                initialSlide={2}
                                spaceBetween={10}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                loop={false}
                               
                                onSwiper={setMainSwiper}
                                controller={{ control: thumbsSwiper }}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV2Data.quoteData.slice(3,7).map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV2 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>

                            {/* testimonial-bullet */}
                            <Swiper className="testimonial-bullet"
                                spaceBetween={10}
                                slidesPerView={3}
                                touchRatio={0.2}
                                slideToClickedSlide={true}
                                loop={false}
                                initialSlide={2}
                                centeredSlides={true}
                                onSwiper={setThumbsSwiper}
                                controller={{ control: mainSwiper }}
                                modules={[Controller, FreeMode]}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV2Data.navigationData.slice(3,7).map(data =>
                                        <SwiperSlide className="swiper-slide" key={data.id}>
                                            <div className="swiper-bullet-item">
                                                <img src={data.thumb} alt="Image Not Found" width={200} height={200} />
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialDevelopment;