// section Created

const arr = [
  {
    close: './project-images/Icon.png',
    logo: './project-images/one.png',
    title: 'Random name for project 1',
    tech: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!',
    id: '1',
    link: 'https://aminehlub.github.io/Microverse-Portfolio/',
    source: 'https://github.com/AmineHLub/Microverse-Portfolio/',
  },
  {
    close: './project-images/Icon.png',
    logo: './project-images/two.png',
    title: 'Random name for project 2',
    tech: ['ReactJS', 'Flask', 'Html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!',
    id: '2',
    link: 'https://aminehlub.github.io/Microverse-Portfolio/',
    source: 'https://github.com/AmineHLub/Microverse-Portfolio/',
  },
  {
    close: './project-images/Icon.png',
    logo: './project-images/three.png',
    title: 'Random name for project 3',
    tech: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!',
    id: '3',
    link: 'https://aminehlub.github.io/Microverse-Portfolio/',
    source: 'https://github.com/AmineHLub/Microverse-Portfolio/',
  },
  {
    close: './project-images/Icon.png',
    logo: './project-images/four.png',
    title: 'Random name for project 4',
    tech: ['css', 'JavaScript', 'html'],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!',
    id: '4',
    link: 'https://aminehlub.github.io/Microverse-Portfolio/',
    source: 'https://github.com/AmineHLub/Microverse-Portfolio/',
  },
  {
    close: './project-images/Icon.png',
    logo: './project-images/five.png',
    title: 'Random name for project 5',
    tech: ['Ruby on rails', 'bootstrap', 'html', 'css'],
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
  const closefun = document.querySelector('.close-modal');
  closefun.addEventListener('click', closeModal);
}
