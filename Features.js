import "./Features.css";

function Features() {
  const features = [
    {
      icon: "✂️",
      title: "Custom Stitching",
      desc: "Precision tailoring crafted according to your unique measurements."
    },
    {
      icon: "👰",
      title: "Bridal Collection",
      desc: "Luxury bridal lehengas, gowns and designer ethnic wear."
    },
    {
      icon: "🏠",
      title: "Doorstep Measurement",
      desc: "Professional measurement service at your home."
    },
    {
      icon: "🧵",
      title: "Premium Fabrics",
      desc: "Choose from exclusive silk, cotton and designer fabrics."
    },
    {
      icon: "⚡",
      title: "Express Delivery",
      desc: "Fast and reliable tailoring with timely delivery."
    },
    {
      icon: "💎",
      title: "VIP Membership",
      desc: "Exclusive subscription plans with priority services."
    }
  ];

  return (
    <section className="features-section">

      <div className="section-header">
        <span>OUR SERVICES</span>
        <h2>Luxury Tailoring Solutions</h2>
        <p>
          Every stitch reflects craftsmanship, elegance,
          and attention to detail.
        </p>
      </div>

      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Features;