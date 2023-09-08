import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function Validate() {
    if (name.length === 0) {
      document.getElementById("contact-label").innerHTML =
        "You must have a name, right?";
      return;
    }
    if (email.length === 0) {
      document.getElementById("contact-label").innerHTML =
        "I need to reply somehow...";
      return;
    }
    if (!email.match(emailRegex)) {
      document.getElementById("contact-label").innerHTML =
        "Invalid Email. I'll pretend I don't see that typo.";
      return;
    }
    if (message.length === 0) {
      document.getElementById("contact-label").innerHTML =
        "Yes, the message is required.";
      return;
    }

    document.getElementById("contact-form").submit();
  }

  return (
    <div class="contact-container" id="contact">
      <h2 id="contact-label" class="contact-label">
        Let's get in touch.
      </h2>
      <form
        name="contact-form"
        id="contact-form"
        class="contact-form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <input type="hidden" name="bot-field" />
        <input
          type="text"
          class="contact-input"
          name="name"
          id="name"
          placeholder="Name"
          autocomplete="off"
          onInput={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          class="contact-input"
          name="email"
          id="email"
          placeholder="Email"
          autocomplete="off"
          onInput={(e) => setEmail(e.target.value)}
        />

        <textarea
          class="contact-message"
          name="message"
          id="message"
          cols="30"
          rows="8"
          placeholder="How can I help you?"
          onInput={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="button"
          class="contact-submit"
          name="btnSubmit"
          value="Send"
          onClick={() => {
            Validate();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
