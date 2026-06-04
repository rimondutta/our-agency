"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import SplitText from '../animation/SplitText';
import SingleTeamV1 from './SingleTeamV1';
import { useTeam } from '@/hooks/useTeam';
import Preloader from '../utilities/Preloader';

interface DataType {
    sectionClass?: string;
    hasTitle?: boolean;
}

const TeamV1 = ({ sectionClass, hasTitle }: DataType) => {
    const { teamMembers, loading, error } = useTeam();

    if (loading) return <div className="text-center py-5"><Preloader /></div>;
    if (error) return <div className="text-center py-5 text-danger">{error}</div>;

    return (
        <>
            <div className={`team-style-one-area relative overflow-hidden default-padding-bottom ${sectionClass ? sectionClass : ""}`}>

                {/* Team Title  */}
                {hasTitle &&
                    <div className="team-style-one-heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                                    <div className="site-heading">
                                        <h4 className="sub-title">Team Members</h4>
                                        <h2 className="title split-text">
                                            <SplitText
                                                delay={40}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                                Turn Information Into Actionable Insights
                                            </SplitText>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="team-style-one-items">
                        <div className="row">
                            <div className="col-xl-12">
                                <Swiper className="team-style-one-carousel"
                                    loop={false}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    autoplay={false}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 30
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 40
                                        }
                                    }}
                                    modules={[Keyboard]}
                                >
                                    <div className="swiper-wrapper">
                                        {teamMembers.map(team =>
                                            <SwiperSlide key={team._id}>
                                                <SingleTeamV1 team={team} />
                                            </SwiperSlide>
                                        )}
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV1;