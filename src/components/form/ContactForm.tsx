import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    website: "",
    company_name: "",
    email: "",
    phone: "",
    additional: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/sendcontactformmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        }
      );

      const data = await response.json();

      if (data?.success) {
        setFormState({
          name: "",
          website: "",
          company_name: "",
          email: "",
          phone: "",
          additional: "",
        });
        toast.success("Form Saved Successfully");
      }
      else throw new Error(data?.message);
    } catch (err: any) {
      toast.warn(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name*"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="website"
                name="website"
                placeholder="Website url*"
                type="url"
                required
                value={formState.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control no-arrows"
                id="company_name"
                name="company_name"
                placeholder="Company Name"
                type="text"
                autoComplete="off"
                value={formState.company_name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control no-arrows"
                id="phone"
                name="phone"
                placeholder="Phone*"
                type="tel"
                required
                autoComplete="off"
                value={formState.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="additional"
                name="additional"
                placeholder="Tell Us About Project"
            
                value={formState.additional}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <button disabled={loading} type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane" /> {loading?"Loading":"Get in Touch"}
            </button>
          </div>
        </div>

        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg" />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
