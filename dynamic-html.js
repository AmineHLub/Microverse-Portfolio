// section Created
const buttonClick = document.querySelector('.clicked');
const modalSection = document.createElement('section');

document.querySelector('body').insertBefore(modalSection, document.querySelector('body').firstChild);
//modalSection.appendChild(divCont);
//divCont.appendChild(logoImg);
//divCont.appendChild(header);
//divCont.appendChild(technology);
//divCont.appendChild(description);
//divCont.appendChild(buttonsCont);




let arr=[
obj1 = {
    close : "./project-images/Icon.png",
    logo : "./project-images/one.png",
    title : "Project 1",
    tech : ["Ruby on rails","css","JavaScript","html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "1",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},
obj2 = {
    close : "./project-images/Icon.png",
    logo : "./project-images/two.png",
    title : "Project 2",
    tech : ["ReactJS","Flask","Html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "2",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},

obj3 = {
    close : "./project-images/Icon.png",
    logo : "./project-images/three.png",
    title : "Project 3",
    tech : ["Ruby on rails","css","JavaScript","html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "3",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},

obj4 = {
    close : "./project-images/Icon.png",
    logo : "./project-images/four.png",
    title : "Project 4",
    tech : ["css","JavaScript","html"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "4",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},
obj5 = {
    close : "./project-images/Icon.png",
    logo : "./project-images/five.png",
    title : "Project 5",
    tech : ["Ruby on rails","bootstrap","html","css"],
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae accusamus minima et officiis vel, unde cum saepe officia, iusto eaque doloremque commodi quisquam rem nisi error illum ipsa repellat!",
    id : "5",
    link : "https://aminehlub.github.io/Microverse-Portfolio/",
    source : "https://github.com/AmineHLub/Microverse-Portfolio/"
},

obj6 = {
    close : "./project-images/Icon.png",
    logo : "./project-images/six.png",
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
    document.querySelectorAll('.project-logo')[i].src=arr[i].logo;
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
const firstCont = document.createElement('div');
const divCont = document.createElement('div');
const closeX = document.createElement('img');
const ul = document.createElement('ul');
const logoImg = document.createElement('img');
const header = document.createElement('h1');
const technology = document.createElement('div');
const description = document.createElement('p');
const buttonsCont = document.createElement('div');
    alert(number+1)
// style Adding
divCont.classList.add("modal-container");
firstCont.classList.add("child-modal-container");
closeX.classList.add("modal-closeX");
logoImg.classList.add("modal-logo");
header.classList.add("modal-header");
technology.classList.add("modal-langs");
description.classList.add("modal-description");
buttonsCont.classList.add("modal-buttonsCont");
ul.classList.add("modal-ul");
//Logic & Section creation
    modalSection.appendChild(divCont);
    divCont.appendChild(firstCont);
    firstCont.appendChild(closeX);
    closeX.src=arr[number].close;   
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
document.querySelectorAll(".modal-buttonsCont > button")[0].innerText="See Live";
document.querySelectorAll(".modal-buttonsCont > button")[1].innerText="Source";
}
