import { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [data, setData] = useState({ name: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello Krishna Tech 👋
Name: ${data.name}
Message: ${data.msg}`;

    window.open(
      `https://wa.me/918909087801?text=${encodeURIComponent(text)}`
    );
  };

  return (
    <section className="contact">
      <h2>Let’s Work Together</h2>

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
    </section>
  );
};

export default Contact;