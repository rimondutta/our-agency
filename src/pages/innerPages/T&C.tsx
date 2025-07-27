import LayoutV1 from "../../components/layouts/LayoutV1";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

import DarkClass from "../../components/classes/DarkClass";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Market Growth Experts</title>
      </Helmet>

      <LayoutV1>
        <Breadcrumb
          title="Terms and Conditions"
          breadCrumb="Terms and Conditions"
        />
        <div style={{ padding: "50px 20px" }} className="container">
      
          <h2>Terms and Conditions</h2>
          <p>
            By accessing or using our website (#), you agree
            to be bound by the following Terms and Conditions. Please read them
            carefully. If you do not agree, we advise you not to use our website
            or services.
          </p>
          <h2>1. Use of Our Website</h2>
          <p>
            You agree to use our website only for lawful purposes and in a way
            that does not infringe on the rights of others or restrict their use
            and enjoyment of the site.
            <br />
            You may not:
          </p>
          <ul style={{ paddingLeft: "20px" }} className="listitem mb-4">
            <li className="listitem">
              Misuse the site by introducing viruses or harmful content
            </li>

            <li className="listitem">
              Attempt to gain unauthorized access to our systems
            </li>

            <li className="listitem">
              Copy or reuse content without written permission
            </li>
          </ul>
          <h2>2. Intellectual Property </h2>
          <p>
            All content on this website, including logos, graphics, text,
            designs, and other materials, is the property of Market Growth Experts
            Technologies unless stated otherwise. You may not reproduce or use
            any content without prior written consent.
          </p>
          <h2>3. Services and Pricing</h2>
          <p>
            All information related to our services, packages, and pricing is
            subject to change without prior notice. We reserve the right to
            modify or discontinue any service at our discretion.
          </p>
          <h2>4. Third-Party Links </h2>
          <p>
            Our site may contain links to third-party websites. We are not
            responsible for the content or practices of these external sites.
            Access them at your own risk and make sure to review their terms and
            policies.
          </p>
          <h2>5. Limitation of Liability </h2>
          <p>
            Market Growth Experts will not be held liable for any direct,
            indirect, or consequential loss or damage resulting from your use of
            this website or any of our services. We provide all content and
            services “as is” without warranties of any kind.
          </p>
          <h2>6. User-Submitted Information</h2>
          <p>
            Any information you share with us through the website (such as
            inquiries, forms, or project briefs) is considered voluntary. We
            will handle your data responsibly as outlined in our Privacy Policy.
          </p>
          <h2>7. Changes to These Terms</h2>
          <p>
            We may update these Terms & Conditions at any time. Updates will be
            reflected on this page with a revised date. Continued use of the
            site after any changes means you agree to the updated terms.
          </p>
          <h2>8. Governing Law</h2>
          <p>
            These Terms are governed by and interpreted in accordance with the
            laws of India, and any disputes shall be handled in that
            jurisdiction.
          </p>
          <h2>9. Refund Policy</h2>
          <p>
            Once onboarding is complete and payment has been made, clients are
            eligible to request a refund within 15 calendar days. Refunds will
            only be considered under valid circumstances, such as:
          </p>
          <ul style={{ paddingLeft: "20px" }} className="listitem mb-4">
            <li className="listitem">
              Failure to initiate the project within a reasonable time frame
            </li>
          </ul>
          <p>
            Refund requests made after the 15-day period will not be accepted.
            <br />
            If you wish to cancel our services after the refund window has
            passed, a 30-day written notice is required. The notice period will
            be applicable from the end of the current calendar month, and
            services will continue as scheduled during that period, with
            standard billing in effect.
          </p>
          <h2>10. Messaging Terms & Conditions</h2>
          <p>
            By providing your contact information and using our services, you
            agree to receive informational messages from Market Growth Experts
            Technologies. These may include updates such as appointment
            reminders, service notifications, offers, or other relevant
            communications.
            <br />
            Here’s what you can expect:
          </p>
          <ul style={{ paddingLeft: "20px" }} className="listitem mb-4">
            <li className="listitem">
              <strong>Brand Name</strong> : Market Growth Experts
            </li>

            <li className="listitem">
              <strong>Types of Messages</strong> : Service updates, marketing
              messages, appointment reminders, and notifications
            </li>

            <li className="listitem">
              <strong>Message Frequency</strong> : Varies based on your
              interaction with our services
            </li>

            <li className="listitem">
              <strong>Charges</strong> : Message and data rates may apply,
              depending on your mobile carrier
            </li>

            <li className="listitem">
              <strong>Support </strong> : For help, reply HELP or contact us at
              info.marketgrowthexperts@gmail.com
            </li>
            <li className="listitem">
              <strong> Opt-Out</strong> : You can opt out at any time by
              replying STOP
            </li>
          </ul>
          <p>
            Your privacy is important to us. All messaging is managed in
            accordance with this Privacy Policy and applicable regulations.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, feel free
            to reach out to us at: info.marketgrowthexperts@gmail.com
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Last updated</span>: 25/04/25
          </p>
        </div>
        <DarkClass />
      </LayoutV1>
    </>
  );
};

export default Terms;
