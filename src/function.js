const helloThere = () => {
    console.log('hello there user!')
}

const createContainer = (text) => {
    const body = document.querySelector('body')

    let element = document.createElement('div')
    element.classList.add('container')
    element.textContent = text

    body.appendChild(element)
}

export {
    createContainer
} 
helloThere();