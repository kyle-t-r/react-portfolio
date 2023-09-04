function NavBar() {
  return (
    <div class="nav-main" id="nav-main">
      <h3 class="nav-home">
        <a href="#home">KTR</a>
      </h3>
      <ul class="nav-list">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#exp">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    document.getElementById("nav-main").style.opacity = "1";
    document.getElementById("nav-main").style.transition = "0.10s ease-in-out";
  } else {
    document.getElementById("nav-main").style.opacity = "0";
  }
}
