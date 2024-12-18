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
pForBar.innerText = 'Raise the bar by completing your goals'
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
warningP.innerText = 'Please set all the goals!'
borderDiv.append(warningP)

let totalGoals = 0
let completedGoals = 0


function goalElement(container, goalClass, radioClass, inputClass, placeholderText) {


    const divForGoal = document.createElement('div')
    divForGoal.classList.add(goalClass)
    borderDiv.append(divForGoal)

    const radioInput = document.createElement('input')
    radioInput.classList.add(radioClass)
    radioInput.type = 'radio'
    divForGoal.append(radioInput)

    const input = document.createElement('input')
    input.classList.add(inputClass)
    input.type = 'text'
    input.placeholder = placeholderText
    divForGoal.append(input)

    container.append(divForGoal)

    totalGoals++

    radioInput.addEventListener('change', () => {
        if(radioInput.checked){
            input.classList.add('crossed')
            pForBar.innerText = input.value
            completedGoals++

            if(radioInput.checked && input.value === ''){
                pForBar.innerText = 'Raise the bar by completing your goals'
        
            } else {
                pForBar.innerText = input.value
        
            }

        } else {
            input.classList.remove('crossed')
            pForBar.innerText = 'Raise the bar by completing your goals'
            completedGoals--
        }
        updatesProgessBar()
    })
 
}
function updatesProgessBar() {
    const progress = (completedGoals/totalGoals)
    progessvalue.style.width = `${progress}`
    progessvalue.style.width = (completedGoals/totalGoals)
    progessvalue.style.backgroundColor = 'green'
    progessvalue.innerText = `${completedGoals} / ${totalGoals} of the task is completed`
}

const borderDivv = document.querySelector('.main-container')

goalElement(borderDivv, 'divforgoal-container', 'radio', 'input-container', 'Enter your goal')
goalElement(borderDivv, 'divforgoal-container', 'radio', 'input-container', 'Enter your goal')
goalElement(borderDivv, 'divforgoal-container', 'radio', 'input-container', 'Enter your goal')
goalElement(borderDivv, 'divforgoal-container', 'radio', 'input-container', 'Enter your goal')
goalElement(borderDivv, 'divforgoal-container', 'radio', 'input-container', 'Enter your goal')


const progress = document.createElement('p')
progress.innerText = '“Keep Going, You’re making great progress!”'
progress.classList.add('progress-container')
borderDiv.append(progress)
const last = document.createElement('p')
last.innerText = '“Made with ❤️ by Mukesh Kumar”'
last.classList.add('last-container')
borderDiv.append(last)
