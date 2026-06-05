import { Link } from "react-router-dom";
import { TeamMember } from "@/hooks/useTeam";
import { createSlug } from "@/hooks/useTeamMember";

const SingleTeamV3 = ({ team }: { team: TeamMember }) => {
    const { avatar, name, jobTitle } = team;

    // Use a placeholder if no profile photo exists
    const imageUrl = avatar || "/assets/img/team/placeholder.jpg";

    // Generate slug from name
    const slug = createSlug(name || "");

    return (
        <>
            <div className="team-style-three-item">
                <div className="thumb">
                    <Link to={`/team/${slug}`}>
                        <img
                            src={imageUrl}
                            alt={name || "Team Member"}
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </Link>
                </div>
                <div className="info">
                    <h4><Link to={`/team/${slug}`}>{name}</Link></h4>
                    <span>{jobTitle || "Team Member"}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV3;