import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import TeamV1 from "../../components/team/TeamV1";

const TeamPage = () => {
    return (
        <>
            <Helmet>
                <title>Dixor - Team</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Team Experts' breadCrumb='team' />
                <TeamV1 sectionClass='bg-gray' />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default TeamPage;