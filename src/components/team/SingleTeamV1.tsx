import SocialShareV1 from "../social/SocialShareV1";
import { Link } from "react-router-dom";
import { TeamMember } from "@/hooks/useTeam";
import { createSlug } from "@/hooks/useTeamMember";

const SingleTeamV1 = ({ team }: { team: TeamMember }) => {
    const { avatar, name, jobTitle, socialLinks } = team;

    // Use placeholder if no avatar provided
    const imageUrl = avatar || "/assets/img/team/placeholder.jpg";

    // Generate slug from name
    const slug = createSlug(name || "");

    return (
        <>
            <div className="team-style-one-item">
                <div className="thumb">
                    <Link to={`/team/${slug}`}>
                        <img
                            src={imageUrl}
                            alt={name || "Team Member"}
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                        />
                    </Link>
                    <div className="social-overlay">
                        <ul>
                            <SocialShareV1 />
                        </ul>
                        <div className="icon">
                            <i className="fas fa-plus" />
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h4><Link to={`/team/${slug}`}>{name}</Link></h4>
                    <span>{jobTitle || "Team Member"}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;