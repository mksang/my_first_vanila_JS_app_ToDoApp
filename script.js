const root = document.querySelector('#root')

const appName = document.createElement('h1')
appName.innerText = 'Focus On '
appName.classList.add('heading-container')
root.append(appName)

const headingSpan = document.createElement('span')
headingSpan.innerText = 'Today'
headingSpan.classList.add('span1')
appName.append(headingSpan)

const borderDiv = document.createElement('div')
borderDiv.classList.add('main-container')
root.append(borderDiv)

const p_today = document.createElement('h2')
p_today.classList.add('today-container')
p_today.innerText = 'Today'
borderDiv.append(p_today)

const sunImg = document.createElement('img')
sunImg.src = 'images/Sun.png'
sunImg.classList.add('sunimg')
p_today.append(sunImg)



const pForBar = document.createElement('p')
pForBar.innerText= 'Raise the bar by completing your goals'
pForBar.classList.add('bar-container')
borderDiv.append(pForBar)

const progessbar = document.createElement('div')
progessbar.classList.add('progessbar-container')
borderDiv.append(progessbar)
const progessvalue = document.createElement('div')
progessvalue.classList.add('progessbar-value')
progessbar.append(progessvalue)

const warningP = document.createElement('p')
warningP.classList.add('setgoal-div')
warningP.innerText = 'Please set all the 3 goals!'
borderDiv.append(warningP)

//input 1

const divforgoal1 = document.createElement('div')
divforgoal1.classList.add('divforgoal1-container')
borderDiv.append(divforgoal1)

const radioInput1 = document.createElement('input')
radioInput1.classList.add('radio1')
radioInput1.type = 'radio'
divforgoal1.append(radioInput1)

const input1 = document.createElement('input')
input1.classList.add('input1-container')
input1.type = 'text'
input1.placeholder = 'Enter your goal';
divforgoal1.append(input1)

const tick1 = document.createElement('img')
tick1.src = 'images/Vector 1.png'
tick1.classList.add('tick1')
radioInput1.append(tick1)




//input 2

const divforgoal2 = document.createElement('div')
divforgoal2.classList.add('divforgoal2-container')
borderDiv.append(divforgoal2)

const radioInput2 = document.createElement('input')
radioInput2.classList.add('radio2')
radioInput2.type = 'radio'
divforgoal2.append(radioInput2)

const input2 = document.createElement('input')
input2.classList.add('input2-container')
input2.type = 'text'
input2.placeholder = 'Enter your goal';
divforgoal2.append(input2)

const tick2 = document.createElement('img')
tick2.src = 'images/Vector 1.png'
tick2.classList.add('tick2')
radioInput2.append(tick2)



//input 3

const divforgoal3 = document.createElement('div')
divforgoal3.classList.add('divforgoal3-container')
borderDiv.append(divforgoal3)

const radioInput3 = document.createElement('input')
radioInput3.classList.add('radio3')
radioInput3.type = 'radio'
divforgoal3.append(radioInput3)

const input3 = document.createElement('input')
input3.classList.add('input3-container')
input3.type = 'text'
input3.placeholder = 'Enter your goal';
divforgoal3.append(input3)


const tick3 = document.createElement('img')
tick3.src = 'images/Vector 1.png'
tick3.classList.add('tick3')
radioInput3.append(tick3)



const progress = document.createElement('p')
progress.innerText = '“Keep Going, You’re making great progress!”'
progress.classList.add('progress-container')
borderDiv.append(progress)
const last = document.createElement('p')
last.innerText = '“Made with ❤️ by Mukesh Kumar”'
last.classList.add('last-container')
borderDiv.append(last)


