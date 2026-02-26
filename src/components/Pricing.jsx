import "../styles/pricing.css";

const Pricing = () => {
  const plans = [
    {
      title: "Basic Website",
      price: "₹2999",
      features: ["1 Page Website", "Responsive Design", "Free Hosting", "WhatsApp Chat"],
    },
    {
      title: "Business Website",
      price: "₹5999",
      features: ["5 Pages Website", "SEO Friendly", "Admin Panel", "Support"],
      highlight: true,
    },
    {
      title: "Ecommerce Store",
      price: "₹9999",
      features: ["Product Panel", "Payment Gateway", "Order System", "Support"],
    },
  ];

  return (
    <section className="pricing">
      <h2>Our Pricing</h2>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div className={`price-card ${plan.highlight ? "highlight" : ""}`} key={i}>
            <h3>{plan.title}</h3>
            <h1>{plan.price}</h1>

            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx}>✔️ {f}</li>
              ))}
            </ul>

            <a href="https://wa.me/918909087801">Choose Plan</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;