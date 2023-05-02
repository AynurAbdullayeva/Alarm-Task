const currentTime = document.querySelector("h1")
const content = document.querySelector(".content")
const selectMenu = document.querySelectorAll("select")
const setAlarmBtn = document.querySelector("button")

let clock
let isAlarmSet
let audio = document.querySelector("audio");
window.onload=function(){
    ringtone.play();
} 


//???// bu men yazdigimfunksiyadi islemir deye diger funksiyani internetden baxb yazdm alindi.
// function displayTime() {
//   var now = new Date();
//   time = now.toLocaleTimeString();
//   clock.textContent = time;
//   if (time === alarm) {
//     audio.play();
//   }
// }


const options = () => {
    for (let i = 12; i > 0; i--) {
      i = i < 10 ? `0${i}` : i
      let option = `<option value="${i}">${i}</option>`
      selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
    }
    for (let i = 59; i >= 0; i--) {
      i = i < 10 ? `0${i}` : i
      let option = `<option value="${i}">${i}</option>`
      selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
    }
    for (let i = 2; i > 0; i--) {
      let ampm = i == 1 ? "AM" : "PM"
      let option = `<option value="${ampm}">${ampm}</option>`
      selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
    }
  }
  
  options()

setInterval(() => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let ampm = "AM"
    if(hours >= 12) {
        hours = hours - 12
        ampm = "PM"
    }
    hours = hours == 0 ? hours = 12 : hours
    hours = hours < 10 ? "0" + hours : hours
    minutes = minutes < 10 ? "0" + minutes : minutes
    seconds = seconds < 10 ? "0" + seconds : seconds
    currentTime.innerText = `${hours}:${minutes}:${seconds} ${ampm}`

    if (alarmTime === `${hours}:${minutes} ${ampm}`) {
        audio.play()
    }
})



const setAlarm = () => {
    if (isAlarmSet) {
        alarmTime = ""
        audio.pause()
        clockImg.style.animation = ""
        content.classList.remove("disable")
        setAlarmBtn.innerText = "Set Alarm"
        return isAlarmSet = false
    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!")
    }
    alarmTime = time
    isAlarmSet = true
    content.classList.add("disable")
    setAlarmBtn.innerText = "Clear Alarm"
}

setAlarmBtn.addEventListener("click", setAlarm)