import PagesHeader from "../components/PagesHeader";
import ServicesCards from "../components/ServicesCards";
import "../styles/pages/services.scss";
const Services = () => {
  return (
    <>
      {/* HEADER */}

      <PagesHeader />

      <section className="services">
        <div className="services-content">
          <h1 className="services-title">
            Our Exclusive <span>Recruitment Services</span>
          </h1>

          <ServicesCards />
        </div>
      </section>
    </>
  );
};

export default Services;
