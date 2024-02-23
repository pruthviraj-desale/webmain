const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
const submitButton = document.querySelector('.submit')

submitButton.addEventListener('click', ()=>{
    child.style.backgroundColor = 'red';
    console.log("child color changed to red")

    const newDiv = document.createElement('div')
    newDiv.classList.add('child')
    newDiv.innerHTML = "this is a new div"
    parent.appendChild(newDiv)
    console.log("new div added")
})