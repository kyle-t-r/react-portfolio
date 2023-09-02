import { Icon } from "@iconify/react";
function Footer() {
  return (
    <div class="footer-container">
      <div class="footer-links">
        <h2 class="footer-label">Links</h2>
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
        </ul>
      </div>
      <ul class="footer-contact">
        <li>
          <h2 class="footer-label">Contact</h2>
        </li>
        <li>Kyle Radick</li>
        <li>kyletradick@gmail.com</li>
        <li>678-707-9434</li>
      </ul>
    </div>
  );
}

export default Footer;
