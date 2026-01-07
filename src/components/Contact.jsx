const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container contact-container">
        <h2>Contact</h2>
        <p>If you'd like to get in touch, send a message below or email me at <a href="mailto:gayitrijarajapu@gmail.com">gayitrijarajapu@gmail.com</a>.</p>
        <form className="contact-form" action="mailto:gayitrijarajapu@gmail.com" method="post" encType="text/plain">
          <label>
            Your name
            <input type="text" name="name" required />
          </label>
          <label>
            Your message
            <textarea name="message" rows="5" required />
          </label>
          <div className="form-actions">
            <button type="submit" className="btn">Send Email</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
