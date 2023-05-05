const UL = document.querySelectorAll('ul>li>span')

document.querySelector('table').onclick = function(event) {
    if (event.target.tagName !== 'TD') return false
    console.log(event.target)
    let data = [...event.target.parentNode.children]
    let text = getDataFromId(data)
    console.log(text)
    outText(text)
}

function getDataFromId(tdArr) {
    return tdArr.map(item => item.textContent)
}

function outText(text) {
    text.forEach((item, index) => UL[index].textContent = item)
}
