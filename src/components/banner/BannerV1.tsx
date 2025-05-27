import illustration5 from '/assets/img/illustration/5.png';
import illustration8 from '/assets/img/illustration/8.png';
import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx"
import Animate from '../animation/Animate.js';

interface DataType {
    lightMode?: boolean;
}

const BannerV1 = ({ lightMode }: DataType) => {
    return (
        <>
            <div className="banner-style-one-area bg-cover"
                style={{ backgroundImage: `url(${lightMode ? "/assets/img/shape/8.jpg" : "/assets/img/shape/3.jpg"})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="banner-style-one-heading">
                                <div className="banner-title">
                                    <h2 className="title-left split-text">
                                        <SplitText
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Designing
                                        </SplitText>
                                    </h2>

                                    <h2 className="title-right split-text">
                                        <SplitText
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Creative
                                        </SplitText>
                                    </h2>
                                </div>
                                <Animate className='animate__animated animate__fadeInRight'>
                                    <div className="thumb">
                                        {lightMode ?
                                            <img src={illustration8} alt="Image Not Found" /> :
                                            <img src={illustration5} alt="Image Not Found" />
                                        }
                                    </div>
                                </Animate>
                            </div>
                        </div>
                        <div className="col-xl-4 offset-xl-1">
                            <Animate className='animate__animated animate__fadeInUp' delay="1s" duration="0.6s">
                                <div className="banner-style-one-info">
                                    <div className="top-info">
                                        <h4>Based On Bangladesh</h4>
                                        <p>
                                           Kotowali, Chattogram, Bangladesh.
                                        </p>
                                    </div>
                                    <div className="bottom">
                                        <p>
                                            Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic.
                                        </p>
                                        <Link to="/project" className="btn-style-two mt-30"><i className="fas fa-long-arrow-right" /> Our <br /> Projects</Link>
                                    </div>
                                </div>
                            </Animate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;