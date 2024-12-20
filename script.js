
const root = document.querySelector('#root');

const appName = document.createElement('h1');
appName.innerText = 'Focus On ';
appName.classList.add('heading-container');
root.append(appName);

const headingSpan = document.createElement('span');
headingSpan.innerText = 'Today';
headingSpan.classList.add('span1');
appName.append(headingSpan);

const borderDiv = document.createElement('div');
borderDiv.classList.add('main-container');
root.append(borderDiv);

const p_today = document.createElement('h2');
p_today.classList.add('today-container');
p_today.innerText = 'Today';
borderDiv.append(p_today);

const sunImg = document.createElement('img');
sunImg.src = 'images/Sun.png';
sunImg.classList.add('sunimg');
p_today.append(sunImg);

const pForBar = document.createElement('p');
pForBar.innerText = 'Raise the bar by completing your goals';
pForBar.classList.add('bar-container');
borderDiv.append(pForBar);

const progessbar = document.createElement('div');
progessbar.classList.add('progessbar-container');
progessbar.textContent = '';
borderDiv.append(progessbar);

const horizontalLine = document.createElement('hr');
borderDiv.append(horizontalLine);

let totalGoals = 0;
let completedGoals = 0;

function goalElement(container, goalClass, radioClass, inputClass, placeholderText) {
    const divForGoal = document.createElement('div');
    divForGoal.classList.add(goalClass);
    container.append(divForGoal);

    const radioInput = document.createElement('input');
    radioInput.classList.add(radioClass);
    radioInput.type = 'radio';
    radioInput.disabled = true; // Disable radio by default
    divForGoal.append(radioInput);

    const input = document.createElement('input');
    input.classList.add(inputClass);
    input.type = 'text';
    input.placeholder = placeholderText;
    divForGoal.append(input);

    totalGoals++;

    // Listen to input change to enable or disable the radio button
    input.addEventListener('input', () => {
        if (input.value.trim() === '') {
            radioInput.disabled = true;
            radioInput.checked = false;
        } else {
            radioInput.disabled = false;
        }
        updatesProgessBar();
    });

    // Listen to radio input change to handle task completion
    radioInput.addEventListener('change', () => {
        if (radioInput.checked) {
            input.classList.add('crossed');
            pForBar.innerText = input.value || 'Raise the bar by completing your goals';
            completedGoals++;
            moveTaskToCompleted(divForGoal);
        } else {
            input.classList.remove('crossed');
            pForBar.innerText = 'Raise the bar by completing your goals';
            completedGoals--;
            moveTaskToIncomplete(divForGoal);
        }
        updatesProgessBar();
    });
}

function moveTaskToCompleted(taskElement) {
    // Move completed task above the horizontal line
    borderDiv.insertBefore(taskElement, horizontalLine);
}

function moveTaskToIncomplete(taskElement) {
    // Move incomplete task back below the horizontal line
    borderDiv.append(taskElement);
}

function updatesProgessBar() {
    const progress = (completedGoals / totalGoals) * 100;

    if (completedGoals === 0) {
        progessbar.style.width = '0%';
        progessbar.style.backgroundColor = 'none';
        progessbar.innerText = '';
        warningP.innerText = 'Please, write your goals';
    } else {
        progessbar.style.width = `${progress}%`;
        progessbar.style.backgroundColor = 'green';
        progessbar.innerText = `${completedGoals} / ${totalGoals} of the task is completed`;
    }
}

const borderDivv = document.querySelector('.main-container');

// Create goal elements dynamically
for (let index = 0; index < 10; index++) {
    goalElement(borderDivv, 'divforgoal-container', 'radio', 'input-container', 'Enter your goal');
}

const progress = document.createElement('p');
progress.innerText = '“Keep Going, You’re making great progress!”';
progress.classList.add('progress-container');
borderDiv.append(progress);

const last = document.createElement('p');
last.innerText = '“Made with ❤️ by Mukesh Kumar”';
last.classList.add('last-container');
borderDiv.append(last);
