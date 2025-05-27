import { Link } from "react-router-dom";
import MostPopularServices from "./MostPopularServices.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import { useState } from "react";
import { toast } from "react-toastify";

interface DataType {
  title?: string;
  bannerImg?: string;
  img1?: string;
  img2?: string;
  whyChooseP1?: string;
  whyChooseP2?: string;
  faqs?: FAQ[];
  definition?: string;
  importance?: string[];
  importance_title?: string;
}

interface FAQ {
  q?: string;
  a?: string;
}
interface PricingPlan {
  id: number;
  title: string;
  description: string;
  features: string[];
  blockedFeatures: string[];
  priceOriginal: number | null;
  priceDiscounted: number;
  currency: string;
  billingCycle: string;
}
interface PricingDataType {
  serviceId?: string;
  monthlyPlans?: PricingPlan[];
  yearlyPlans?: PricingPlan[];
}

interface ServiceDetailsProps {
  serviceInfo?: DataType;
  sectionClass?: string;
  pricing?: PricingDataType;
}

type FormDataType = {
  socialMedia: string[];
  // ...other form fields
  name: string;
  email: string;
  phone: string;
  additional: string;
};

const InfluencerMarketingContent = ({
  serviceInfo,
  sectionClass,
}: ServiceDetailsProps) => {
  const {
    title,
    whyChooseP1,
    bannerImg,
    whyChooseP2,
    faqs,
    definition,
    importance,
    importance_title,
  } = serviceInfo || {};

  const cards = [
    {
      id: 1,
      title: "Strategic Influencer Selection",
      description:
        "We research and handpick influencers who align perfectly with your brand, audience, and objectives.",
      img: "/assets/img/services/IM/selection.png",
    },
    {
      id: 2,
      title: "Tailored Campaign Design",
      description:
        "We craft influencer campaigns that speak directly to your audience, ensuring maximum engagement and impact.",
      img: "/assets/img/services/IM/tailored campaign design.png",
    },

    {
      id: 3,
      title: "End-to-End Management",
      description:
        "From negotiating terms to overseeing content creation, we manage every detail to ensure seamless execution.",
      img: "/assets/img/services/IM/end to end.png",
    },
    {
      id: 4,
      title: "Creative Collaboration",
      description:
        "We work closely with influencers to create authentic, compelling content that resonates with their audience and drives results.",
      img: "/assets/img/services/IM/creative collab.png",
    },
    {
      id: 5,
      title: "Data-Driven Optimization",
      description:
        "We continuously track performance, refining strategies based on real-time data to improve results as the campaign progresses.",
      img: "/assets/img/services/IM/data driven.png",
    },
    {
      id: 6,
      title: "Impactful Reporting",
      description:
        "We provide detailed performance reports, offering insights into campaign success and actionable recommendations for future efforts.",
      img: "/assets/img/services/IM/reporting.png",
    },
  ];

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    socialMedia: [],
    additional: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "socialMedia") {
      // Prevent duplicates and add new selection
      if (!formData.socialMedia.includes(value) && value) {
        setFormData((prev: any) => ({
          ...prev,
          socialMedia: [...prev.socialMedia, value],
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleRemoveSocialMedia = (platform?: string) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: prev.socialMedia.filter((item) => item !== platform),
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/influencer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data?.success) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          socialMedia: [],
          additional: "",
        });
        toast.success("Form Saved Successfully");
      } else throw new Error(data?.message);
    } catch (err: any) {
      toast.warn(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`services-details-area ${sectionClass ? sectionClass : ""}`}
      >
        <div className="container">
          <div className="services-details-items">
            <div className="row">
              <div className="col-xl-12">
                <div className="service-single-thumb">
                  <img src={bannerImg} alt="Thumb" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <h2>{title}</h2>
                <p>{definition}</p>
              </div>
              <div className="col-lg-5 pl-60 pl-md-15 pl-xs-15">
                <p>{importance_title}</p>
                <h3>What We Offer:</h3>

                <ul className="feature-list-item">
                  {importance?.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div
              style={{
                paddingTop: "50px",
                paddingBottom: "50px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
              className=""
            >
              <button className="btn ">For Brand</button>
              <button className="btn ">For Influencer</button>
            </div>
            <div style={{ marginTop: "50px" }}>
              <h2>Types of Influencers :</h2>

              <div style={{ marginTop: "50px", width: "100%" }}>
                {[
                  {
                    id: 1,
                    title: "Nano Influencers",
                    description:
                      "Nano influencers typically have between 1k to 10k followers. Despite their smaller audience size, they often boast exceptionally high engagement rates and deeply loyal communities. Their recommendations feel more personal, making them ideal for hyper-targeted campaigns, local marketing, or niche-specific promotions. They are cost-effective, accessible, and more open to genuine brand collaborations.",
                    img: "/assets/img/services/IM/nano.png",
                  },
                  {
                    id: 2,
                    title: "Micro Influencers",
                    description:
                      "Micro influencers usually have between 10k to 100k followers. They offer a sweet spot between reach and authenticity. Their audiences are still niche enough to feel personal but large enough to make an impact. These influencers often specialize in specific interests or industries, making them valuable for brands that want to tap into relevant and engaged communities. Micro influencers drive strong engagement, trust, and conversions. ",
                    img: "/assets/img/services/IM/micro.png",
                  },
                  {
                    id: 3,
                    title: "Macro Influencers",
                    description:
                      "Macro influencers have between 100k to 1M  followers. They bring scale and visibility while still maintaining some level of audience connection. Most have built their following through consistent content creation, making them experienced and reliable partners. These influencers are ideal for brands aiming to increase awareness on a larger scale without losing all sense of relatability. Their content quality is usually high, and their audience spans diverse demographics. ",
                    img: "/assets/img/services/IM/macro.png",
                  },
                  {
                    id: 4,
                    title: "Mega Influencers",
                    description:
                      "Mega influencers are creators or celebrities with over 1 million followers. They offer massive reach and brand exposure, often across global audiences. These influencers are ideal for large-scale brand awareness campaigns and product launches. Their influence can instantly boost visibility, drive social buzz, and elevate your brand’s status. While they come with higher costs, the potential impact is significant.",
                    img: "/assets/img/services/IM/mega.png",
                  },
                ].map((item, index) => (
                  <div
                    key={item.id}
                    className={`w-100 d-flex flex-column flex-lg-row ${
                      index % 2 !== 0 ? "flex-lg-row-reverse" : ""
                    }  mb-5`}
                  >
                    {/* Image */}
                    <div className="w-100 w-lg-50 text-center p-2">
                      <img
                        src={item.img}
                        alt="Blog"
                        className="img-fluid"
                        style={{
                          maxWidth: "500px",
                          height: "500px",
                          width: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className="w-100 w-lg-50 p-4 text-center"
                    >
                      <h2 className="post-title">
                        <Link to={`/blog-single-with-sidebar`}>
                          {item.title}
                        </Link>
                      </h2>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "50px" }}>
              <h2 className="">Why Influencer Marketing Works?</h2>
              <div className="my-2">
                <h3 className="mb-1">Authentic Connections</h3>
                <p className="">
                  Influencers build relationships with their followers through
                  regular, relatable content. Because of this trust, their
                  product recommendations feel like advice from a friend rather
                  than a sales pitch. This authenticity leads to more meaningful
                  interactions and drives purchase decisions more effectively
                  than traditional advertising channels.
                </p>
              </div>
              <div className="my-2">
                <h3 className="mb-1">Targeted Reach</h3>
                <p>
                  Influencer marketing allows brands to connect with niche
                  audiences based on age, interests, location, and more. Instead
                  of casting a wide net, you can reach potential customers who
                  are genuinely interested in your product or service, making
                  every impression more valuable and significantly improving
                  conversion potential.
                </p>
              </div>
              <div className="my-2">
                <h3 className="mb-1">High Engagement Rates</h3>
                <p>
                  Influencer content typically garners more likes, shares,
                  comments, and saves compared to brand-generated posts. Their
                  ability to spark conversations and drive action helps boost
                  visibility and encourages users to interact, creating a ripple
                  effect of organic engagement that amplifies your brand
                  presence.
                </p>
              </div>
              <div className="my-2">
                <h3 className="mb-1">Cost-Effective ROI</h3>
                <p>
                  Influencer marketing is flexible and scalable. From micro to
                  macro influencers, brands can choose based on their goals and
                  budget. Many campaigns deliver impressive results at a
                  fraction of the cost of traditional media, offering better
                  returns, especially for targeted and smaller-scale efforts.
                </p>
              </div>
            </div>
            <div className="mt-50 mt-xs-20">
              <h1 style={{ marginBottom: "50px" }}>
                How Do We Make It Happen?
              </h1>
              <Swiper
                loop={true}
                centeredSlides={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                navigation={{
                  nextEl: ".dropshippingservice-next",
                  prevEl: ".dropshippingservice-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1000: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                  },
                }}
                modules={[Navigation, Keyboard, Autoplay]}
              >
                <div className="swiper-wrapper">
                  {cards.map((card) => (
                    <SwiperSlide key={card.id}>
                      <div
                        key={card.id}
                        style={{ minHeight: "650px", padding: "10px" }}
                      >
                        <div className="card h-100 border">
                          <div className="position-relative">
                            <img
                              src={
                                card?.img ? card.img : `/assets/img/blog/4.jpg`
                              }
                              className="card-img-top"
                              alt="Featured"
                              style={{ height: "460px", width: "100%" }}
                            />
                            <div
                              className="position-absolute bg-dark text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                              style={{
                                width: "40px",
                                height: "40px",
                                top: "12px",
                                left: "5px",
                                fontWeight: "bold",
                                border: "2px solid white",
                              }}
                            >
                              {card.id}
                            </div>
                          </div>
                          <div className="card-body">
                            <h4
                              style={{ color: "black" }}
                              className="card-title"
                            >
                              {card.title}
                            </h4>
                            <p
                              className="card-text text-muted"
                              style={{
                                overflow: "hidden",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>

              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  top: "110%",
                  left: "50%",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button className="dropshippingservice-prev left btn bg-white  border border-dark rounded-pill px-4 d-flex align-items-center">
                  <i className="fas fa-chevron-left me-2 text-dark"></i>
                </button>
                <button className="dropshippingservice-next bg-white right btn  border border-dark rounded-pill px-4 d-flex align-items-center">
                  <i className="fas fa-chevron-right ms-2 text-dark"></i>
                </button>
              </div>
            </div>
            <div
              style={{ marginTop: "50px" }}
              className={`w-100 d-flex flex-column flex-lg-row  mb-5`}
            >
              {/* Image */}
              <div className="w-100 w-lg-50 text-center p-2">
                <img
                  src="/assets/img/blog/why.png"
                  alt="Blog"
                  className="img-fluid"
                  style={{ maxWidth: "500px", height: "500px", width: "100%" }}
                />
              </div>
              {/* Text */}
              <div className="w-100 w-lg-50 p-4 ">
                <h2 className="post-title">
                  <Link to={`/blog-single-with-sidebar`}>What Choose Us? </Link>
                </h2>
                <p>{whyChooseP1}</p>
                <p>{whyChooseP2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <MostPopularServices />
          <div className="item">
            <div className="faq-style-one faq-style-two">
              <h2 className="mb-30">Frequently Asked Questions</h2>
              <div className="accordion" id="faqAccordion">
                {faqs?.map((item, idx) => {
                  return (
                    <div key={idx} className="accordion-item">
                      <h2 className="accordion-header" id={`heading${idx}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${idx}`}
                          aria-expanded="true"
                          aria-controls={`collapse${idx}`}
                        >
                          {item.q}
                        </button>
                      </h2>
                      <div
                        id={`collapse${idx}`}
                        className={`accordion-collapse collapse`}
                        //className="accordion-collapse collapse show"  //use this to keep the answers open
                        aria-labelledby={`heading${idx}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            style={{ paddingBottom: "20px", paddingTop: "40px" }}
            className="mt-5"
          >
            <div className="card shadow bg-dark text-white">
              <div
                style={{
                  maxWidth: "100%",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Left Side (Image) - Hidden on small screens, visible on medium and up */}
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                  }}
                  className="d-none d-lg-block"
                >
                  <img
                    src="/assets/img/services/contact_us.jpg"
                    alt="Business professional"
                    className="h-100 w-100 object-fit-cover"
                  />
                </div>

                {/* Right Side (Form Content) */}
                <div className="w-80 w-lg-60 p-4 p-md-5">
                  <h2 className="fw-bold mb-4 fs-3 fs-md-2 text-white">
                    HELP US UNDERSTAND YOUR NEEDS
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label text-white">Name</label>
                      <input
                        name="name"
                        placeholder="Enter Name"
                        className="form-control bg-dark text-white"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="form-control bg-dark text-white"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter Phone Number"
                        className="form-control bg-dark text-white"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-white">
                        Which social media platforms are you interested in?
                      </label>
                      <select
                        name="socialMedia"
                        className="form-select bg-dark text-white mb-3"
                        value=""
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select a platform
                        </option>
                        {[
                          "Instagram",
                          "TikTok",
                          "Facebook",
                          "Youtube",
                          "LinkedIn",
                        ].map((platform: string, idx) => (
                          <option
                            key={idx}
                            value={platform}
                            disabled={formData.socialMedia.includes(platform)}
                          >
                            {platform}
                          </option>
                        ))}
                      </select>
                      <div
                        className="gap-2"
                        style={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        {formData.socialMedia.map((platform) => (
                          <div
                            key={platform}
                            style={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              borderRadius: "16px",
                              padding: "6px 12px",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                              color: "white",
                              boxSizing: "border-box",
                              marginBottom: "5px",
                            }}
                          >
                            {platform}
                            <button
                              type="button"
                              onClick={() => handleRemoveSocialMedia(platform)}
                              style={{
                                marginLeft: "8px",
                                background: "none",
                                border: "none",
                                color: "white",
                                cursor: "pointer",
                                fontSize: "1rem",
                                lineHeight: "1",
                              }}
                              aria-label={`Remove ${platform}`}
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label text-white">
                        Additional Information
                      </label>
                      <textarea
                        name="additional"
                        placeholder="Enter any additional details"
                        className="form-control bg-dark text-white"
                        style={{ height: "120px" }}
                        value={formData.additional}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn mx-auto btn-outline-success fw-bold px-3 py-2"
                        style={{
                          color: "black",
                          borderColor: "white",
                        }}
                      >
                        {loading ? "Loading" : "Submit"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerMarketingContent;
