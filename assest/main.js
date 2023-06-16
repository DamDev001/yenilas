const toggle = document.querySelector(".toggle")
const menu = document.querySelector(".menu-container")
const closeMeun = document.querySelector(".close")
const header = document.querySelector("header")

toggle.addEventListener("click", () =>{
    menu.classList.add("activeMenu")
})

closeMeun.addEventListener("click", () =>{
    menu.classList.remove("activeMenu")
})

const headerActive = function () {
    if (window.scrollY > 80) {
      header.classList.add("activeHeader");
    } else {
      header.classList.remove("activeHeader");
    }
}

window.addEventListener("scroll", headerActive)

// 
// ********TESTIMONY
// 

const testimonies = document.getElementsByClassName("testimony")
const dots = document.getElementsByClassName("dot")

const testimonySwith = (testimonyName) =>{
  for(list of dots){
    list.classList.remove("activeDot")
  }

  for(test of testimonies){
    test.classList.remove("activeTestimony")
  }
  event.currentTarget.classList.add("activeDot")
  document.getElementById(testimonyName).classList.add("activeTestimony")
}