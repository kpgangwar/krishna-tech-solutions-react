import { useState } from "react";
import { Helmet } from "react-helmet-async"
import "../styles/contactPage.css";

const ContactPage = () => {

const [data, setData] = useState({ name: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Krishna Tech 👋
Name: ${data.name}
Message: ${data.msg}`;

    window.open(`https://wa.me/918909087801?text=${encodeURIComponent(text)}`);
  };

  return (

     <>
     <Helmet>
  <title>Website & App Development Services in Bareilly | Krishna Tech Solution</title>

  <meta
    name="description"
    content="Krishna Tech Solution Bareilly me website development, mobile app development, SEO, digital marketing aur Google Ads services provide karta hai business growth ke liye."
  />

  <meta
    name="keywords"
    content="Website Development Bareilly, App Development Bareilly, SEO Services Bareilly, Digital Marketing Bareilly, Krishna Tech Solution"
  />
</Helmet>
    <section className="contact-page">
      <h1>Let’s Talk About Your Project</h1>

      <div className="contact-wrapper">

        {/* Form */}
        <form className="contact-form glass" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <textarea
            placeholder="Your Message"
            onChange={(e) => setData({ ...data, msg: e.target.value })}
          />

          <button type="submit">Send on WhatsApp →</button>
        </form>

        {/* Info card */}
        <div className="contact-card glass">
          <h3>Contact Info</h3>
          <p>📞 +91 8909087801</p>
          <p>📧 krishnatech@email.com</p>
          <p>📍 Bareilly, Uttar Pradesh</p>

          <a href="https://wa.me/918909087801">Quick WhatsApp Chat</a>
        </div>

      </div>
    </section>
      </>
  );
};

export default ContactPage;