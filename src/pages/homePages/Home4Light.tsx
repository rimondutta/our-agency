import { Helmet } from "react-helmet-async";
import CursorEffect from "../../components/animation/CursorEffect";
import BannerV3 from "../../components/banner/BannerV3";
import HeaderV4 from "../../components/header/HeaderV4";

const Home4Light = () => {
    return (
        <>
            <Helmet>
                <title>Quirktix - Home 4 Light</title>
            </Helmet>

            <HeaderV4 lightMode={true} />
            <BannerV3 />
            <CursorEffect />
        </>
    );
};

export default Home4Light;