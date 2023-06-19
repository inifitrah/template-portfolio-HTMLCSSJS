let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let modes = document.getElementById("modes");


modes.addEventListener("click", function () {
  modes.classList.toggle("bxs-sun");
  document.body.classList.toggle("active-mode");
});


let portLayer = document.querySelectorAll(".portfolio-layer");
let arrows = document.querySelectorAll(".arrows");
console.log(arrows);

arrows.forEach((arr, index) => {
  console.log(arr)
  console.log(index)
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





// let portLayer = document.querySelectorAll(".portfolio-layer");
// let arrows = document.querySelectorAll(".arrows");
// console.log(arrows);

// arrows.forEach((arr) => {
//   console.log("console arr" + arr)
//   arr.onclick = () => {
//     arr.classList.toggle("bx-x");

//     portLayer.forEach((element) => {
//       console.log(element);
//       if (arr.classList.contains("bx-x")) {
//         element.classList.add("translated");
//       } else {
//         element.classList.remove("translated");
//       }
//     });
//   };
// });




// let portLayer = document.querySelectorAll(".portfolio-layer");
// let arrows = document.querySelectorAll(".arrows");
// console.log(arrows)
// arrows.onclick = () => {
//   arrows.forEach((arr) => {


//     arr.classList.toggle("bx-x");
  
//     portLayer.forEach((element) => {
//       console.log(element)
//       if (arrows.classList.contains("bx-x")) {
//         element.classList.add("translated");
//       } else {
//         element.classList.remove("translated");
//       }
//     });
//   }
    
// )}



// let portLayer = document.querySelectorAll(".portfolio-layer");
// let arrow = document.querySelector("#arrow");

// arrow.onclick = () => {
//   arrow.classList.toggle("bx-x");

//   portLayer.forEach((anu) => { 
  
    
//     for (i = 0; i < anu.length; i++) {
//       if (arrow.classList.contains("bx-x")) {
//         anu.style.transform = "translateY(0%)";
//       } else {
//         anu.style.transform = "translateY(100%)";
//       }
//     }
//   }) 
// };

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

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
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon navbar whem click nsvbsr link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};