function Contact() {
  return (
    <form name="contact" id="contact" class="contact-form" netlify>
      <h2 class="contact-label">Let's get in touch.</h2>
      <input
        type="text"
        class="contact-input"
        name="name"
        id="name"
        placeholder="Name"
      />

      <input
        type="email"
        class="contact-input"
        name="email"
        id="email"
        placeholder="Email"
      />

      <textarea
        name="message"
        class="contact-message"
        id="message"
        cols="30"
        rows="8"
        placeholder="How can I help you?"
      ></textarea>

      <input type="submit" value="Send" class="contact-submit" />
    </form>
  );
}

export default Contact;
