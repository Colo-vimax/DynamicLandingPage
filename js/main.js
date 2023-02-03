'use strict';
// DOM Elements(OBJECTS)
const   time = document.getElementById('time'),
        greeting = document.getElementById('greeting'),
        userName = document.getElementById('name'),
        focus = document.getElementById('focus')

// options
const showAmPm = true

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds()

        // set AM or Pm
        const amPm = hour >= 12 ? 'PM' : 'AM'

        // 12hr Format
        hour = hour % 12 || 12

        // output Time
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`

        // call every seconds
        setTimeout(showTime, 1000)
}
// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n
}
// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours()

    if (hour < 12) {
        // morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')"
        greeting.textContent ='Good Morning'
    }else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')"
        greeting.textContent ='Good Afternoon'
    }else {
        // Evening
        document.body.style.backgroundImage = "url('../img/evening.jpg')"
        greeting.textContent ='Good Evening'
        document.body.style.color = 'white'
    }
}
// get Name
function getName() {
    if (localStorage.getItem('name') === '') {   
        userName.textContent = '[Enter Username]'      
    } else {      
        userName.textContent = localStorage.getItem('name')
    }
}
// set Name
function setName(e) {
    if(e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            userName.blur()
        }
        }else {
            localStorage.setItem('name', e.target.innerText);
        }
}

// get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]'      
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

// set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        // make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur()
        }
        }else {
            localStorage.setItem('focus', e.target.innerText);
        }
}

userName.addEventListener('keypress', setName)
userName.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)

// RUN
showTime()
setBgGreet()
getName()
getFocus()