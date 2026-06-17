import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <video autoPlay muted loop className="hero-video">
        <source src="/videos/tailoring.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">
          ✨ Premium Tailoring Experience
        </span>

        <h1>
          Crafted For
          <span> Elegance</span>
        </h1>

        <p>
          Experience the perfect blend of traditional Indian craftsmanship
          and modern fashion design. From bridal wear to custom outfits,
          we stitch perfection into every fabric.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Book Consultation
          </button>

          <button className="secondary-btn">
            Explore Collections
          </button>
        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-card">
            <h2>25+</h2>
            <p>Expert Tailors</p>
          </div>

          <div className="stat-card">
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;