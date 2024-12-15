const root = document.querySelector('#root')

const appName = document.createElement('h1')
appName.innerText = 'Focus On Today'
appName.classList.add('heading-container')
root.append(appName)

const borderDiv = document.createElement('div')
borderDiv.classList.add('main-container')
root.append(borderDiv)

const p_today = document.createElement('h2')
p_today.classList.add('today-container')
p_today.innerText = 'Today'
borderDiv.append(p_today)


const pForBar = document.createElement('p')
pForBar.innerText= 'Raise the bar by completing your goals'
pForBar.classList.add('bar-container')
borderDiv.append(pForBar)

const raisingInput = document.createElement('input')
raisingInput.classList.add('raisingInput-container')
raisingInput.setAttribute('readonly', true);

borderDiv.append(raisingInput)

const warningP = document.createElement('p')
warningP.classList.add('setgoal-div')
warningP.innerText = 'set the goal'
borderDiv.append(warningP)

const list1 = document.createElement('div')
list1.setAttribute('contenteditable', 'true');

list1.classList.add('list1')
borderDiv.append(list1)

const radioButton = document.createElement('input');
radioButton.type = 'radio';
radioButton.classList.add('radio-button1'); 
list1.appendChild(radioButton);

// list2
const list2 = document.createElement('div')
list2.setAttribute('contenteditable', 'true');

list2.classList.add('list2')
borderDiv.append(list2)

const radioButton2 = document.createElement('input');
radioButton2.type = 'radio';
radioButton2.classList.add('radio-button2'); 
list2.appendChild(radioButton2);

//list3
const list3 = document.createElement('div')
list3.setAttribute('contenteditable', 'true');

list3.classList.add('list3')
borderDiv.append(list3)

const radioButton3 = document.createElement('input');
radioButton3.type = 'radio';
radioButton3.classList.add('radio-button3'); 
list3.appendChild(radioButton3);

const progress = document.createElement('p')
progress.innerText = '“Keep Going, You’re making great progress!”'
progress.classList.add('progress-container')
borderDiv.append(progress)
const last = document.createElement('p')
last.innerText = '“Made by Mukesh Kumar”'
last.classList.add('last-container')
borderDiv.append(last)


