import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function MyApp() {
    return (
        <div>
            <h1>Custom App ! </h1>
        </div>
    )
}

// const anotherElement = (
//     <a href="https://google.com" target="_blank">Google</a>
// )

const anotherUser = " chai aur code"

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    "Click to visit Google",
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement

)
