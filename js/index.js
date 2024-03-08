const menuBtn = document.getElementById("menu-close-btn");
const menuSection = document.querySelector("section.mobile-menu");
const closeButton = document.getElementById("close-btn");
const menuItems = document.getElementsByClassName("menu-item");

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

// project-details-window-popup

const data = [
  {
    id: 1,
    title: "Tonic",
    company: "CANOPY",
    role: "Back End Dev",
    year: "2015",
    img1: "assets/images/project-1.svg",
    img: "assets/images/Snapshoot Portfolio.svg",
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
    img1: "assets/images/project-2.svg",
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
    img1: "assets/images/project-3.svg",
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
    img1: "assets/images/project-4.svg",
    img: "assets/images/project-2.svg",
    description:
      " A better way to view and analyze product sales and order statistics. It helps to track sales and orders of a specific product thus improving on product performance.",
    languages: ["HTML", "Next js", "Tailwind CSS", "CSS", "JavaScript"],
    liveLink: "https://tabler-io-project.vercel.app/",
    sourceCode: "https://github.com/ismayito/Tabler.io-Project",
  },
  {
    id: 5,
    title: "BUMSA CONFERENCE",
    company: "MICROVERSE",
    role: "Full Stack Developer",
    year: "2023",
    img1: "assets/images/Conference.png",
    img: "assets/images/Conference.png",
    description:
      "A conference website where different conferences are listed. It helps to make the booking of conference easy and improves conference attendance easy by sending attendance alerts to users.",
    languages: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://ismayito.github.io/Capstone-Project-1/",
    sourceCode: "https://github.com/ismayito/Capstone-Project-1",
  },
  {
    id: 6,
    title: "Financial Data App",
    company: "MICROVERSE",
    role: "Full stack Developer",
    year: "2018",
    img1: "assets/images/Financial_app.png",
    img: "assets/images/Financial_app.png",
    description:
      "This app was used to display the current financial data status from different financial and foreign exchange institutions and companies. The user can see the available statics and is able to make an informed decision.This data was fetched and provided by financial public API.The user can also search for specific financial data",
    languages: ["HTML", "React", "CSS", "JavaScript"],
    liveLink: "https://animated-nougat-6a7347.netlify.app/",
    sourceCode: "https://github.com/ismayito/financial-data-app",
  },
  {
    id: 7,
    title: "Budgetary",
    company: "MICROVERSE",
    role: "Full stack developer",
    year: "2023",
    img1: "assets/images/Budget.png",
    img: "assets/images/Budget.png",
    description:
      "This is the application that helps the user to track the expenses made at a particular time. It helps a user to smartly know on which items he spends most and also helps him to improve on his spending habits.",
    languages: [
      "HTML",
      "Ruby on Rails",
      "Databases",
      "PostgreSQL",
      "CSS",
      "JavaScript",
    ],
    liveLink: "https://rails-budget-app-tee4.onrender.com/",
    sourceCode: "https://github.com/ismayito/Rails-budget-app",
  },
  {
    id: 8,
    title: "Bags Shop",
    company: "INNOVATION VILLAGE",
    role: "Full Stack Dev",
    year: "2023",
    img1: "assets/images/BagsShop.png",
    img: "assets/images/BagsShop.png",
    description:
      "A premier destination for high-quality bags and accessories that combine style, functionality, and durability.Your bag is more than just an accessory—it's a reflection of your personality and lifestyle. That's why we're dedicated to curating a diverse collection of bags that cater to every taste and need.",
    languages: ["HTML", "Material UI", "CSS", "JavaScript"],
    liveLink: "https://mybags-shop.netlify.app/",
    sourceCode: "https://github.com/ismayito/Portfolio-",
  },
];

function createPopUp(
  id,
  title,
  company,
  description,
  role,
  year,
  img1,
  img,
  languages,
  liveLink,
  sourceCode
) {
  return `
  <section class="popup-window"  id="popup-project-${id}">
   <section class="modal-mobile" id="popup-project-${id}">
        <div class="modal-head">
          <h2 class="title">${title}</h2>
          <img
            src="assets/images/close-window.svg"
            alt="close-window"
            class="close-window"
            id="close-${id}"
          />
        </div>
        <ul class="categories">
          <li class="item1">${company}</li>
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
          src="${img1}"
          class="project-1 project"
          alt="project-one"
        />

        <img
          src="${img}"
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
            ${languages.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <img src="assets/images/vector 4.svg" alt="line" class="line" />
            <div class="window-buttons">
              <button class="window-btn">
              <a href='${liveLink}' target="_blank" class="PopUp-link">
               See live
                <span><img src="assets/images/live.svg" alt="live" /></span>
                
              </button>
              <button class="window-btn">
              <a href='${sourceCode}'target="_blank" class="PopUp-link">
                See source
                <span
                  ><img src="assets/images/git-modal.svg" alt="source code"
                /></span>
              </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>

  `;
}

let final = "";
data.forEach((item) => {
  const html = createPopUp(
    item.id,
    item.title,
    item.company,
    item.description,
    item.role,
    item.year,
    item.img1,
    item.img,
    item.languages,
    item.liveLink,
    item.sourceCode
  );
  final += html;
});

document.getElementById("popup-container").innerHTML = final;

// event listeners

data.forEach((item) => {
  // open event
  const { id } = item;

  document.getElementById(`openpop-${id}`).addEventListener("click", () => {
    document.getElementById(`popup-project-${id}`).classList.add("visible");
  });
  // close event
  document.getElementById(`close-${id}`).addEventListener("click", () => {
    document.getElementById(`popup-project-${id}`).classList.remove("visible");
  });
});

/* eslint-disable */
