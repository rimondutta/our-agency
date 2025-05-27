interface DataType {
  id: number;
  title: string;
  description: string;
  features: string[];
  blockedFeatures: string[];
  priceOriginal: number | null;
  priceDiscounted: number;
  currency: string;
  billingCycle: string;
  checkoutLink?: string;
}

const SinglePriceV2New = ({ plan }: { plan: DataType }) => {
  const {
    title,
    description,
    checkoutLink,
    features,
    blockedFeatures,
    priceOriginal,
    priceDiscounted,
    billingCycle,
  } = plan;

  return (
    <>
      <div className="pricing-style-two">
        <div className="pricing-header">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <ul>
          {features.length > 1 &&
            features?.map((feature, index) => (
              <li className="given" key={index}>
                {feature}
              </li>
            ))}
          {blockedFeatures.length > 1 &&
            blockedFeatures?.map((feature, index) => (
              <li className="blocked" key={index}>
                {feature}
              </li>
            ))}
        </ul>

        <div className="price">
          <h2>
            {priceOriginal && <del>${priceOriginal}</del>} ${priceDiscounted}
            <sub> / {billingCycle}</sub>
          </h2>
        </div>
        <a
          className="btn mt-25 btn-sm circle btn-border dark effect"
          href={checkoutLink}
          onClick={(e) => {
            if (checkoutLink==="#") e.preventDefault(); // prevent default if link is falsy
          }}
        >
          Get Started
        </a>
      </div>
    </>
  );
};

export default SinglePriceV2New;
