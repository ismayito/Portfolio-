const menuBtn = document.getElementById('menu-close-btn');
const menuSection = document.querySelector('section.mobile-menu');
const closeButton = document.getElementById('close-btn');
const menuItems = document.getElementsByClassName('menu-item');

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].addEventListener('click', () => {
    menuSection.classList.remove('visible');
  });
}

menuBtn.addEventListener('click', () => {
  menuSection.classList.add('visible');
});

closeButton.addEventListener('click', () => {
  menuSection.classList.remove('visible');
});

// project-details-window-popup

const data = [
  {
    id: 1,
    title: 'Tonic',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    img1: 'assets/images/project-1.svg',
    img: 'assets/images/Snapshoot Portfolio.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript'],
    liveLink: 'https://ismayito.github.io/Portfolio-/',
    sourceCode: 'https://github.com/ismayito/Portfolio-',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    img1: 'assets/images/project-2.svg',
    img: 'assets/images/project-4.svg',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: 'https://ismayito.github.io/Portfolio-/',
    sourceCode: 'https://github.com/ismayito/Portfolio-',
  },
  {
    id: 3,
    title: 'Facebook 360',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    img1: 'assets/images/project-3.svg',
    img: 'assets/images/project-1.svg',
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: 'https://ismayito.github.io/Portfolio-/',
    sourceCode: 'https://github.com/ismayito/Portfolio-',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    img1: 'assets/images/project-4.svg',
    img: 'assets/images/project-2.svg',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    liveLink: 'https://ismayito.github.io/Portfolio-/',
    sourceCode: 'https://github.com/ismayito/Portfolio-',
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
  sourceCode,
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
            ${languages.map((item) => `<li>${item}</li>`).join('')}
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

let final = '';
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
    item.sourceCode,
  );
  final += html;
});

document.getElementById('popup-container').innerHTML = final;

// event listeners

data.forEach((item) => {
  // open event
  const { id } = item;

  document.getElementById(`openpop-${id}`).addEventListener('click', () => {
    document.getElementById(`popup-project-${id}`).classList.add('visible');
  });
  // close event
  document.getElementById(`close-${id}`).addEventListener('click', () => {
    document.getElementById(`popup-project-${id}`).classList.remove('visible');
  });
});
