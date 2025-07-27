import { Helmet } from "react-helmet-async";
import BannerV4 from "../../components/banner/BannerV4";
import LightClassV3 from "../../components/classes/LightClassV3";
import HeaderV5 from "../../components/header/HeaderV5";

const Home5Light = () => {
    return (
        <>
            <Helmet>
                <title>Market Growth Experts - Home 5 Light</title>
            </Helmet>

            <HeaderV5 lightMode={true} />
            <BannerV4 />
            <LightClassV3 />
        </>
    );
};

export default Home5Light;