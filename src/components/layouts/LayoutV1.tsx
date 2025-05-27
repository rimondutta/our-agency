import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV1 lightMode={false} />
                {children}
                <FooterV1/>
            </div>
        </>
    );
};

export default LayoutV1;