const menuBtn = document.getElementById("menu-close-btn");
const menuSection = document.querySelector("section.mobile-menu");
const closeButton = document.getElementById("close-btn");
const menuItems = document.getElementsByClassName("menu-item");

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener("click", () => {
    menuSection.classList.remove("visible");
    menuBtn.style.display = "block";
  });
}

menuBtn.addEventListener("click", () => {
  menuSection.classList.add("visible");
  menuBtn.style.display = "none";
});

closeButton.addEventListener("click", () => {
  menuSection.classList.remove("visible");
  menuBtn.style.display = "block";
});

// project-details-window-popup

const data = [
  {
    id: 1,
    title: "Healthcare App",
    company: "Innovation Village",
    role: "Full Stack Developer",
    year: "2024",
    img1: "assets/images/HealthCare.png",
    img: "assets/images/HealthCare.png",
    description:
      "A smart way Application to assist users make  healthcare decisions and book appointments with doctors. It helps to save users booking time by 30%",
    languages: ["html", "css", "javascript", "Tailwind CSS", "React", "Rails"],
    liveLink: "https://healthcare-app-frontend.vercel.app/",
    sourceCode: "https://github.com/mahdinoori2000/healthcare-app-frontend",
  },
  {
    id: 2,
    title: "Keymono",
    company: "Keymono",
    role: "Front end  Developer",
    year: "2023",
    img1: "assets/images/keymono.png",
    img: "assets/images/keymono.png",
    description:
      "A website application the orchestrate the noise world of eCommerce. It makes the managing of products on eCommerce websites easy ",
    languages: [
      "html",
      "React",
      "Zustand",
      "css",
      "Headless UI",
      "javascript",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
    ],
    liveLink: "https://console.keymono.com/",
    sourceCode: "https://github.com/ismayito/Portfolio-",
  },
  {
    id: 3,
    title: "Travelers`s Hub",
    company: "MICROVERSE",
    role: "Full Stack Developer",
    year: "2023",
    img1: "assets/images/TravellersHub.png",
    img: "assets/images/TravellersHub.png",
    description:
      " React Javascript website project which makes use of react Javascript to hit the API, it displays a list of missions , rockets from the API to the user, the user is able to make a booking for the mission or cancel the booking of the earlier booked mission.",
    languages: ["html", "React", "Redux", "RestFull API", "css", "javascript"],
    liveLink: "https://spacetravelershubakhun.netlify.app/",
    sourceCode: "https://github.com/AbuTalha3/Space-Traveler-s-Hub",
  },
  {
    id: 4,
    title: "Tabler dashboard",
    company: "KEYMONO",
    role: "Front end Developer",
    year: "2023",
    img1: "assets/images/Tabler.png",
    img: "assets/images/Tabler.png",
    description:
      " A better way to view and analyze product sales and order statistics. It helps to track sales and orders of a specific product thus improving on product performance.",
    languages: ["html", "Next js", "Tailwind CSS", "css", "javascript"],
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
    languages: ["html", "css", "javascript"],
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
    languages: ["html", "React", "css", "javascript"],
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
      "This is the application that helps the user to track the expenses made at a particular time. It helps a user to smartly know on which items he spends most and also helps him to improve on his spending habitsThis is the application that helps the user to track the expenses made at a particular time. It helps a user to smartly know on which items he spends most and also helps him to improve on his spending habits",
    languages: [
      "html",
      "Ruby on rails",
      "Databases",
      "PostgreSQL",
      "css",
      "javascript",
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
    languages: ["html", "Material UI", "css", "javascript"],
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
              <a href='${liveLink}' class="PopUp-link">
               See live
                <span><img src="assets/images/live.svg" alt="live" /></span>
                
              </button>
              <button class="window-btn">
              <a href='${sourceCode}' class="PopUp-link">
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
