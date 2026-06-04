import { useEffect, useState } from "react";
import useUpDownScroll from "../../hooks/useUpDownScroll";
import SinglePortfolioV5 from "./SinglePortfolioV5";

import { CaseStudyData, getAllCaseStudies } from "../../data/caseStudyData";

interface DataType {
  hasShape?: boolean;
}

const PortfolioV5 = ({ hasShape }: DataType) => {
  useUpDownScroll(".upDownScrol");
  const [portfolioData, setPortfolioData] = useState<any[]>([]);

  useEffect(() => {
    // In a real application, you might fetch this from an API:
    // fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/getallcasestudies`)
    //   .then(res => res.json())
    //   .then(data => setPortfolioData(data))
    
    // For now, we simulate an API call using the structured data we extracted
    const data = getAllCaseStudies();
    // Transform to match the shape expected by SinglePortfolioV5
    const formattedData = data.map(cs => ({
      id: cs.slug,
      thumb: cs.images.hero,
      title: cs.breadcrumbTitle,
      tag: cs.tag
    }));
    setPortfolioData(formattedData);
  }, []);

  return (
    <>
      <div className="portfolio-style-five-area default-padding bg-gray">
        {/* Moving Shape */}
        {hasShape ? (
          <div className="upDownScrol">
            <img src="/assets/img/shape/2.png" alt="Image Not Found" />
          </div>
        ) : (
          <></>
        )}

        <div className="container">
          <div className="portfolio-style-five-items title-animation">
            <div className="title-fixed text-center">
              <h2>Work</h2>
            </div>
            <div className="portfolio-style-five-items">
              <div className="row gutter-xl">
                {portfolioData.map((portfolio, index) => {
                  // We can create a dynamic grid layout similar to the original by alternating column spans or wrappers
                  // But for simplicity and to handle any number of items from the API:
                  return (
                    <div
                      className="col-lg-6 portfolio-style-five-item"
                      key={portfolio.id || index}
                    >
                      <SinglePortfolioV5 portfolio={portfolio} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioV5;
