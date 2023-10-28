console.log("hjgvj");
function customRender(reactElement , container)
{
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href' , reactElement.props.href);
    domElement.setAttribute('type' , reactElement.props.target);
    console.log(domElement);
    container.appendChild(domElement);
}

const reactElement = {
    type : 'a' , 
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click Me'
}
const mainContainer = document.querySelector('#root');
customRender(reactElement , mainContainer);