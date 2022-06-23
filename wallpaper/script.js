var clockRootElement = document.querySelector("#clock")
var backgroundElement = document.querySelector("#background")
var main = document.querySelector("main")
var week = [
  "天",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
]

setInterval(function () {
  let time = new Date()
  if (time.getHours() >= 22 || time.getHours() <= 7) {
    backgroundElement.style.backgroundImage = "url(./night.jpg)"
    main.style.background = "rgb(122, 129, 183)"
    clockRootElement.style.color = "#fff"
    clockRootElement.style.transform = "translate(-27%, -50%)"
    clockRootElement.style.textAlign = "left"
  }else {
    backgroundElement.style.backgroundImage = "url(./normal.jpg)"
    clockRootElement.style.color = "rgb(104, 167, 255)"
    main.style.background = "rgb(226,251,245)"
    clockRootElement.style.transform = ""
    clockRootElement.style.textAlign = "center"
  }
  query('#month').innerHTML = time.getMonth() + 1
  query("#day").innerHTML = time.getDate()
  query('#week').innerHTML = week[time.getDay()]
  query('#hour').innerHTML = time.getHours()
  query('#minute').innerHTML = time.getMinutes() >= 10 ? time.getMinutes().toString() : "0" + time.getMinutes().toString()
  query('#seconds').innerHTML = time.getSeconds() >= 10 ? time.getSeconds().toString() : "0" + time.getSeconds().toString()

  
  if (time.getDate() == 16 && time.getMonth()+1 == 10) {
    document.querySelector("#title").innerHTML = "祝你生日快乐，今年"+(time.getUTCFullYear()-2003).toString() +"岁了呢"
  }


}, 500)

function query(el) {
  return clockRootElement.querySelector(el)
}

var mouse = document.querySelector("#mouse")

window.addEventListener("mousemove", function (e) {
  mouse.style.left = e.clientX - mouse.clientWidth / 2 + "px"
  mouse.style.top = e.clientY - mouse.clientHeight / 2 + "px"
})