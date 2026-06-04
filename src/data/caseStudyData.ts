export interface CaseStudyData {
  slug: string;
  breadcrumbTitle: string;
  tag: string;
  client: string;
  disciplines: string;
  projectDetails: string;
  images: {
    hero: string;
    mid: string;
    challenge: string;
  };
  background: string;
  challenges: string;
  solution: string;
}

const caseStudyData: CaseStudyData[] = [
  {
    slug: "gourmetkitchenworks",
    breadcrumbTitle: "Gourmet Kitchen Works",
    tag: "Marketing",
    client: "Gourmet Kitchenworks",
    disciplines: "UI/UX, Technical Optimization, Google Ads",
    projectDetails: "We helped Gourmet Kitchenworks expand their digital footprint and improve conversion outcomes",
    images: {
      hero: "/assets/img/portfolio/gk1.jpg",
      mid: "/assets/img/portfolio/gk2.jpg",
      challenge: "/assets/img/portfolio/gk3.jpg",
    },
    background: "Gourmet Kitchenworks is the exclusive U.S. distributor for five premium European kitchenware brands. Initially operating at a modest scale, the brand aimed to scale its reach across the country through a stronger online presence. In May 2024, they partnered with us to enhance their website experience and drive traffic through strategic marketing efforts. Despite the initial launch, they faced a dry spell with no sales in the first two months, leading us to revisit our approach and dig deeper into technical and consumer behavior insights.",
    challenges: "Although the redesigned website launched successfully, the first two months showed zero sales. The bounce rate was high, and users seemed lost navigating the catalog. Pricing inconsistencies and lack of product segmentation further created confusion. Despite active ad campaigns, conversions remained stagnant. The core challenge was creating an intuitive shopping experience that reflected the premium quality of the products while also addressing pricing and categorization issues.",
    solution: "We revisited the customer journey and redesigned the product structure with clear categorization, creating easier paths to purchase. A detailed price analysis helped align offerings with customer expectations. We optimized the UI further for mobile responsiveness and clarity. Our Google Ads strategy was refined to better target high-intent keywords. These changes enhanced discoverability, improved time-on-site, and drove meaningful conversions.",
  },
  {
    slug: "alamocitypopcorn",
    breadcrumbTitle: "Alamo City Popcorn Company",
    tag: "Marketing",
    client: "Alamo City Popcorn Company",
    disciplines: "Search Engine Optimization, Content Optimization, Google Ads",
    projectDetails: "We focused on enhancing Alamo City Popcorn's online visibility, boosting organic traffic, and improving the website's ranking on SERPs to increase online sales.",
    images: {
      hero: "/assets/img/portfolio/ac1.jpg",
      mid: "/assets/img/portfolio/ac2.jpg",
      challenge: "/assets/img/portfolio/ac3.jpg",
    },
    background: "Alamo City Popcorn is a family-owned gourmet popcorn business based in San Antonio, Texas, offering a wide range of popcorn flavors and products. Despite its local success, it faced challenges in reaching a wider online audience and increasing its visibility on search engine result pages. Initially, the website had only 34 keywords ranking on page 1.",
    challenges: "The main challenge for Alamo City Popcorn was limited keyword visibility on search engines. With only 34 keywords ranking on page 1, the website lacked organic traffic, and its online sales were not reaching their full potential. Additionally, the site needed a better SEO strategy to improve its SERP ranking and attract a broader customer base.",
    solution: "We optimized the website's content and conducted thorough SEO improvements to enhance keyword rankings. By focusing on long-tail and highly relevant keywords, we increased the number of keywords ranking on page 1 from 34 to 484. Our efforts also included monitoring total clicks, impressions, CTR, and average position. As a result, Alamo City Popcorn saw significant improvements in online visibility and engagement, leading to a growth in organic traffic and sales.",
  },
  {
    slug: "rehisk",
    breadcrumbTitle: "Rehisk",
    tag: "Marketing",
    client: "Rehisk Technology Co., Ltd.",
    disciplines: "UI/UX, Search Engine Optimization, Google Ads",
    projectDetails: "We helped Rehisk Technology improve its online presence, strengthen domain authority, and boost its visibility in a competitive tech niche.",
    images: {
      hero: "/assets/img/portfolio/rehisk1.jpg",
      mid: "/assets/img/portfolio/rehisk2.jpg",
      challenge: "/assets/img/portfolio/rehisk3.jpg",
    },
    background: "Rehisk Technology is a multinational firm based in Shenzhen, China, operating in the competitive software and technology sector. Despite launching its website recently, it faced challenges in standing out among competitors. With a fresh domain active for just a month, it had limited visibility, reaching only 205 clicks and 4.79K impressions. The goal was to improve its online visibility and performance through strategic SEO, user experience enhancements, and continuous optimization.",
    challenges: "The website faced the challenge of competing in a highly saturated and competitive tech niche. With just 205 clicks and 4.79K impressions, the newly launched domain needed immediate attention to increase visibility and attract more traffic. Additionally, the client lacked strong domain authority, making it harder to rank well on search engines and engage visitors effectively.",
    solution: "We focused on content optimization, targeting specific long-tail keywords to improve search rankings. The UI/UX was redesigned for better user experience, making the website more engaging and easier to navigate. Google Ads campaigns were implemented to drive traffic while continuous performance analysis and adjustments were made to boost results. These combined efforts resulted in significant growth, with total impressions reaching 1 million and monthly clicks increasing to 1.09K.",
  },
  {
    slug: "eyecandybrownsalon",
    breadcrumbTitle: "Eye Candy Brow Salon",
    tag: "Marketing",
    client: "Eye Candy Brow Salon",
    disciplines: "Website Redevelopment, Search Engine Optimization, Ads Management",
    projectDetails: "We partnered with Eye Candy Brow Salon to refresh their digital presence, drive more traffic, and increase engagement across their six U.S. branches.",
    images: {
      hero: "/assets/img/portfolio/ec1.jpg",
      mid: "/assets/img/portfolio/ec2.jpg",
      challenge: "/assets/img/portfolio/ec3.jpg",
    },
    background: "Eye Candy Brow Salon is a beauty salon with 14+ years of experience and six locations across the U.S. While they had a website, its performance was lacking in terms of engagement and conversions. Their team approached us to improve their online visibility and deliver a smoother experience to their users. Our approach focused on rebuilding their website from the ground up to mirror the empowering, safe, and caring environment they've nurtured in their physical spaces.",
    challenges: "The website had low engagement metrics despite the brand's offline credibility and presence. Their online clicks were stagnant at around 1.14k, and users were not converting. The design didn't resonate with their target audience emotionally or visually. Our challenge was to restructure the website to reflect the brand's spirit while simultaneously optimizing for search performance and increasing overall traffic.",
    solution: "We redesigned the entire website with a brand-first approach—placing women empowerment and care at the center. By aligning the UI/UX with the emotional tone of the brand, we created a visually soothing and welcoming experience. We worked on technical SEO improvements and launched a targeted Google Ads campaign. Over six months, user engagement improved dramatically, with a 50% increase in active users and total clicks rising to 2.27k",
  },
  {
    slug: "dripnation",
    breadcrumbTitle: "Drip Nation",
    tag: "Marketing",
    client: "Drip Nation IL",
    disciplines: "Search Engine Optimization (SEO)",
    projectDetails: "Our focus was on improving Drip Nation IL's website for better traffic, engagement, and impressions.",
    images: {
      hero: "/assets/img/portfolio/dn1.jpg",
      mid: "/assets/img/portfolio/dn2.jpg",
      challenge: "/assets/img/portfolio/dn3.jpg",
    },
    background: "Drip Nation IL is a fashion and clothing brand specializing in trendy apparel. They faced challenges with the seasonal nature of their product line, making it difficult to maintain consistent SEO rankings. With a goal of improving organic traffic and engagement, they sought assistance to optimize their website and ensure their seasonal offerings gained visibility",
    challenges: "The major challenge was the seasonal nature of their product line, which required frequent updates to maintain relevance and SEO rankings. Without constant updates to product pages, the website's traffic and impressions were affected. The business also struggled to keep up with ever-changing consumer interests and the competitive nature of the fashion industry.",
    solution: "We optimized the collection pages and enhanced alt text to improve search engine visibility. Our focus on maintaining relevance and SEO best practices, including frequent updates to product pages, led to significant improvements in website traffic and impressions. With consistent monitoring and optimization, we saw a 10x increase in clicks and a sixfold growth in impressions, significantly boosting their online presence.",
  },
  {
    slug: "laddersafetyrails",
    breadcrumbTitle: "Ladder Safety Rails",
    tag: "Marketing",
    client: "Ladder Safety Rails",
    disciplines: "UI/UX, Search Engine Optimization, Google Ads",
    projectDetails: "We worked with Ladder Safety Rails to make their website more user-friendly, improve its search engine ranking, and boost online visibility.",
    images: {
      hero: "/assets/img/portfolio/ls1.jpg",
      mid: "/assets/img/portfolio/ls2.jpg",
      challenge: "/assets/img/portfolio/ls3.jpg",
    },
    background: "Ladder Safety Rails has been in the ladder safety business for over 10 years, with a mission to simplify the use of extension ladders in the U.S. Although their website was functional, it lacked the user-friendliness and visibility required to reach a broader audience. With only a keyword density of 251, the brand faced challenges in gaining traction online. Our goal was to make the website more accessible, improve its search rankings, and make it easier for customers to navigate and purchase products.",
    challenges: "The website's initial user experience was confusing, which led to poor conversion rates. Despite being in business for a decade, the website's keyword density was low at only 251, leading to limited organic traffic and search visibility. We needed to redesign the site to simplify its structure, enhance its usability, and optimize it for better SEO performance.",
    solution: "We started by completely overhauling the website's design to create a minimalistic, user-friendly interface, aligned with the brand's niche. Through strategic SEO optimizations, we increased the website's keyword density from 251 to 2,000, significantly improving its search engine ranking. The combined efforts of CRO improvements and ongoing SEO work resulted in a remarkable 3.9k traffic increase, bringing in more leads and improving overall engagement.",
  },
  {
    slug: "candlepearls",
    breadcrumbTitle: "Candle Pearls",
    tag: "Marketing",
    client: "CANDLE PEARLS",
    disciplines: "On-Page SEO, Off-Page SEO, Keyword Research, Content Optimization, Backlink Building and Technical SEO",
    projectDetails: "Our goal for Candle Pearls was to increase organic visibility and drive online sales through a structured SEO strategy.",
    images: {
      hero: "/assets/img/portfolio/candle-1.jpg",
      mid: "/assets/img/portfolio/candle-2.jpg",
      challenge: "/assets/img/portfolio/candle-3.jpg",
    },
    background: "Candle Pearls offers a diverse range of luxury candles. Despite great products, the brand wasn't reaching enough organic customers. With little visibility on search engines, sales and traffic remained flat. The store needed a full-scale SEO intervention to stand out in a competitive eCommerce landscape and attract the right audience organically.",
    challenges: "The website suffered from inconsistent keyword usage, limited backlinks, and slow technical performance. Search rankings for core products were poor, resulting in only 30 monthly clicks initially. There was also low impression share, minimal domain authority, and a lack of structured content to support search indexing and user engagement.",
    solution: "We implemented our well-researched SEO strategy starting with keyword-driven content updates and optimized metadata. Technical fixes improved site speed and crawlability. We also built quality backlinks. The result? Clicks rose from 30 to 320+, impressions jumped from 1.14K to over 17.6K, and overall visibility surged—proving the SEO foundation drove real results.",
  },
  {
    slug: "brewtheblend",
    breadcrumbTitle: "Brew The Blend",
    tag: "Marketing",
    client: "Brew the Blend",
    disciplines: "SEO Strategy, Content Marketing, Google Analytics Insights, Technical Optimization, Blog Posting",
    projectDetails: "A digital growth strategy was implemented to boost organic reach and search performance.",
    images: {
      hero: "/assets/img/portfolio/btb1.jpg",
      mid: "/assets/img/portfolio/btb2.jpg",
      challenge: "/assets/img/portfolio/btb3.jpg",
    },
    background: "The client approached us to elevate their online performance, enhance brand visibility, and attract more organic users. Their website lacked updated content, and SEO efforts had plateaued. Our goal was to create a consistent growth path by implementing a content-led SEO strategy supported by data analytics, blog publishing, and website performance improvements.",
    challenges: "The brand struggled with low search rankings, outdated website structure, and limited content targeting. Engagement was low, and conversions were inconsistent. Despite a quality product lineup, the digital strategy wasn't converting traffic into loyal users. The lack of clarity in analytics reporting and weak keyword ranking also made it hard to scale or adjust effectively.",
    solution: "We rolled out a complete SEO audit followed by a data-backed roadmap. Keyword-optimized content was published consistently, while technical enhancements were made to the website. We tracked growth with tools like Google Analytics and Search Console. The result: a 189.4% increase in active users, 144.6% boost in page views, and 148% surge in event interactions—setting the stage for a website redesign.",
  },
  {
    slug: "aquatic-ventures",
    breadcrumbTitle: "Aquatic Venture",
    tag: "Marketing",
    client: "Aquatic Venture",
    disciplines: "SEO Optimization, Performance Marketing (Google Ads), Google Search Console Fixes, SEMrush Keyword Strategy, Analytics & Reporting (GA4)",
    projectDetails: "We partnered with Aquatic Venture to scale their online presence through a strategic mix of SEO and performance marketing. Our goal was to drive qualified traffic, increase user engagement, and fix technical issues affecting visibility.",
    images: {
      hero: "/assets/img/portfolio/av/1.jpg",
      mid: "/assets/img/portfolio/av/2.jpg",
      challenge: "/assets/img/portfolio/av/3.jpg",
    },
    background: "Aquatic Venture, a brand specializing in aquatic equipment and supplies, wanted to strengthen its digital footprint. Despite having a functional e-commerce platform, they were facing stagnant traffic and poor keyword visibility. The brand approached us to diagnose the gaps and scale their performance through SEO and paid ads. They also needed help addressing technical issues in Google Search Console and lacked clarity in keyword strategy",
    challenges: "The website had major technical SEO issues, poor search engine visibility, and underperforming ad campaigns. Google Search Console showed indexing problems and critical crawl errors. There was also a lack of keyword intent mapping, which limited content performance. The ad campaigns were not optimized, resulting in low conversions and wasted budget. Additionally, there was no proper engagement tracking or user journey data through GA4, making it difficult to assess performance.",
    solution: "We began by fixing all major SEO and indexing issues using insights from Google Search Console and SEMrush. We also optimized on-page SEO elements, improved internal linking, and implemented a high-intent keyword strategy. To drive traffic, we launched targeted Google Search and Shopping ads with clear ROI tracking. We also set up GA4 for engagement analytics, enabling us to fine-tune campaigns. As a result, Aquatic Venture saw a 43% increase in users, a 305% jump in clicks, and a 296% growth in impressions. The engagement rate improved to 47.39%, and keyword rankings rose across key product categories.",
  },
  {
    slug: "axyloza",
    breadcrumbTitle: "Axyloza",
    tag: "Marketing",
    client: "Axyloza",
    disciplines: "Website Redesign, User Experience Optimization, Mobile Responsiveness, Conversion Rate Optimization",
    projectDetails: "Our work focused on updating the visual design, simplifying navigation, making the site fully mobile-friendly, optimizing product pages for better conversion, and strengthening the brand's consistent look and feel.",
    images: {
      hero: "/assets/img/portfolio/axyloza/1.jpg",
      mid: "/assets/img/portfolio/axyloza/2.jpg",
      challenge: "/assets/img/portfolio/axyloza/3.jpg",
    },
    background: "Axyloza offers carefully selected products that aim to enhance lifestyle and bring happiness to customers. Although their product range was strong, their existing website did not reflect the quality and values of the brand. The site's outdated design and poor user experience made it difficult to convert visitors into buyers, which led Axyloza to seek a comprehensive website redesign.",
    challenges: "The previous website faced several challenges that limited growth. The design was outdated and failed to represent the modern, stylish nature of Axyloza's products. Navigation was confusing, making it hard for users to find what they were looking for, resulting in high bounce rates. Moreover, the site lacked mobile responsiveness at a time when many users accessed it from smartphones. In addition, inconsistent branding across pages weakened the company's identity and trustworthiness.",
    solution: "We approached the redesign with a focus on creating a clean, modern aesthetic that aligned with Axyloza's brand vision. The navigation was overhauled to provide a smoother, more intuitive browsing experience, allowing customers to easily explore product categories. We built the site to be fully responsive so that it worked flawlessly on all devices, particularly mobiles. Product pages were optimized with clear descriptions and high-quality images to boost conversion rates.",
  },
  {
    slug: "chameleon-transfer",
    breadcrumbTitle: "Chameleon Transfer",
    tag: "Marketing",
    client: "Chameleon Transfer",
    disciplines: "SEO, Content Marketing, Analytics Tracking, Google Search Console Optimization, Performance Reporting",
    projectDetails: "Chameleon Transfer aimed to scale organic traffic, user engagement, and event-driven conversions through consistent content and SEO improvements",
    images: {
      hero: "/assets/img/portfolio/CT/1.jpg",
      mid: "/assets/img/portfolio/CT/2.jpg",
      challenge: "/assets/img/portfolio/CT/3.jpg",
    },
    background: "Chameleon Transfer offers heat transfer printing solutions, targeting both professional printers and apparel startups. Despite a functional website, the brand lacked sustained traffic growth and organic content visibility. The company sought assistance to drive users from search engines, boost session engagement, and improve their keyword footprint to generate qualified leads and visibility in a niche market",
    challenges: "The website had low click-through rates (CTR), underutilized search visibility, and limited blog traffic. Key metrics like engagement time and event conversions were inconsistent. The average position across search queries was 46.6, far from top-performing rankings. Additionally, there was minimal event tracking and a lack of optimization across social and referral channels, reducing the potential conversion funnel.",
    solution: 'We rolled out a targeted blog strategy backed by keyword research and analytics tracking. Each blog focused on answering niche-specific queries like "What does DTF mean in printing?" and "Types of t-shirt printing methods," generating thousands of impressions. SEO improvements pushed organic clicks to 514 and impressions to 108K. Events per session reached 7.02, with over 44K total event triggers, reflecting better user interaction and higher intent behavior.',
  },
  {
    slug: "thrivewell-sports",
    breadcrumbTitle: "ThriveWell Sports",
    tag: "Marketing",
    client: "ThriveWell Sports",
    disciplines: "Website redesign, user experience (UX) optimization, mobile responsiveness, conversion rate optimization (CRO), and brand identity enhancement",
    projectDetails: "The project encompassed a comprehensive website redesign aimed at modernizing the visual aesthetics, enhancing user navigation, ensuring seamless mobile responsiveness, optimizing product pages for higher conversions, and reinforcing a cohesive brand identity throughout the site.",
    images: {
      hero: "/assets/img/portfolio/TWS/1.jpg",
      mid: "/assets/img/portfolio/TWS/2.jpg",
      challenge: "/assets/img/portfolio/TWS/3.jpg",
    },
    background: "ThriveWell Sports is dedicated to providing high-quality fitness gear and apparel that empowers individuals on their wellness journey. Despite offering a robust product line catering to various fitness disciplines, their existing website did not effectively convey the brand's energetic spirit and commitment to quality. Recognizing the need for a digital transformation, ThriveWell Sports sought to create an online platform that truly reflected their brand ethos and engaged their target audience more effectively.",
    challenges: "The previous website faced several challenges that hindered user engagement and sales performance. The design was outdated and lacked the vibrant energy synonymous with the brand, making it less appealing to potential customers. Navigation was unintuitive, causing users to struggle in finding products of interest, which led to increased bounce rates. Additionally, the site was not fully optimized for mobile devices, resulting in a subpar experience for a significant portion of visitors accessing the site via smartphones and tablets.",
    solution: "To address these challenges, we embarked on a comprehensive website redesign that aligned with the brand's vision and goals. We developed a modern, visually engaging design that encapsulated the brand's energetic and empowering ethos. The site's navigation was restructured to provide a more intuitive and seamless user journey, enabling customers to effortlessly explore product categories and find items of interest. We ensured full mobile responsiveness, delivering a consistent and optimized experience across all devices. Product pages were enhanced with high-quality imagery, detailed descriptions, and clear calls-to-action to boost conversion rates.",
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudyData.find((cs) => cs.slug === slug);
};

export const getAllCaseStudies = (): CaseStudyData[] => {
  return caseStudyData;
};

export default caseStudyData;
