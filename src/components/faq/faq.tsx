const Faq = () => {
  const faqs = [
    {
      q: "What services do you offer as a digital marketing agency?",
      a: "We offer SEO, eCommerce marketing, social media, website development, dropshipping, and AI tool development for business growth. To know more about our services, check out our service pages.",
    },
    {
      q: "Do you provide a free website audit or consultation before starting a project?",
      a: "Yes, we provide a free website audit and consultation to help identify areas for improvement before we begin.",
    },
    {
      q: "Do you manage social media accounts and create content for them?",
      a: "Yes, we create content, manage accounts, and find influencers to grow your brand on platforms like Instagram, TikTok and Facebook.",
    },
    {
      q: "How do you run paid ad campaigns, and on which platforms?",
      a: "We manage targeted paid ad campaigns on Google and Meta (Facebook & Instagram) to help drive traffic and sales.",
    },
    {
      q: "What industries or types of businesses do you usually work with?",
      a: "We mainly work with eCommerce businesses and help them scale through strategic marketing and technology solutions.",
    },
    {
      q: "Do you offer branding services like logo design and brand identity?",
      a: "Yes, we offer complete branding services including logo design, color palettes, and brand identity development.",
    },
    {
      q: "How do you measure the success of your marketing campaigns?",
      a: "We track success using ROI, CPC, CTR, and other key metrics to show real results from your campaigns.",
    },
    {
      q: "Do you provide monthly performance reports or analytics?",
      a: "Yes, we send monthly performance reports with detailed analytics so you can see how your marketing is performing.",
    },
    {
      q: "Is there a minimum contract period for your services?",
      a: "We offer both monthly and yearly plans. To learn about the contract period or pricing of AI, website, or app projects, please fill out the form on our services page.",
    },
    {
      q: "Do you develop custom AI tools tailored to specific business needs?",
      a: "Yes, we build AI tools designed specifically for your business goals after understanding your exact requirements.",
    },
    {
      q: "Can your AI tools integrate with our existing website or CRM system?",
      a: "Yes, based on your requirements, we create AI tools that can be easily integrated with your website, CRM, or business software.",
    },
    {
      q: "Do you provide training or support for using the AI tools you build?",
      a: "Yes, we provide complete training and support to ensure you understand how to use the AI tool effectively before we hand it over.",
    },
    {
      q: " Can you build AI tools that help with content creation or SEO?",
      a: "Yes, we create AI tools for content creation and SEO. We also offer our own tool, ProBlogAI, for blog writing and SEO optimization. To learn more about it, contact us.",
    },
    {
      q: "How long does it take to develop a custom AI tool?",
      a: "The development time depends on your specific requirements and the complexity of the AI tool you need.",
    },
    {
      q: "What’s the process for starting an AI tool development project with your team?",
      a: "Please fill out the form in the AI services section of our website, and our team will contact you shortly to discuss your project.",
    },
  ];
  return (
    <>
      <div className={`container faq-area default-padding }`}>
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
      </div>
    </>
  );
};

export default Faq;
