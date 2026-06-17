import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <h1>Contact Us</h1>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
        />

        <button>
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;