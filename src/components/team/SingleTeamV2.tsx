import { Link } from "react-router-dom";

// Helper function to create slug from name
const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

interface socialType {
    linkedin?: string;
    instagram?: string;
}
interface DataType {
  id?: number;
  thumb?: string;
  name?: string;
  designation?: string;
  social?:socialType;
}

const SingleTeamV2 = ({ team }: { team: DataType }) => {
  const {thumb, name, designation,social } = team;

  // Generate slug from name
  const slug = createSlug(name || "");

  return (
    <>
      <div className="team-style-two-item">
        <div className="thumb">
          <img
            src={`/assets/img/team/${thumb}`}
            className="img-fluid"
            alt="Image Not Found"
            width={800}
            height={900}
          />
          <div className="share-link">
            <i className="fas fa-share-alt" />
            <ul>
              <li>
                <Link
                  className="linkedin"
                  to={social?.linkedin||"#"}
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="info"
        >
          <div>
            <h2>
              <Link to={`/team/${slug}`}>{name}</Link>
            </h2>
            <span>{designation}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTeamV2;
