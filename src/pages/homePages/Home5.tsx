import { Helmet } from "react-helmet-async";
import BannerV4 from "../../components/banner/BannerV4";
import DarkClassV3 from "../../components/classes/DarkClassV3";
import HeaderV5 from "../../components/header/HeaderV5";

const Home5 = () => {
    return (
        <>
            <Helmet>
                <title>Market Growth Experts - Home 5</title>
            </Helmet>

            <HeaderV5 />
            <BannerV4 />
            <DarkClassV3 />
        </>
    );
};

export default Home5;