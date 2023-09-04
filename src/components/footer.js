import { Icon } from "@iconify/react";
function Footer() {
  return (
    <div class="footer-container">
      <div class="footer-links">
        <h2 class="footer-label">Let's get in touch.</h2>
        <ul>
          <li>
            <a href="#home">
              <Icon icon="ri:home-fill" height="72px" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kyletradick"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="uil:linkedin" height="72px" />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/kyle-t-r"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="ant-design:github-outlined" height="72px" />
            </a>
          </li>
          <li>
            <a
              href="mailto:kyletr.webdev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:email" height="72px" />
            </a>
          </li>
        </ul>
      </div>
      <ul class="footer-contact">
        <li>Kyle Radick</li>
        <li>kyletr.webdev@gmail.com</li>
        <li>Copyright© 2023</li>
      </ul>
    </div>
  );
}

export default Footer;
