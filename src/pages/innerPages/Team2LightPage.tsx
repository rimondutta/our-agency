import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import QuickContact from "../../components/contact/QuickContact";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import TeamV3 from "../../components/team/TeamV3";

const Team2LightPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Team 2 Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Team Experts' breadCrumb='team-2-light' LightMode={true} />
                <TeamV3 hasTitle={false} />
                <QuickContact sectionClass='bg-theme' />
            </LayoutV1Light>
        </>
    );
};

export default Team2LightPage;