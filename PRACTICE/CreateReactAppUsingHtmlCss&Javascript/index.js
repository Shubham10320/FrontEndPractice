let heading1=React.createElement(
    'h1',
    {
        id:'heading1'
    },
    'Im heading 1....'
)
let heading2=React.createElement(
    'h2',
    {
        id:'heading2'
    },
    'Im heading 2....'
)

let container=React.createElement(
    'div',
    {
        id:'container'
    },
    [heading1, heading2]
)


let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(container);