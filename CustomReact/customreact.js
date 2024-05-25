function customRender(reactElement,container)
{
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute('href',reactElement.href);
    domElement.setAttribute('target',reactElement.target);
    container.appendChild(domElement);
}
const reactElement = {
    type :'a',
    props : {
        href : 'https://www.google.com',
        targrt : '_blank',
    },
    childern: 'Click to visit google'
}
const container = document.getElementById("root");

customRender(reactElement,container);
