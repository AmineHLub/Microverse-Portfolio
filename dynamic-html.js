// section Created
const buttonClick = document.querySelector('.clicked');
const modalSection = document.createElement('section');
const CloseX = document.createElement('div');
document.querySelector('body').insertBefore(modalSection, document.querySelector('body').firstChild);
//modalSection.appendChild(divCont);
//divCont.appendChild(logoImg);
//divCont.appendChild(header);
//divCont.appendChild(technology);
//divCont.appendChild(description);
//divCont.appendChild(buttonsCont);




let arr=[
obj1 = {
    logo : "",
    title : "Project 1",
    tech : ["Ruby on rails","css","JavaScript","html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "1",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},
obj2 = {
    logo : "",
    title : "Project 2",
    tech : ["ReactJS","Flask","Html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "2",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},

obj3 = {
    logo : "",
    title : "Project 3",
    tech : ["Ruby on rails","css","JavaScript","html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "3",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},

obj4 = {
    logo : "",
    title : "Project 4",
    tech : ["css","JavaScript","html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "4",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},
obj5 = {
    logo : "",
    title : "Project 5",
    tech : ["Ruby on rails","bootstrap","html","css"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "5",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},

obj6 = {
    logo : "",
    title : "Project 6",
    tech : ["css","JavaScript","html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "6",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},
]

//iterationJ will calculatehow many LI (list) were created
let iterationJ=0;

 ["Ruby on rails","css","JavaScript","html"]

for (let i=0; i<arr.length; i++) {
document.querySelectorAll('.project-name')[i].innerText=arr[i].title;
  for (let j=0; j<arr[i].tech.length;j++) {
    document.querySelectorAll('.languages')[i].appendChild(document.createElement('li')); 
    //how many Li created
    iterationJ++;
  }
}
//Arry of tech props
    let arr2=[''];
    for (let i=0; i<arr.length;i++) {
    Object.values(arr[i].tech).forEach(val => {
        arr2.push(val)
      });
      console.log(arr2);
}



// iterate through all the LI of the projects and add class 
for (let j=8; j<8+iterationJ; j++) {
    document.querySelectorAll('li')[j].classList.add("lang-btns");
    document.querySelectorAll('li')[j].innerText= arr2[j-7];
}

 



function modalCreation (number) {
//get rid of the previous Modal
const divContExists = document.getElementsByClassName('modal-container');
if (divContExists.length) divContExists[0].remove();
//HTML elements creation (not needed)
const divCont = document.createElement('div');
const ul = document.createElement('ul');
const logoImg = document.createElement('div');
const header = document.createElement('h1');
const technology = document.createElement('div');
const description = document.createElement('p');
const buttonsCont = document.createElement('div');
    alert(number+1)
// style Adding
divCont.classList.add("modal-container");
logoImg.classList.add("modal-logo");
header.classList.add("modal-header");
technology.classList.add("modal-langs");
description.classList.add("modal-description");
buttonsCont.classList.add("modal-buttonsCont");
ul.classList.add("modal-ul");
//Logic & Section creation
    modalSection.appendChild(divCont);
    divCont.appendChild(logoImg);
    logoImg.innerText="did this come";
    divCont.appendChild(header);
    header.innerText=arr[number].title;
    divCont.appendChild(technology);
    technology.appendChild(ul)
    for (let i=0; i<arr[number].tech.length; i++){
        ul.appendChild(document.createElement('li'))
    document.querySelectorAll('.modal-ul > li')[i].innerText = arr[number].tech[i]; 
    }  
    divCont.appendChild(description);
    description.innerText = arr[number].description;
    divCont.appendChild(buttonsCont);
    for (let i=0; i<2; i++){
    (buttonsCont).appendChild(document.createElement('button'));
    
}
}
