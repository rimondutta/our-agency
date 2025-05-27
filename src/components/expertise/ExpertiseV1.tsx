// import ProcessV1 from "../process/ProcessV1";

// const ExpertiseV1 = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="expertise-area text-center">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="site-heading">
//                 <h4 className="sub-title">Team Work</h4>
//                 <h2 className="title">Best Solutions Provider</h2>
//               </div>
//             </div>
//           </div>
//           <div>
//             Collaboration is at the heart of our success, allowing us to combine
//             our strengths and deliver exceptional results.Collaboration is at
//             the heart of our success, allowing us to combine our strengths and
//             deliver exceptional results.Collaboration is at the heart of our
//             success, allowing us to combine our strengths and deliver
//             exceptional results.Collaboration is at the heart of our success,
//             allowing us to combine our strengths and deliver exceptional
//             results.Collaboration is at the heart of our success, allowing us to
//             combine our strengths and deliver exceptional results.Collaboration
//             is at the heart of our success, allowing us to combine our strengths
//             and deliver exceptional results.
//           </div>
//           {/* <ProcessV1 /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ExpertiseV1;

import ProcessV1 from '../process/ProcessV1';

const ExpertiseV1 = () => {
    return (
        <>
            <div className="container">
                <div className="expertise-area text-center">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="site-heading">
                                <h4 className="sub-title">Our Approach </h4>
                                <h2 className="title">A Clear Path to Results
                                </h2>
                            </div>
                        </div>
                    </div>
                    <ProcessV1 />
                </div>
            </div>
        </>
    );
};

export default ExpertiseV1;