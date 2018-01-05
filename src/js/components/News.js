import React from 'react'
import {
    Row,
    Col,
    Tabs,
    Carousel 
} from 'antd'
const TabPane=Tabs.TabPane
import axios from 'axios'

import MySlider from './MySlider'
import ThreeTabs from './ThreeTabs'


export default class News extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return (
    <div>
      <MySlider/>
      <ThreeTabs/>
      <Row>
        <Col span={6}></Col>
        <Col span={16}>
        <p>
          这里是行业信息
        </p>
        

        </Col>

        <Col span={2}></Col>
      </Row>
    </div>
        )
    }
}

