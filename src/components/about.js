import { Icon } from "@iconify/react";
function About() {
  const skills = [
    [
      "Kyle Radick",
      "My name is Kyle Radick, and I've been passionate about web development for a long time. From tinkering with developer tools in middleschool, to creating fully-fledged professional web designs - I've come a long way. Click the technologies I've worked with to learn a bit more.",
    ],
    [
      "Java",
      "Worked extensively in Adobe Experience Manager Sling - creating Servlets, Services, Models, Workflows, and more Models. Other notable projects include Spring Boot and Java Database Connectivity (JDBC).",
    ],
    [
      "C#",
      "Frequently updated and fine-tuned enterprise Sitecore controls – including template building and increasing scope of analytic tools – while simultaneously monitoring cross-site scripting vulnerabilities.",
    ],
    [
      "Docker",
      "Maintained and created containerization projects, including complex interactions between images.",
    ],
    [
      "MySQL",
      "Created and deployed a number of queries to production databases, while also working with query-building and prepared statements.",
    ],
    [
      "Kotlin",
      "Many of my Java applications end up becoming Kotlin applications eventually...",
    ],
    [
      "JavaScript",
      "Any modern website includes JavaScript now – this one included, available on my GitHub. Experience in React (SPA) TypeScript and JavaScript.",
    ],
    [
      "Linux",
      "Familiar with Debian-based distros, server management, bash, and definitely familiar with troubleshooting.",
    ],
    [
      "Git",
      "Outside of version control, my experience includes GitHub Actions and Copilot.",
    ],
  ];

  function clickSkill(skillNum) {
    const about = document.getElementById("about");
    if (skillNum === 0 || skillNum > 8) {
      document.getElementById("about-intro-text").innerHTML = skills[0][1];
    } else {
      if (about.getAttribute("transition-style") === "wipe") {
        about.setAttribute("transition-style", "none");
        setTimeout(function () {
          about.setAttribute("transition-style", "wipe");
          document.getElementById("about-intro-text").innerHTML =
            skills[skillNum][1];
          document.getElementById("about-intro-header").innerHTML =
            skills[skillNum][0];
        }, 100);
      } else {
        about.setAttribute("transition-style", "wipe");
        document.getElementById("about-intro-text").innerHTML =
          skills[skillNum][1];
        document.getElementById("about-intro-header").innerHTML =
          skills[skillNum][0];
      }
    }
  }

  return (
    <div class="about-container" id="about" transition-style="">
      <div class="about-intro-container">
        <div class="about-intro-header" id="about-intro-header">
          About Me
        </div>
        <div class="about-intro-text" id="about-intro-text">
          My name is Kyle Radick, and I've been passionate about web development
          for a long time. From tinkering with developer tools in middleschool,
          to creating fully-fledged professional web designs - I've come a long
          way. <br />
          <br />
          Click the technologies I've worked with to learn a bit more.
        </div>
      </div>
      <div class="about-tech">
        <div class="about-tech-row">
          <div class="about-tech-wrapper">
            <div class="about-tech-header">Java</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(1)}>
              <Icon icon="skill-icons:java-dark" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">C#</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(2)}>
              <Icon icon="skill-icons:cs" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">Docker</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(3)}>
              <Icon icon="skill-icons:docker" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">MySQL</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(4)}>
              <Icon icon="skill-icons:mysql-dark" />
            </div>
          </div>
        </div>
        <div class="about-tech-row">
          <div class="about-tech-wrapper">
            <div class="about-tech-header">Kotlin</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(5)}>
              <Icon icon="skill-icons:kotlin-dark" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">JavaScript</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(6)}>
              <Icon icon="skill-icons:javascript" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">Linux</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(7)}>
              <Icon icon="skill-icons:linux-dark" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">Git</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(8)}>
              <Icon icon="skill-icons:github-dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
