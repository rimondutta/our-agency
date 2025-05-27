import twitterDark from '/assets/img/icon/twitter-dark.png';
import { Link } from "react-router-dom";

const SocialShareV2 = () => {
    return (
        <>
            {/* <li>
                <Link className="facebook" to="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f" />
                </Link>
            </li>
            <li>
                <Link className="twitter" to="https://www.x.com" target="_blank">
                    <img src={twitterDark} alt="Image Not Found" />
                </Link>
            </li>
            <li>
                <Link className="linkedin" to="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in" />
                </Link>
            </li> */}
            <li>
                <Link to="https://www.facebook.com/quirktix" target='_blank'><i className="fab fa-facebook-f" /></Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/company/quirktix/" target='_blank'><i className="fab fa-linkedin-in" /></Link>
            </li>
            <li>
                <Link to="https://x.com/quirktix/" target='_blank'><img src={twitterDark} alt="Image Not Found" /></Link>
            </li>
            <li>
                <Link to="https://www.instagram.com/quirktix/" target='_blank'><i className="fab fa-instagram" /></Link>
            </li>
        </>
    );
};

export default SocialShareV2;