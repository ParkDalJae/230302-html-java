const menu = document.getElementById('menu')
const firstLi = document.querySelector('#menu > li:nth-child(1)')//css방식으로 지정가능
// const childLi = document.querySelector('#menu > li')
// childLi.style.color = 'pink' //안됨.

console.log(firstLi)
console.dir(menu.children)

// menu.children[0].style.color='pink'
// menu.children[1].style.color='pink'
// menu.children[2].style.color='pink'
// menu.children[3].style.color='pink'
// menu.children[4].style.color='pink'

// let tictok = true;

// for(let i=0; i<menu.children.length;i++){
//   menu.children[i].style.color='pink'
//   menu.children[i].addEventListener('click',function(){
//     if(tictok===true){
//       menu.children[i].style.color = 'red'
//       menu.style.backgroundColor = 'black'
//       tictok = false
//     } else {
  //       menu.children[i].style.color = 'cadetblue'
  //       menu.style.backgroundColor = 'white'
  //       tictok = true
  //     }
  //   })
  // }
  
  
  
  // menu.children[2].addEventListener('click',function(){
    //   for(let i=0; i<menu.children.length;i++){
      //     menu.children[i].style.color = 'blue'
      //   }
      // })
      
      // for(let i=menu.children=length;i>0;i--){} //감산방식
      
      let switchValue = true;
      menu.style.backgroundColor = 'pink'
      menu.addEventListener('click', function() {
        if(switchValue === true) {                                    // 강사님 코드
          for(let i = 0; i< menu.children.length; i++) {
            menu.children[i].style.color = "pink";
            menu.style.backgroundColor = 'black'
          }
          switchValue = false;
        } else {
          for(let i = 0; i< menu.children.length; i++) {
            menu.children[i].style.color = "black";
            menu.style.backgroundColor = 'pink'
    }
    switchValue = true;
  }
});



