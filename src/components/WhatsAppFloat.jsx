// import "../styles/whatsapp.css";
// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppFloat = () => {
// //   const msg = "Hello Krishna Tech 👋 I want a website.";
// const msg = `Hello Krishna Tech 👋
// Mujhe website banwani hai
// Please details share kare`;
//   return (
//     <a
//       href={`https://wa.me/918909087801?text=${encodeURIComponent(msg)}`}
//       target="_blank"
//       rel="noreferrer"
//       className="whatsapp-float"
//     >
//       <FaWhatsapp />
//     </a>
//   );
// };

// export default WhatsAppFloat;


import "../styles/whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const msg = "Hello Krishna Tech 👋 I want a website.";

  return (
    <div className="whatsapp-wrapper">
      <span className="tooltip">Chat with us</span>

      <a
        href={`https://wa.me/918909087801?text=${encodeURIComponent(msg)}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppFloat;