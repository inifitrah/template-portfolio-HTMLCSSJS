const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("header nav a");
const imgAbout = document.querySelector(".about img");
const portLayer = document.querySelectorAll(".portfolio-layer");
const arrows = document.querySelectorAll(".arrows");
const image = document.getElementById("myLogoImage");
const modes = document.getElementById("modes");
const systemDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const containerModal = document.querySelector(".container-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn-modal");

const openModal = () => {
  containerModal.classList.remove("hidden");
};
const closeModal = () => {
  containerModal.classList.add("hidden");
};
// onload = openModal;
onload = setTimeout(() => {
   firstLoadModal()
}, 5000)

// modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-modal")) closeModal();
  if (e.target.classList.contains("overlay")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !containerModal.classList.contains("hidden"))
    closeModal();
});


// sintax oop tipis2 wkwkwk
class TemplateModal{
  static author = 'fitrah'
  constructor(judul, isi, btn = 'sip') {
    this.judul = judul,
      this.isi = isi
    this.btn = btn
  }
  metode() {
   modal.innerHTML = `<img src="img/kece.png" width="50px" height="50px" />
  <h1>${this.judul}</h1>
  <p>
   ${this.isi}
  </p>
  <a class="btn btn-modal">${this.btn}</a>`
  }
}

const firstLoadModal = () => {
  const firstLoadModal = new TemplateModal(
    "Welcome haha.",
    "Web ini akan terus saya update. Jika ada kritik atau saran atau apalah itu just call me wkwkw"
  );
  firstLoadModal.metode()
  openModal()
}

const modalPortf = () => {
  const modalPortf = new TemplateModal(
    "Project latihan",
    "Ini adalah project hasil ngikutin video wpu yang bagian javascript hehe",
    "kece"
  );
      modalPortf.metode();
      setTimeout(() => {
        openModal();
      }, 1000);
}
// modal akhir\

// mode page
function toggleImage() {
  if (image.src.includes("img/logo/trahdark.png")) {
    image.src = "img/logo/trah.png";
  } else {
    image.src = "img/logo/trahdark.png";
  }
}
if (systemDarkMode) {
  document.body.classList.toggle("active-mode");
  toggleImage()
}


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("bxs-moon")) {
    e.target.classList.toggle("bxs-sun");
    document.body.classList.toggle("active-mode");
    toggleImage();
  }
  // last
  // nav menu
  if (e.target.classList.contains("bx-menu")) {
    e.target.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  }
});


// arrow di portfbox
arrows.forEach((arr, index) => {
  let isEventActive = true
  arr.addEventListener("mouseenter", () => {
    arr.classList.add("bx-x");
    portLayer[index].classList.add("translated");
     if (isEventActive) {
       modalPortf();
       isEventActive = false;
     }
  });
  
  arr.addEventListener("click", () => {
    arr.classList.toggle("bx-x");
    portLayer[index].classList.toggle("translated");
    if (isEventActive) {
      modalPortf()
      isEventActive = false
    }
  });

});
// last



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

  // delete th transform
  portLayer.forEach((element) => {
    element.classList.remove("translated");
  });
  arrows.forEach((arr) => {
    arr.classList.remove("bx-x");
  });

  // sticky navbar
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon navbar whem click navbaer
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};




// // library
// // typing
const typing = new Typed(".typingjs", {
  strings: ["Web Developer", "FullStack JS"],
  typeSpeed: 100,
  cursorChar: "|",
});

//  scroll reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content", { origin: "top" });
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-img", { origin: "bottom" });
ScrollReveal().reveal(".about-content h3", { origin: "left" });
ScrollReveal().reveal(".about .about-img", { origin: "bottom" });
ScrollReveal().reveal(".skills-box, .portfolio-box", { origin: "bottom" });
