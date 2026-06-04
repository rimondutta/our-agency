// @ts-nocheck
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { getCaseStudyBySlug, CaseStudyData } from "../../data/caseStudyData";

const CaseStudySinglePage = () => {
  const params = useParams(); const slug = params?.slug as string | undefined;
  const [data, setData] = useState<CaseStudyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, you might fetch this from an API:
    // fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/getcasestudydetails/${slug}`)
    //   .then(res => res.json())
    //   .then(data => setData(data))
    
    // For now, we simulate an API call using the structured data we extracted
    setLoading(true);
    setTimeout(() => {
      if (slug) {
        const found = getCaseStudyBySlug(slug);
        if (found) {
          setData(found);
          setError(null);
        } else {
          setError("Case study not found");
        }
      }
      setLoading(false);
    }, 300); // Small delay to simulate network request
  }, [slug]);

  if (loading) {
    return (
      <LayoutV1>
        <div className="container py-5 text-center">
          <h2>Loading...</h2>
        </div>
      </LayoutV1>
    );
  }

  if (error || !data) {
    return (
      <LayoutV1>
        <div className="container py-5 text-center">
          <h2>{error || "Case study not found"}</h2>
          <Link to="/portfolio" className="btn btn-theme effect mt-4">Back to Portfolio</Link>
        </div>
      </LayoutV1>
    );
  }

  return (
    <>
      <Helmet>
        <title>Case Studies | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title="Case Studies" breadCrumb={data.breadcrumbTitle} />
        <div className={`project-details-items default-padding-bottom `}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="project-details-thumb">
                  <img src={data.images.hero} alt="Hero" />
                </div>
              </div>
              <div className="col-lg-10 offset-lg-1">
                <div className="project-details-main-info">
                  <div className="project-single-tags">
                    <Link to="#">{data.tag}</Link>
                  </div>
                  <div className="project-author-details mt-35">
                    <ul>
                      <li>
                        <div className="left-info">
                          <h3>Client</h3>
                        </div>
                        <div className="right-info">
                          <h3>{data.client}</h3>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Disciplines Used</h3>
                        </div>
                        <div className="right-info">
                          <p className="project-inner-tag">
                            {data.disciplines.split(", ").map((item, index) => (
                              <span key={index}>
                                {item}
                                <br />
                              </span>
                            ))}
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="left-info">
                          <h3>Project Details</h3>
                        </div>
                        <div className="right-info">
                          <p>{data.projectDetails}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <img src={data.images.mid} alt="Mid section" />
        </div>

        {/* 3rd Section */}
        <div className="project-details-items default-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="item-grid-container">
                  <div className="single-grid">
                    <div className="item-grid-colum">
                      <div className="left-info">
                        <h3>
                          <strong>01</strong> Background
                        </h3>
                      </div>
                      <div className="right-info">
                        <p>{data.background}</p>
                      </div>
                    </div>
                  </div>
                  <div className="single-grid">
                    <div className="item-grid-colum">
                      <div className="left-info">
                        <h3>
                          <strong>02</strong> The Challenges
                        </h3>
                      </div>
                      <div className="right-info">
                        <p>{data.challenges}</p>
                        <img src={data.images.challenge} alt="Challenges" />
                      </div>
                    </div>
                  </div>
                  <div className="single-grid">
                    <div className="item-grid-colum">
                      <div className="left-info">
                        <h3>
                          <strong>03</strong> The Solution
                        </h3>
                      </div>
                      <div className="right-info">
                        <p>{data.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default CaseStudySinglePage;
