import { Icon } from "@iconify/react";
function About() {
  const skills = [
    [
      "Kyle Radick",
      "My name is Kyle Radick, and I've been passionate about web development for a long time. From tinkering with developer tools in middleschool, to creating fully-fledged professional web designs - I've come a long way. Click the technologies I've worked with to learn a bit more.",
    ],
    [
      "Java",
      "Worked with Java Database Connectivity (JDBC) tools to provide client-ready solutions, developed webapps to be deployed as headless Amazon Lambda functions, and created a general-purpose file sorting program.",
    ],
    [
      "C#",
      "Frequently updated and fine-tuned enterprise Sitecore controls – including template building and increasing scope of analytic tools – while simultaneously monitoring cross-site scripting vulnerabilities.",
    ],
    [
      "Linux",
      "Configured and tested Linux run hardware at scale and deployed Apache webservers in Amazon EC2 instances.",
    ],
    [
      "MySQL",
      "I’ve created and deployed a number of queries to production databases, while also working with query-building and prepared statements. Multiple joins and subqueries are no stranger to me.",
    ],
    [
      "CSS",
      "Front-end design is incredibly important to delivering a business proposition. I’ve developed a number of webpages from scrap, maintaining neat and well documented code along the way.",
    ],
    [
      "JavaScript",
      "Any modern website includes JavaScript now – this one included. Using powerful tools like Node.js, I’ve built API-driven user applications, React web projects, and more.",
    ],
    [
      "React",
      "React is undeniably the “talk-of-the-town” in web development, and I have my fair share of experience. This website is developed in React – head over to my GitHub to see how.",
    ],
    [
      "Git",
      "I’ve performed thousands of commits in Git – ranging from projects just a few lines long, to decades old and tens of millions of lines long. The concept is the same – clean, maintainable code will always cut time and costs.",
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
            <div class="about-tech-header">Linux</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(3)}>
              <Icon icon="skill-icons:linux-dark" />
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
            <div class="about-tech-header">CSS</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(5)}>
              <Icon icon="skill-icons:css" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">JavaScript</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(6)}>
              <Icon icon="skill-icons:javascript" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">React</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(7)}>
              <Icon icon="skill-icons:react-dark" />
            </div>
          </div>
          <div class="about-tech-wrapper">
            <div class="about-tech-header">Git</div>
            <div class="skill-icon-wrap" onClick={() => clickSkill(8)}>
              <Icon icon="skill-icons:git" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
