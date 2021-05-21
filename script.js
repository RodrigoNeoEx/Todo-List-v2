const append = document.getElementById('infoSection');
const firstLineSection = document.createElement('section');
const lastLineSection = document.createElement('section');
const asideCollumSection = document.createElement('section');

function createInfoText() {
  const createP = document.createElement('p');
  createP.id = 'funcionamento';
  createP.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
  append.appendChild(createP);
}

function createFirstSection() {
  firstLineSection.className = 'firstLineBox';
  append.appendChild(firstLineSection);
}

function createBtnTasks() {
  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.innerText = 'Create Task';
  createButton.classList = 'styleHeadButtons';
  firstLineSection.appendChild(createButton);
}

function createInputAssigment() {
  const createInput = document.createElement('input');
  createInput.id = 'texto-tarefa';
  createInput.setAttribute('type', 'text');
  createInput.name = 'inputAssigment';
  createInput.classList = 'styleHeadButtons';
  firstLineSection.appendChild(createInput);
}

function createBtnSaveAllAssigments() {
  const saveAllAssigment = document.createElement('button');
  saveAllAssigment.id = 'salvar-tarefas';
  saveAllAssigment.innerText = 'Save Tasks';
  saveAllAssigment.classList = 'styleHeadButtons';
  firstLineSection.appendChild(saveAllAssigment);
}

function createLastSection() {
  lastLineSection.className = 'lastLineBox';
  append.appendChild(lastLineSection);
}

function createBtnRemove() {
  const createRemoveButton = document.createElement('button');
  createRemoveButton.id = 'remover-selecionado';
  createRemoveButton.innerText = 'Remove Choosed';
  createRemoveButton.classList = 'styleFooterButtons';
  lastLineSection.appendChild(createRemoveButton);
}

function createBtnFinished() {
  const removeFinishedButton = document.createElement('button');
  removeFinishedButton.id = 'remover-finalizados';
  removeFinishedButton.innerText = 'Remove Finished';
  removeFinishedButton.classList = 'styleFooterButtons';
  lastLineSection.appendChild(removeFinishedButton);
}

function createBtnClear() {
  const createclearAllButton = document.createElement('button');
  createclearAllButton.id = 'apaga-tudo';
  createclearAllButton.innerText = 'Remove All';
  createclearAllButton.classList = 'styleRmvAllButton';
  lastLineSection.appendChild(createclearAllButton);
}

function createAsideSection() {
  asideCollumSection.className = 'asideCollumBox'
  append.appendChild(asideCollumSection);
}

function createBtnUp() {
  const buttonUP = document.createElement('button');
  buttonUP.id = 'mover-cima';
  buttonUP.classList = 'mover-cima';
  buttonUP.innerText = '🔺' ;
  asideCollumSection.appendChild(buttonUP);
}

function createBtnDown() {
  const buttonDown = document.createElement('button');
  buttonDown.id = 'mover-baixo';
  buttonDown.classList = 'mover-baixo';
  buttonDown.innerText = '🔻' ;
  asideCollumSection.appendChild(buttonDown);
}

function createOl() {
  const createOL = document.createElement('ol');
  createOL.id = 'lista-tarefas';
  append.appendChild(createOL);
}

function callStructure() {
  createInfoText();
  createFirstSection();
  createBtnTasks();
  createInputAssigment();
  createBtnSaveAllAssigments();
  createLastSection();
  createBtnRemove();
  createBtnFinished();
  createBtnClear();
  createAsideSection();
  createBtnUp();
  createBtnDown();
  createOl();
}

function cleanAssigmentInput() {
  const inputed = document.getElementsByName('inputAssigment');
  inputed.forEach((element) => {
    element.value = '';
  });
}

function addAssignment() {
  document.getElementById('criar-tarefa');
  const getInput = document.getElementById('texto-tarefa').value;
  if (getInput !== '') {
    const addLI = document.createElement('li');
    const getID = document.getElementById('lista-tarefas');
    getID.appendChild(addLI);
    addLI.innerHTML = getInput;
    addLI.classList = 'assigmentList';
  }
  cleanAssigmentInput()
}


