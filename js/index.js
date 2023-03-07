const menuBtn = document.getElementById("menu-close-btn");
const menuSection = document.querySelector("section.mobile-menu");
const closeButton = document.getElementById("close-btn");
const menuItems = document.getElementsByClassName("menu-item");
const OpenProjectBtn = document.getElementsByClassName('see-project');
const PopUp = document.querySelector("section.modal-mobile");
const ClosePopUp = document.querySelector("img.close-window");

for (let i = 0; i < OpenProjectBtn.length; i += 1) {
  OpenProjectBtn[i].addEventListener("click", () => {
    PopUp.classList.add("visible");
  });
}

ClosePopUp.addEventListener("click", function(){
  PopUp.classList.remove("visible");
})

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

const projectDetails = [
  {
    title: "Tonic",
    technologies: ["CANOPY", "Back end", 2015],
    img: "assets/images/Counter.svg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ["html", "css", "javascript"],
    liveLink: "https://ismayito.github.io/Portfolio-/",
    sourceCode: "https://github.com/ismayito/Portfolio-",
  },
];
