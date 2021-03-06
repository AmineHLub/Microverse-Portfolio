// section Created

const arr = [
  {
    close: './project-images/Icon.png',
    logo: './project-images/portfolio.png',
    title: 'Microverse Portfolio Project',
    tech: ['css', 'JavaScript', 'html'],
    description: 'This is Microverse\'s first module project. It\'s a figma replication attempt. It\'s a template portfolio',
    id: '1',
    link: 'https://aminehlub.github.io/Microverse-Portfolio/',
    source: 'https://github.com/AmineHLub/Microverse-Portfolio/',
  },
  {
    close: './project-images/Icon.png',
    logo: './project-images/capstone.png',
    title: 'WEBuild - Capstone',
    tech: ['css', 'JavaScript', 'html'],
    description: 'This is a Microverse capstone project. It\'s an imaginary bootCamp website that would teach its students web development.',
    id: '2',
    link: 'https://aminehlub.github.io/Capstone-1/',
    source: 'https://github.com/AmineHLub/Capstone-1',
  },
  {
    close: './project-images/Icon.png',
    logo: './project-images/booklist.png',
    title: 'Awesome books',
    tech: ['css', 'JavaScript', 'html'],
    description: ' This a webpage to create books and store them in your local storage. You will start first by adding the book name and the book\'s author name. On adding the data will be saved in the browser and you can remove them whenever you like.',
    id: '3',
    link: 'https://aminehlub.github.io/Awesome-books/',
    source: 'https://github.com/AmineHLub/Awesome-books',
  },
  {
    close: './project-images/Icon.png',
    logo: './project-images/todo.png',
    title: 'Random name for project 4',
    tech: ['css', 'JavaScript', 'html', 'webpack'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!',
    id: '4',
    link: 'https://aminehlub.github.io/webpack-exercise/dist/',
    source: 'https://github.com/AmineHLub/To-Do-List',
  },
  {
    close: './project-images/Icon.png',
    logo: './project-images/five.png',
    title: 'Random name for project 5',
    tech: ['Ruby', 'bootstrap', 'html', 'css'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!',
    id: '5',
    link: 'https://aminehlub.github.io/Microverse-Portfolio/',
    source: 'https://github.com/AmineHLub/Microverse-Portfolio/',
  },

  {
    close: './project-images/Icon.png',
    logo: './project-images/six.png',
    title: 'Random name for project 6',
    tech: ['css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!',
    id: '6',
    link: 'https://aminehlub.github.io/Microverse-Portfolio/',
    source: 'https://github.com/AmineHLub/Microverse-Portfolio/',
  },
];

// iterationJ will calculatehow many LI (list) were created
let iterationJ = 0;

for (let i = 0; i < arr.length; i += 1) {
  document.querySelectorAll('.project-logo')[i].src = arr[i].logo;
  document.querySelectorAll('.project-name')[i].innerText = arr[i].title;
  for (let j = 0; j < arr[i].tech.length; j += 1) {
    document.querySelectorAll('.languages')[i].appendChild(document.createElement('li'));
    // how many Li created
    iterationJ += 1;
  }
}
// Arry of tech props
const arr2 = [''];
for (let i = 0; i < arr.length; i += 1) {
  Object.values(arr[i].tech).forEach((val) => {
    arr2.push(val);
  });
}

// iterate through all the LI of the projects and add class
for (let j = 8; j < 8 + iterationJ; j += 1) {
  document.querySelectorAll('li')[j].classList.add('lang-btns');
  document.querySelectorAll('li')[j].innerText = arr2[j - 7];
}

// Add buttons on click events using JS

// eslint-disable-next-line no-unused-vars
function closeModal() {
  document.querySelector('body').firstChild.remove();
  document.querySelector('*').style.overflow = 'auto';
  document.querySelector('#whole-wrapper').classList.remove('activeblur');
}

// eslint-disable-next-line no-unused-vars
function modalCreation(number) {
  // get rid of the previous Modal
  const divContExists = document.getElementsByClassName('modal-container');
  if (divContExists.length) divContExists[0].remove();
  const modalSection = document.createElement('section');
  document.querySelector('body').insertBefore(modalSection, document.querySelector('body').firstChild);
  // HTML elements creation (not needed)
  const firstCont = document.createElement('div');
  const divCont = document.createElement('div');
  const closeX = document.createElement('img');
  const closeXLink = document.createElement('a');
  const ul = document.createElement('ul');
  const divDesk = document.createElement('div');
  const header = document.createElement('h1');
  const technology = document.createElement('div');
  const description = document.createElement('p');
  const buttonsCont = document.createElement('div');
  // style Adding
  divCont.classList.add('modal-container');
  firstCont.classList.add('child-modal-container');
  closeX.classList.add('modal-closeX');
  divDesk.classList.add('modal-desk');
  header.classList.add('modal-header');
  technology.classList.add('modal-langs');
  description.classList.add('modal-description');
  buttonsCont.classList.add('modal-buttonsCont');
  closeXLink.classList.add('close-modal');
  ul.classList.add('modal-ul');
  // Logic & Section creation
  modalSection.appendChild(divCont);
  divCont.appendChild(firstCont);
  firstCont.appendChild(buttonsCont);
  firstCont.appendChild(closeXLink);
  closeXLink.appendChild(closeX);
  divDesk.appendChild(header);
  closeX.src = arr[number].close;
  document.querySelector('#whole-wrapper').classList.add('activeblur');
  document.querySelector('*').style.overflow = 'hidden';

  // Background-Image
  divCont.appendChild(header);
  header.innerText = arr[number].title;
  divCont.appendChild(technology);
  technology.appendChild(ul);
  for (let i = 0; i < arr[number].tech.length; i += 1) {
    ul.appendChild(document.createElement('li'));
    document.querySelectorAll('.modal-ul > li')[i].innerText = arr[number].tech[i];
  }
  divCont.appendChild(description);
  description.innerText = arr[number].description;
  divCont.appendChild(buttonsCont);
  for (let i = 0; i < 2; i += 1) {
    (buttonsCont).appendChild(document.createElement('a'));
  }
  document.querySelectorAll('.modal-buttonsCont > a')[0].classList.add('see-live');
  document.querySelectorAll('.modal-buttonsCont > a')[1].classList.add('source');
  document.querySelector('.child-modal-container').style.backgroundImage = `url(${arr[number].logo})`;
  document.querySelectorAll('.modal-buttonsCont a')[0].href = arr[number].link;
  document.querySelectorAll('.modal-buttonsCont a')[1].href = arr[number].source;
  document.querySelectorAll('.modal-buttonsCont a')[0].target = '_blank';
  document.querySelectorAll('.modal-buttonsCont a')[1].target = '_blank';
  const closefun = document.querySelector('.close-modal');
  closefun.addEventListener('click', closeModal);
}

for (let i = 0; i < arr.length; i += 1) {
  const number = document.querySelectorAll('.articles > .flexible-items-inside-grid > button')[i].getAttribute('data-number');
  document.querySelectorAll('.articles > .flexible-items-inside-grid > button')[i].addEventListener('click', () => { modalCreation(number); });
}