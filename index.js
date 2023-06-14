let first = document.querySelector(".frbox")
let second = document.querySelector(".scbox")
let rd = document.querySelector(".rdbox")
let btn = document.querySelector(".buton")


function needcolor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor; 
}

btn.onclick = () => {
   second.value = "#" + needcolor();
  rd.value= "#"+needcolor()
    first.style.backgroundImage=` linear-gradient(${second.value}, ${rd.value} )`

}