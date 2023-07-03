const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const modes = document.getElementById("modes");
const imgAbout = document.querySelector(".about img");
const portLayer = document.querySelectorAll(".portfolio-layer");
const arrows = document.querySelectorAll(".arrows");

// logo dark light
const image = document.getElementById("myLogoImage");
function toggleImage() {
   if (image.src.includes("img/logo/trahdark.png")) {
     image.src = "img/logo/trah.png";
   } else {
     image.src = "img/logo/trahdark.png";
   }
}





modes.addEventListener("click", function () {
  modes.classList.toggle("bxs-sun");
  toggleImage();
  document.body.classList.toggle("active-mode");
});

arrows.forEach((arr, index) => {
  arr.onclick = () => {
    arr.classList.toggle("bx-x");
    portLayer[index].classList.toggle("translated");
  };
});






document.addEventListener("click", (event) => {
  if (!event.target.closest(".arrows")) {
    portLayer.forEach((element) => {
      element.classList.remove("translated");
    });
    arrows.forEach((arr) => {
      arr.classList.remove("bx-x");
    });
  }
});

document.addEventListener("scroll", () => {
  portLayer.forEach((element) => {
    element.classList.remove("translated");
  });
  arrows.forEach((arr) => {
    arr.classList.remove("bx-x");
  });
});






menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });




  // sticky navbar
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);



  // remove toggle icon navbar whem click nsvbsr link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};




// typing
const typing = new Typed(".multiple-text", {
  strings: ["ReactJS", "NodeJS"],
  typeSpeed: 100,
  cursorChar: "|",
  loop: true,
});

//  scroll reveal

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content", { origin: "top" });
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-img", { origin: 'bottom'});
ScrollReveal().reveal(".about-content h3", { origin: 'left'});
ScrollReveal().reveal(".about .about-img", { origin: 'bottom' });
ScrollReveal().reveal(".skills-box, .portfolio-box", { origin: 'bottom' });


