
const root = document.getElementById('root')
const moveAside = document.getElementById('move-btn')
const ulLi = document.querySelector('#root > main > section ul li')
const leftSec = root.children[0].children[0]
const rightSec = root.children[0].children[1]

console.dir(root)
console.log(root.children[0].children.length)
console.dir(moveAside)
console.dir(leftSec)
console.dir(rightSec)
//body
root.parentNode.style.margin = '0px';
root.parentNode.style.padding = '0px';
root.parentNode.style.boxSizing = 'border-box';
root.parentNode.style.overflowX = 'hidden'

//#root
root.style.width = '100vw';
root.style.height = '100vw';
root.style.backgroundColor = 'cadetblue';
root.style.display = 'flex';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';

//#root > main
root.children[0].style.width = '500px';
root.children[0].style.height = '500px';
root.children[0].style.border = '1px black dotted';
root.children[0].style.display = 'flex';
root.children[0].style.justifyContent = 'center';
root.children[0].style.alignItems = 'center';

//#root > main > section 
for(let i=0;i<root.children[0].children.length;i++){
  root.children[0].children[i].style.width = '200px';
  root.children[0].children[i].style.height = '450px';
  root.children[0].children[i].style.display = 'flex';
  root.children[0].children[i].style.justifyContent = 'center';
  root.children[0].children[i].style.alignItems = 'center';
}


//#root > main > section > ul
function makeEle(/*idValue*/){                //ul 생성함수
  let makeUl = document.createElement('ul');
  // makeUl.id = 'idValue';
  return makeUl
}
leftSec.appendChild(makeEle())
// leftSec.children[0].style.width = '100%'
leftSec.children[0].style.listStyle = 'none'
leftSec.children[0].style.padding = '0px'
rightSec.children[0].style.listStyle = 'none'
rightSec.children[0].style.padding = '0px'
// for(let i=0;i<root.children[0].children.length;i++){
  //   root.children[0].children[i].children[0].style.justifyContent = 'center';
  //   root.children[0].children[i].children[0].style.listStyle = 'none';
// }


//#root > main > section  ul  li
// ulLi.style.width = '100%'
// ulLi.style.height = '50px';
// ulLi.style.backgroundColor = '#fff';
// ulLi.style.border = '1px black solid';

//#root > main > section > ul > li

let tictok = true;
for(let ind=0; ind<5;ind++){
  let makeLi=document.createElement('li')
  makeLi.innerText = `items-${ind}`;
  makeLi.style.height = '50px';
  makeLi.style.backgroundColor = '#fff';
  makeLi.style.border = '1px black solid';
  leftSec.children[0].appendChild(makeLi)
  // rightSec.children[0].appendChild(makeLi)
}
// moveAside.addEventListener("click",function(){
//   if(tictok===true){
//     for(let ind=0; ind<5;ind++){
//       let makeLi=document.createElement('li')
//       makeLi.innerText = `items-${ind}`;
//       makeLi.style.height = '50px';
//       makeLi.style.backgroundColor = '#fff';
//       makeLi.style.border = '1px black solid';
//       rightSec.children[0].appendChild(makeLi)
//     }
//     tictok=false
//   } else {
//     for(let ind=0; ind<5;ind++){
//       let makeLi=document.createElement('li')
//       makeLi.innerText = `items-${ind}`;
//       makeLi.style.height = '50px';
//       makeLi.style.backgroundColor = '#fff';
//       makeLi.style.border = '1px black solid';
//       leftSec.children[0].appendChild(makeLi)
//     }
    
//     tictok=true
//   }
//   })                       

//#root > main > section:first-child or section nth-child(0)
// leftSec.style.width = '200px' 
// leftSec.style.height = '450px' 
// leftSec.style.display = 'flex';
// leftSec.style.justifyContent = 'center';
// leftSec.style.alignItems = 'center';
leftSec.style.border = '1px black solid';

//#root > main > section:last-child or section nth-child(1)
// rightSec.style.width = '200px' 
// rightSec.style.height = '450px' 
// leftSec.style.display = 'flex';
// leftSec.style.justifyContent = 'center';
// leftSec.style.alignItems = 'center';
rightSec.style.border = '1px blue solid';

//move-btn
moveAside.style.width = '200px'
moveAside.style.height = '200px'
moveAside.style.backgroundColor = '#FFF'
moveAside.style.borderRadius = '50%'
moveAside.style.position = 'fixed'
moveAside.style.bottom = '10px'
moveAside.style.left = '50vw'
moveAside.style.transform = 'translate(-50%, 0)'
moveAside.style.display = 'flex';
moveAside.style.justifyContent = 'center';
moveAside.style.alignItems = 'center';

console.log(leftSec.children[0].children)

let leftLi = []
let rightLi = {}
for (let key in leftSec.children[0]){
  // rightSec.children[0].push(key)
  leftLi.push(key)
}

console.dir(leftLi)
