"use client";

import { Helmet } from "react-helmet-async";
import { useMemo } from "react";
import LayoutV1 from "../../components/layouts/LayoutV1";
import DarkClass from "../../components/classes/DarkClass";
import { useTeam } from "../../hooks/useTeam";
import type { TeamMember } from "../../hooks/useTeam";
import { createSlug } from "../../hooks/useTeamMember";
import "../../assets/css/team-page.css";

/** Map a `TeamMember` from the API to the data shape the existing card UI expects. */
const mapApiMemberToCard = (m: TeamMember) => ({
  id: m._id,
  name: m.name,
  designation: m.jobTitle || "Team Member",
  photo: m.avatar || "/assets/img/team/placeholder.jpg",
  bio: m.bio || "",
  skills: m.skills || [],
  email: m.email || "",
  phone: m.phone || "",
  social: {
    linkedin: m.socialLinks?.linkedin || "",
    twitter: m.socialLinks?.twitter || "",
    github: m.socialLinks?.github || "",
    website: m.socialLinks?.website || "",
  },
});

const faMap: Record<string, string> = {
  linkedin: "linkedin-in",
  twitter: "twitter",
  github: "github",
  website: "globe",
};

const TeamMemberCard = ({ member }: { member: ReturnType<typeof mapApiMemberToCard> }) => {
  const socialEntries = Object.entries(member.social).filter(
    ([, url]) => url && url.length > 0
  );

  return (
    <div className="team-card" id={`team-member-${member.id}`}>
      {/* Photo */}
      <div className="team-card-photo">
        <img src={member.photo} alt={member.name} />
        <div className="photo-overlay" />

        {/* Social Links */}
        {socialEntries.length > 0 && (
          <div className="team-card-social">
            {socialEntries.map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on ${platform}`}
              >
                <i className={`fab fa-${faMap[platform] || platform}`} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="team-card-info">
        <span className="member-role">{member.designation}</span>
        <h3>{member.name}</h3>
        {member.bio && <p className="member-bio">{member.bio}</p>}

        {/* Skills */}
        {member.skills.length > 0 && (
          <div className="team-card-skills">
            {member.skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Contact */}
        {(member.email || member.phone) && (
          <div className="team-card-contact">
            {member.email && (
              <a href={`mailto:${member.email}`}>
                <i className="fas fa-envelope" />
                <span>{member.email}</span>
              </a>
            )}
            {member.email && member.phone && <div className="contact-divider" />}
            {member.phone && (
              <a href={`tel:${member.phone}`}>
                <i className="fas fa-phone" />
                <span>{member.phone}</span>
              </a>
            )}
          </div>
        )}
        
        <div style={{ marginTop: '20px' }}>
          <a href={`/team/${createSlug(member.name)}`} className="team-cta-btn" style={{ width: '100%', textAlign: 'center', display: 'block', padding: '10px' }}>
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

const TeamPageContent = () => {
  const { teamMembers, loading, error } = useTeam();

  const cards = useMemo(
    () => teamMembers.map(mapApiMemberToCard),
    [teamMembers]
  );

  return (
    <>
      <Helmet>
        <title>Our Team | Market Growth Experts</title>
        <meta
          name="description"
          content="Meet the passionate team behind Market Growth Experts. Our skilled designers, developers, and strategists are dedicated to transforming startups into powerful brands."
        />
      </Helmet>

      <LayoutV1>
        {/* Hero Section */}
        <section className="team-page-hero">
          <div className="container">
            <div className="hero-badge">
              <span className="badge-dot" />
              Our Team
            </div>
            <h1>
              Meet the <span className="highlight">Experts</span>
              <br />
              Behind Your Growth
            </h1>
            <p className="hero-subtitle">
              We&apos;re a passionate team of designers, developers, and
              strategists committed to transforming your startup into a
              recognized brand.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="team-stats-section">
          <div className="team-stats-grid">
            <div className="team-stat-item">
              <div className="stat-number">
                {loading ? "…" : `${teamMembers.length}+`}
              </div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="team-stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="team-stat-item">
              <div className="stat-number">300+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="team-stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="team-grid-section">
          <div className="team-grid">
            {loading ? (
              // Loading skeletons (rendered as 6 placeholder cards)
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`skeleton-${i}`}
                  className="team-card team-card--skeleton"
                  aria-hidden
                >
                  <div
                    className="team-card-photo"
                    style={{
                      background:
                        "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 1.5s infinite",
                    }}
                  />
                  <div className="team-card-info" style={{ padding: "24px" }}>
                    <div
                      style={{
                        height: 12,
                        width: "40%",
                        background: "#1f1f1f",
                        borderRadius: 6,
                        marginBottom: 12,
                      }}
                    />
                    <div
                      style={{
                        height: 18,
                        width: "70%",
                        background: "#1f1f1f",
                        borderRadius: 6,
                        marginBottom: 8,
                      }}
                    />
                    <div
                      style={{
                        height: 12,
                        width: "90%",
                        background: "#1f1f1f",
                        borderRadius: 6,
                      }}
                    />
                  </div>
                </div>
              ))
            ) : error ? (
              <div
                className="team-empty"
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "80px 20px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <i
                  className="fas fa-exclamation-triangle"
                  style={{ fontSize: 36, color: "#C9F31D", marginBottom: 12 }}
                />
                <h3 style={{ color: "#fff", marginBottom: 8 }}>
                  Couldn&apos;t load the team
                </h3>
                <p style={{ marginBottom: 16 }}>{error}</p>
                <button
                  className="team-cta-btn"
                  type="button"
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </button>
              </div>
            ) : cards.length === 0 ? (
              <div
                className="team-empty"
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "80px 20px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <i
                  className="fas fa-users"
                  style={{ fontSize: 36, color: "#C9F31D", marginBottom: 12 }}
                />
                <h3 style={{ color: "#fff", marginBottom: 8 }}>
                  No team members yet
                </h3>
                <p>Check back soon — we&apos;re growing the team.</p>
              </div>
            ) : (
              cards.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="team-cta-section">
          <div className="team-cta-box">
            <h2>Want to Join Our Team?</h2>
            <p>
              We&apos;re always looking for talented individuals who are
              passionate about digital innovation and growth marketing.
            </p>
            <a href="/careers" className="team-cta-btn">
              View Open Positions
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </section>

        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default TeamPageContent;
