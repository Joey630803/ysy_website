import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'
//import 'style-loader!css-loader!../css/App.css'
import '../css/App.css'
import Index from './components/Index'

export default class Root extends React.Component{
    render(){
        return (<Index/>)
    }
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'))