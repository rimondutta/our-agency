import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1Light = ({ children }: LayoutProps) => {
    return (
        <>
            
            <div className="smooth-scroll-container">
                <HeaderV1 lightMode={true}/>
                {children}
                <FooterV1 lightMode={true} sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default LayoutV1Light;