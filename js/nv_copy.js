const root = document.getElementById('root')
console.dir(root)
let abcd = document.createElement('div')
root.appendChild(abcd)
abcd.style.width = '100px'
abcd.style.height = '100px'
abcd.style.backgroundColor = 'blue'

const newDiv = {
  tagCate : 'div',
  tagAttri : 'id',
  attriMain : 'test-0',
}

let switchButton = true;
abcd.addEventListener("click",function(){
  if (switchButton == true){
    abcd.style.backgroundColor = 'red'
    switchButton = false;
  } else{
    abcd.style.backgroundColor = 'blue'
    switchButton = true;
  }
})
