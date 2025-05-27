import { Link } from "react-router-dom";

interface DataType {
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

const SocialShareNew = ({ social }: DataType) => {
  const { linkedin, instagram } = social;

  return (
    <>
      <li>
        <Link to={linkedin?"#":"#"} target="_blank">
          <i className="fab fa-linkedin-in" />
        </Link>
      </li>
      <li>
        <Link to={instagram?"#":"#"} target="_blank">
          <i className="fab fa-dribbble" />
        </Link>
      </li>
      {/* <li>
        <Link to="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f" />
        </Link>
      </li> */}
    </>
  );
};

export default SocialShareNew;
