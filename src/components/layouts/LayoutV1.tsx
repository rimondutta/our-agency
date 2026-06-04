import FooterV1 from "../footer/FooterV1";
import HeaderV2 from "../header/HeaderV2";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV2 lightMode={false} />
                {children}
                <FooterV1/>
            </div>
        </>
    );
};

export default LayoutV1;