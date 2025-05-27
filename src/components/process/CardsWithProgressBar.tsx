
import "../../assets/css/Timeline.css"; // Import our custom CSS file



// export default Timeline;
import React, { useEffect, useState, useRef } from "react";
//import "./Timeline.css"; // Import our custom CSS file

interface CardProps {
  title: string;
  content: string;
  isLeft: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, isLeft }) => {
  // Replace specific text patterns with strong tags for subheadings
  const formatContent = (text: string) => {
    // Split the content by newlines
    const lines = text.split("\n");

    return lines.map((line, index) => {
      // Check if line contains a colon (likely a subheading)
      if (line.includes(":")) {
        const [heading, rest] = line.split(":", 2);
        return (
          <React.Fragment key={index}>
            <strong>{heading}:</strong>
            {rest}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        );
      }
      return (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={`timeline-card ${isLeft ? "left-card" : "right-card"}`}>
      <h2 style={{color:"#c9f21d"}} className="card-title">{title}</h2>
      <p className="card-content">{formatContent(content)}</p>
    </div>
  );
};

interface CardItem {
  title: string;
  content: string;
  img: string;
}

interface TimelineProps {
  title?: string; // Optional title prop
  cards?: CardItem[]; // Optional cards prop
}

const Timeline: React.FC<TimelineProps> = ({
  title = "How We Help You Build a Profitable Dropshipping Business",
  cards = [
    {
      img: "/assets/img/icon/flag.svg",
      title: "Finding a Profitable Niche",
      content:
        "We help you identify high-ticket, and in-demand products with: \n\nStrong Search Volume: Products that customers are actively searching for.\nLow Competition: Keywords with low difficulty to rank for.\nLow CPC (Cost Per Click): Affordable advertising costs for better ROI.\nLong-Term Potential: Products that are here to stay, ensuring your business remains profitable for years to come.",
    },
    {
      img: "/assets/img/icon/telegram.svg",
      title: "Sourcing Reliable Suppliers",
      content:
        "We will help you find: \n\nFind Trusted Suppliers: Source products from the USA or other duty-free countries to avoid high tariffs.\nEnsure Quality Control: Work with suppliers who deliver consistent, high-quality products.\nMaximize Margins: Negotiate better pricing to boost your profits.  ",
    },
    {
      img: "/assets/img/icon/bulb.svg",
      title: "Setting Up a Professional Website",
      content:
        "Your website is the face of your business. We’ll help you: \n\nDesign a Sleek, User-Friendly Store: Create a professional online store that builds trust and converts visitors into customers.  \nOptimize for SEO: Ensure your site ranks high on search engines to attract organic traffic.  \nIntegrate Secure Payment Gateways: Offer seamless and secure checkout experiences.  ",
    },
    {
      img: "/assets/img/icon/thunder.svg",
      title: "Marketing Your Product with the Right Strategy",
      content:
        "We don’t just set up your store—we help you generate sales with proven marketing strategies: \n\nTargeted Advertising: Run effective ad campaigns on platforms like Facebook, Instagram, and Google.  \nSocial Media Marketing: Build a strong brand presence and engage with your audience.  \nEmail Marketing: Retain customers and drive repeat sales with personalized email campaigns.  ",
    },
  ],
}) => {
  
  const [progress, setProgress] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineEl = timelineRef.current;
      const rect = timelineEl.getBoundingClientRect();

      // Timeline's position relative to viewport
      const timelineTop = rect.top;
      const timelineBottom = rect.bottom;
      const timelineHeight = rect.height;
      const windowHeight = window.innerHeight;

      // If timeline is not yet in view
      if (timelineTop >= windowHeight) {
        setProgress(0);
        return;
      }

      // If timeline has completely passed the viewport
      if (timelineBottom <= 0) {
        setProgress(100);
        return;
      }

      // Calculate how far we've scrolled through the timeline
      // Start tracking when the top of the timeline reaches the bottom of the viewport
      // End tracking when the bottom of the timeline reaches the top of the viewport
      const totalDistance = timelineHeight + windowHeight;
      const scrolledDistance = windowHeight - timelineTop;

      // Clamp the progress value between 0 and 100
      const calculatedProgress = Math.max(
        0,
        Math.min(100, (scrolledDistance / totalDistance) * 100)
      );

      setProgress(calculatedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-container" ref={timelineRef}>
      <div className="timeline-inner">
        {title && <h1 className="timeline-heading">{title}</h1>}

        <div className="timeline">
          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div className="progress-bar-background">
              <div
                className="progress-bar-fill"
                style={{ height: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="timeline-items">
            {cards.map((card, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="timeline-item">
                  {/* Mobile layout: All cards on right side */}
                  {isMobile && (
                    <div className="timeline-item-mobile">
                      {/* Circle indicator */}
                      <div className="timeline-circle"></div>

                      {/* Card on right */}
                      <div className="timeline-card-container-mobile">
                        <Card
                        
                          title={card.title}
                          content={card.content}
                          isLeft={false}
                        />
                      </div>
                    </div>
                  )}

                  {/* Desktop layout: Alternating cards */}
                  {!isMobile && (
                    <div className="timeline-item-desktop">
                      {/* Left side content */}
                      <div className="timeline-left-content">
                        {isLeft && (
                          <Card
                            title={card.title}
                            content={card.content}
                            isLeft={true}
                          />
                        )}
                      </div>

                      {/* Circle indicator */}
                      <div className="timeline-circle">
                        {/* <img
                          className="circle-icon"
                          src={card.img}
                          alt="Thumb"
                        /> */}
                      </div>

                      {/* Right side content */}
                      <div className="timeline-right-content">
                        {!isLeft && (
                          <Card
                            title={card.title}
                            content={card.content}
                            isLeft={false}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
