const menuBtn = document.getElementById("menu-close-btn");
const menuSection = document.querySelector("section.mobile-menu");
const closeButton = document.getElementById("close-btn");
const menuItems = document.getElementsByClassName("menu-item");
const OpenProjectBtn = document.getElementsByClassName("see-project");
const PopUp = document.querySelector("section.modal-mobile");
const ClosePopUp = document.querySelector("img.close-window");

for (let i = 0; i < OpenProjectBtn.length; i += 1) {
  OpenProjectBtn[i].addEventListener("click", () => {
    PopUp.classList.add("visible");
  });
}

ClosePopUp.addEventListener("click", function () {
  PopUp.classList.remove("visible");
});

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener("click", () => {
    menuSection.classList.remove("visible");
  });
}

menuBtn.addEventListener("click", () => {
  menuSection.classList.add("visible");
});

closeButton.addEventListener("click", () => {
  menuSection.classList.remove("visible");
});

// project-details-mobile

const data = [
  {
    id: 1,
    title: "Tonic",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    img: "assets/images/Counter.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["html", "css", "javascript"],
    liveLink: "https://ismayito.github.io/Portfolio-/",
    sourceCode: "https://github.com/ismayito/Portfolio-",
  },
  {
    id: 2,
    title: "Multi-Post Stories",
    company: "FACEBOOK",
    role: "Full Stack Dev",
    year: "2015",
    img: "assets/images/project-4.svg",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    liveLink: "https://ismayito.github.io/Portfolio-/",
    sourceCode: "https://github.com/ismayito/Portfolio-",
  },
  {
    id: 3,
    title: "Facebook 360",
    company: "FACEBOOK",
    role: "Full Stack Dev",
    year: "2015",
    img: "assets/images/project-1.svg",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    liveLink: "https://ismayito.github.io/Portfolio-/",
    sourceCode: "https://github.com/ismayito/Portfolio-",
  },
  {
    id: 4,
    title: "Uber Navigation",
    company: "Uber",
    role: "Lead Developer",
    year: "2018",
    img: "assets/images/project-1.svg",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    languages: ["html", "Ruby on rails", "css", "javascript"],
    liveLink: "https://ismayito.github.io/Portfolio-/",
    sourceCode: "https://github.com/ismayito/Portfolio-",
  },
];


function createPopUp(title, company, description,role,year,img,languages,liveLink) {
  return `
  <section class="modal-mobile">
        <div class="modal-head">
          <h2 class="title">${title}</h2>
          <img
            src="${img}"
            alt="close-window"
            class="close-window"
          />
        </div>
        <ul class="categories">
          <li class="item1">CANOPY</li>
          <li class="counter">
            <img
              class="img-counter"
              src="assets/images/Counter.svg"
              alt="Counter"
            />${role}
          </li>
          <li class="counter">
            <img
              class="img-counter"
              src="assets/images/Counter.svg"
              alt="Counter"
            />${year}
          </li>
        </ul>
        <img
          src="assets/images/project-1.svg"
          class="project-1 project"
          alt="project-one"
        />

        <img
          src="assets/images/Snapshoot Portfolio.svg"
          class="project-1 project-1-desktop"
          id="project1-desktop"
          alt="project-one"
        />
        <div class="project-wrapper">
          <article class="intro-works">
           ${description}
          </article>
          <div class="lang-buttons">
            <ul class="languages">
              <li>${languages[0]}</li>
              <li>${languages[0]}</li>
              <li>${languages[0]}</li>
            </ul>
            <img src="assets/images/vector 4.svg" alt="line" class="line" />
            <div class="window-buttons">
              <button class="window-btn">
                <li href=`${}`}">See live
                <span><img src="assets/images/live.svg" alt="live" /></span>
                </li>
              </button>
              <button class="window-btn">
                See source
                <span
                  ><img src="assets/images/git-modal.svg" alt="source code"
                /></span>
              </button>
            </div>
          </div>
        </div>
      </section>
  `
}
