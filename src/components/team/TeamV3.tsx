"use client";

import { Link } from "react-router-dom";
import SingleTeamV3 from './SingleTeamV3';
import SplitText from '../animation/SplitText';
import { useTeam } from '@/hooks/useTeam';
import Preloader from '../utilities/Preloader';

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
}

const TeamV3 = ({ hasTitle, sectionClass }: DataType) => {
    const { teamMembers, loading, error } = useTeam();

    if (loading) return <div className="text-center py-5"><Preloader /></div>;
    if (error) return <div className="text-center py-5 text-danger">{error}</div>;

    return (
        <>
            <div className={`team-style-three-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`}>

                {/* Team Title  */}
                {hasTitle &&
                    <div className="container">
                        <div className="site-heading">
                            <div className="row align-center">
                                <div className="col-lg-6">
                                    <h4 className="sub-title">Team member</h4>
                                    <h2 className="title split-text">
                                        <SplitText
                                            delay={120}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Meet our experts
                                        </SplitText>
                                    </h2>
                                </div>
                                <div className="col-lg-6 text-end">
                                    <Link to="/about-us" className="btn-circle">
                                        <div className="button-content">
                                            <span><img src="/assets/img/icon/arrow-long-right.png" alt="Image Not Found" /></span> <strong>All Members</strong>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container-full">
                    <div className="row">
                        {teamMembers.map(team =>
                            <div className="col-xl-3 col-md-6 mb-30" key={team._id}>
                                <SingleTeamV3 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV3;