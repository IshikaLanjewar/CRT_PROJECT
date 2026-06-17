import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>
            Tailor<span>Hub</span>
          </h2>

          <p>
            Bringing premium tailoring,
            designer fashion and traditional
            craftsmanship together for a
            luxurious customer experience.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">Gallery</a>
          <a href="/">Pricing</a>
        </div>

        <div className="footer-links">
          <h3>Services</h3>

          <a href="/">Bridal Wear</a>
          <a href="/">Custom Stitching</a>
          <a href="/">Alterations</a>
          <a href="/">VIP Membership</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📍 Nagpur, Maharashtra</p>
          <p>📞 +91 9876543210</p>
          <p>✉ support@tailorhub.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TailorHub. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;