import { useParams } from "react-router-dom";
import AchievementAward from "../../components/awards/AchievementAward";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import TeamDetails from "../../components/team/TeamDetails";
import TeamQualification from "../../components/team/TeamQualification";
import TeamV1Data from "../../../src//assets/jsonData/team/TeamV1Data.json"
import { Helmet } from "react-helmet-async";

const TeamDetailsLightPage = () => {

    const { id } = useParams();
    const data = TeamV1Data.find(team => team.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>Dixor - Team Details Light</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb title='Team Experts' breadCrumb='team-details-light' LightMode={true} />
                {data && <TeamDetails teamInfo={data} sectionClass='default-padding' />}
                <AchievementAward />
                <TeamQualification />
            </LayoutV1Light>
        </>
    );
};

export default TeamDetailsLightPage;