function chooseAssigmentList(event) {
  const elementAssigmentList = document.querySelectorAll('.assigmentList');
  for (let index = 0; index < elementAssigmentList.length; index += 1) {
    const element = elementAssigmentList[index];
    if (element.classList.value.includes('backgroundList')) {
      element.classList.remove('backgroundList');
    }
  }
  event.target.classList.add('backgroundList');
  document.querySelector('ol').classList = ''
}

function lineThroughAssigment(event) {
  if (event.target.classList.value.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function removeCompleted() {
  const elementAssigmentList = document.querySelectorAll('.assigmentList');
  const tarefas = document.getElementById('lista-tarefas');
  for (let index = 0; index < elementAssigmentList.length; index += 1) {
    const element = elementAssigmentList[index];
    if (element.classList.value.includes('completed')) {
      tarefas.removeChild(element);
      const assigmentToRemove = {
        text: element.innerText,
        class: element.className,
      };
      localStorage.removeItem(index, JSON.stringify(assigmentToRemove));
    }
  }
}

function removeAll() {
  const elementAssigmentList = document.querySelectorAll('.assigmentList');
  const tarefas = document.getElementById('lista-tarefas');
  for (let index = 0; index < elementAssigmentList.length; index += 1) {
    if (elementAssigmentList[index].classList.value.includes('assigmentList')) {
      tarefas.removeChild(elementAssigmentList[index]);
      localStorage.clear();
    }
  }
}
function removeChoosed() {
  const elementAssigmentList = document.querySelectorAll('.assigmentList');
  const tarefas = document.getElementById('lista-tarefas');
  for (let index = 0; index < elementAssigmentList.length; index += 1) {
    const element = elementAssigmentList[index];
    if (element.classList.value.includes('backgroundList')) {
      tarefas.removeChild(element);
      const assigmentToRemove = {
        text: element.innerText,
        class: element.className,
      };
      localStorage.removeItem(index, JSON.stringify(assigmentToRemove));
    }
  }
}
function selectedElement() {
  const liItens = document.querySelectorAll('li');
  for (let index = 0; index < liItens.length; index += 1) {
    if (liItens[index].classList.value.includes('backgroundList')) {
      const element = liItens[index];
      return element;
    }
  }
}

function moveUpTask() {
  const moveUP = selectedElement();
  if (selectedElement() === undefined) {
    return;
  } else if (moveUP.previousElementSibling) {
    moveUP.parentNode.insertBefore(moveUP, moveUP.previousElementSibling);
  }
}

function moveDownTask() {
  const moveDown = selectedElement();
  if (selectedElement() === undefined) {
    return;
  } else if (moveDown.nextElementSibling) {
    moveDown.parentNode.insertBefore(moveDown.nextElementSibling, moveDown);
  }
}

function buttonSaveAllTasks() {
  const assigmentTasks = document.getElementsByTagName('li');
  for (let index = 0; index < assigmentTasks.length; index += 1) {
    assigmentTasks[index].classList.add('saved-items');
    const assigmentToSave = {
      text: assigmentTasks[index].innerText,
      class: assigmentTasks[index].className,
    };
    localStorage.setItem(index, JSON.stringify(assigmentToSave));
  }
}

function recoveryLocalStorage() {
  const inputedTasks = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const recoveredTasks = document.createElement('li');
    const objectString = JSON.parse(localStorage.getItem(index));
    recoveredTasks.innerText = objectString.text;
    recoveredTasks.className = objectString.class;
    inputedTasks.appendChild(recoveredTasks);
  }
}

function listeners() {
  document.getElementById('criar-tarefa').addEventListener('click', addAssignment);
  document.querySelector('#lista-tarefas').addEventListener('click', chooseAssigmentList);
  document.querySelector('#lista-tarefas').addEventListener('dblclick', lineThroughAssigment);
  document.getElementById('remover-finalizados').addEventListener('click', removeCompleted);
  document.getElementById('apaga-tudo').addEventListener('click', removeAll);
  document.getElementById('remover-selecionado').addEventListener('click', removeChoosed);
  document.getElementById('mover-cima').addEventListener('click', moveUpTask);
  document.getElementById('mover-baixo').addEventListener('click', moveDownTask);
  document.getElementById('salvar-tarefas').addEventListener('click', buttonSaveAllTasks);
}

window.onload = function () {
  callStructure();
  listeners();
  recoveryLocalStorage();
};
