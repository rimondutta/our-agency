import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import QuickContact from "../../components/contact/QuickContact";
import LayoutV1 from "../../components/layouts/LayoutV1";
import TeamV3 from "../../components/team/TeamV3";

const Team2Page = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Team 2</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Team Experts' breadCrumb='team-2' />
                <TeamV3 hasTitle={false} />
                <QuickContact sectionClass='bg-gray' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default Team2Page;