const createMainContainer = (text) => {
    const body = document.querySelector('body')

    let element = document.createElement('div')
    element.classList.add('main-container')
    element.textContent = text

    body.appendChild(element)
}

const createChildren = (text, parentClass, className) => {
    const parent = document.querySelector(parentClass)

    let element = document.createElement('div')
    element.classList.add(className)
    element.textContent = text

    parent.appendChild(element)
}

const createButton = (text, parentClass, className) => {
    const parent = document.querySelector(parentClass)

    let element = document.createElement('button')
    element.classList.add(className)
    element.textContent = text

    parent.appendChild(element)
}