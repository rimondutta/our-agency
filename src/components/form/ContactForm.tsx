import { useRef } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/marketgrowthexperts.pro@gmail.com", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success === "true") {
        toast.success("Message sent successfully!");
        form.reset(); // clear form fields
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      toast.error("Network error. Try again later.");
    }
  };

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Your Email*"
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone*"
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <textarea
          name="additional"
          placeholder="Tell us about your project"
          className="form-control"
          rows={4}
        />
      </div>

      {/* Hidden input to disable captcha (optional) */}
      <input type="hidden" name="_captcha" value="false" />

      <button type="submit">
        <i className="fa fa-paper-plane" /> {`Send Message`}
      </button>
    </form>
  );
};

export default ContactForm;
