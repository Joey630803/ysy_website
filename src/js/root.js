import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'

import Rem from './components/Rem'
import '../css/App.css'
import Index from './components/Index'
import FetchMock from 'react-fetch-mock'


window.fetch = new FetchMock(require('../__mocks__')).fetch

export default class Root extends React.Component{
    render(){
        return (<Index/>)
    }
}

ReactDOM.render(<Root/>,document.getElementById('mainContainer'))