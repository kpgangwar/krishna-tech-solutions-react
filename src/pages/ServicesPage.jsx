import { Helmet } from "react-helmet";

import "../styles/servicesPage.css";

const ServicesPage = () => {

 

  const data = [
    {
      title: "🌐 Web Development",
      desc: "Responsive aur SEO friendly websites jo fast aur modern design ke saath aati hain.",
    },
    {
      title: "📱 App Development",
      desc: "Android aur web apps jo user friendly aur high performance hote hain.",
    },
    {
      title: "📈 Digital Marketing",
      desc: "SEO, Social Media aur Ads ke through business growth solutions.",
    },
    {
      title: "🎨 Graphic Design",
      desc: "Logo, banner aur branding designs jo brand identity strong banate hain.",
    },
    {
  title: "📢 Google Ads Marketing",
  desc: "Google Ads ke through targeted customers tak pahunch aur instant leads generate karne ki service.",
},
  ];

  return (

    <>
    
     <Helmet>
  <title>Services | Website & App Development Bareilly</title>
  <meta name="description" content="Krishna Tech web development, app development, digital marketing aur Google Ads services provide karta hai." />
</Helmet>


    <section className="services-page">
      <h1>Our Services</h1>

      <div className="services-list">
        {data.map((item, i) => (
          <div className="service-box" key={i}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default ServicesPage;