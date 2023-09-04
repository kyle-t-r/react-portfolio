import { useState } from "react";

function Contact() {
  const [trap, setTrap] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function Validate() {
    if (trap.length > 0) {
      alert("You are a bot! Not today SkyNet.");
      return;
    }
    if (name.length === 0) {
      document.getElementById("contact-label").innerHTML =
        '<h2 id="contact-label" class="contact-label"> You must have a name, right? </h2>';
      return;
    }
    if (email.length === 0) {
      document.getElementById("contact-label").innerHTML =
        '<h2 id="contact-label" class="contact-label"> I need to reply somehow... </h2>';
      return;
    }
    if (!email.match(emailRegex)) {
      document.getElementById("contact-label").innerHTML =
        '<h2 id="contact-label" class="contact-label" style="font-size: 36px;"> Invalid Email. I\'ll pretend I don\'t see that typo. </h2>';
      return;
    }
    if (message.length === 0) {
      document.getElementById("contact-label").innerHTML =
        '<h2 id="contact-label" class="contact-label"> Yes, the message is required. </h2>';
      return;
    }

    document.getElementById("contact").submit();
  }

  return (
    <form name="contact" id="contact" class="contact-form" netlify>
      <h2 id="contact-label" class="contact-label">
        Let's get in touch.
      </h2>
      <input
        type="text"
        name="Begone, bots!"
        id="trap"
        class="botTrap"
        onInput={(e) => setTrap(e.target.value)}
      />
      <input
        type="text"
        class="contact-input"
        name="name"
        id="name"
        placeholder="Name"
        onInput={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        class="contact-input"
        name="email"
        id="email"
        placeholder="Email"
        onInput={(e) => setEmail(e.target.value)}
      />

      <textarea
        name="message"
        class="contact-message"
        id="message"
        cols="30"
        rows="8"
        placeholder="How can I help you?"
        onInput={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="button"
        value="Send"
        class="contact-submit"
        onClick={() => {
          Validate();
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default Contact;
