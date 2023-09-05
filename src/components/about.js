import { Icon } from "@iconify/react";
function About() {
  return (
    <div class="about-container" id="about">
      <div class="about-intro">
        My name is Kyle Radick, and I've been passionate about web development
        for a long time. From tinkering with developer tools in middleschool, to
        creating fully-fledged professional web designs - I've come a long way.
        Using a variety of technologies, I'd love for your project to be my
        next.
      </div>
      <div class="about-tech">
        <div class="about-tech-row">
          <div class="about-tech-wrapper">
            <div class="about-tech-header">Java</div>
            <Icon icon="skill-icons:java-dark" />
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">C#</div>
            <Icon icon="skill-icons:cs" />
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">.NET</div>
            <Icon icon="logos:dotnet" />
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">MySQL</div>
            <Icon icon="skill-icons:mysql-dark" />
          </div>
        </div>
        <div class="about-tech-row">
          <div class="about-tech-wrapper">
            <div class="about-tech-header">CSS</div>
            <Icon icon="skill-icons:css" />
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">JavaScript</div>
            <Icon icon="skill-icons:javascript" />
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">React</div>
            <Icon icon="skill-icons:react-dark" />
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">Git</div>
            <Icon icon="skill-icons:git" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
