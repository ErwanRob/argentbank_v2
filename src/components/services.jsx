import serviceData from "../data/dataFeatures.json";
import ServiceCard from "./serviceCard";

function Services() {
  return (
    <section className="features">
      {serviceData.map((service) => (
        <ServiceCard
          key={service.id}
          img={service.img}
          title={service.title}
          alt={service.alt}
          description={service.description}
        />
      ))}
    </section>
  );
}

export default Services;
