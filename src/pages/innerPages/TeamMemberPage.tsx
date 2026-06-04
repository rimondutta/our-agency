import { useParams } from "react-router-dom";
import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import TeamDetails from "../../components/team/TeamDetails";
import SocialShareV1 from "../../components/social/SocialShareV1";
import { useTeamMember, createSlug } from "../../hooks/useTeamMember";
import Preloader from "../../components/utilities/Preloader";
import { Helmet } from "react-helmet-async";
import DarkClass from "../../components/classes/DarkClass";

const TeamMemberPage = () => {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const { teamMember, loading, error } = useTeamMember(slug || "");

  if (loading) {
    return (
      <LayoutV1>
        <Preloader />
      </LayoutV1>
    );
  }

  if (error || !teamMember) {
    return (
      <LayoutV1>
        <Breadcrumb title="Team Member" breadCrumb="team" />
        <div className="container py-5 text-center bg-dark">
          <h2>{error || "Team member not found"}</h2>
        </div>
        <DarkClass />
      </LayoutV1>
    );
  }

  // Transform API data to match TeamDetails component format
  const teamInfo = {
    id: teamMember._id,
    thumb: teamMember.profilePhoto?.replace("/assets/img/team/", "") || "placeholder.jpg",
    name: teamMember.name,
    designation: teamMember.jobTitle,
    text: "", // Add bio field if available
    age: "", // Add age field if available
    email: "", // Add email field if available
    phone: "", // Add phone field if available
  };

  return (
    <>
      <Helmet>
        <title>{teamMember.name} - Team Details</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb title={teamMember.name} breadCrumb="team" />
        <div className="team-single-area default-padding-bottom bg-dark">
          <div className="container">
            <div className="team-content-top">
              <div className="row align-center">
                <div className="col-xl-6 col-lg-5 left-info">
                  <div className="thumb">
                    <img
                      src={teamMember.profilePhoto || "/assets/img/team/placeholder.jpg"}
                      alt={teamMember.name}
                      width={800}
                      height={900}
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="team-right-info">
                    <h2>{teamMember.name}</h2>
                    <span>{teamMember.jobTitle || "Team Member"}</span>
                    {teamMember.bio && <p style={{ marginTop: '16px', lineHeight: '1.8', color: '#a0a0a0' }}>{teamMember.bio}</p>}
                    
                    {teamMember.skills && teamMember.skills.length > 0 && (
                      <div className="team-skills" style={{ marginTop: '24px', marginBottom: '24px' }}>
                        <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#fff' }}>Expertise</h4>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {teamMember.skills.map((skill: string, index: number) => (
                            <span key={index} style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 14px', borderRadius: '4px', fontSize: '14px' }}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <ul className="user-location" style={{ marginTop: '32px' }}>
                      {teamMember.email && (
                        <li>
                          <strong>Email:</strong>
                          <a href={`mailto:${teamMember.email}`}>{teamMember.email}</a>
                        </li>
                      )}
                      {teamMember.phone && (
                        <li>
                          <strong>Phone:</strong>
                          <a href={`tel:${teamMember.phone}`}>{teamMember.phone}</a>
                        </li>
                      )}
                      {teamMember.socialLinks?.linkedin && (
                        <li>
                          <strong>LinkedIn:</strong>
                          <a href={teamMember.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn Profile
                          </a>
                        </li>
                      )}
                      {teamMember.socialLinks?.twitter && (
                        <li>
                          <strong>Twitter:</strong>
                          <a href={teamMember.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            Twitter Profile
                          </a>
                        </li>
                      )}
                      {teamMember.socialLinks?.github && (
                        <li>
                          <strong>GitHub:</strong>
                          <a href={teamMember.socialLinks.github} target="_blank" rel="noopener noreferrer">
                            GitHub Profile
                          </a>
                        </li>
                      )}
                      {teamMember.socialLinks?.website && (
                        <li>
                          <strong>Website:</strong>
                          <a href={teamMember.socialLinks.website} target="_blank" rel="noopener noreferrer">
                            Personal Website
                          </a>
                        </li>
                      )}
                    </ul>
                    <div className="social">
                      <a className="btn circle btn-sm btn-gradient animation" href={`mailto:${teamMember.email || 'hello@our-agency.com'}`}>
                        Contact Me
                      </a>
                      <div className="share-link">
                        <i className="fas fa-share-alt" />
                        <ul>
                          <SocialShareV1 />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default TeamMemberPage;