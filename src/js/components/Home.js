import React, { Component } from 'react';
import Slider from 'react-slick'
import MySlider from './MySlider'
import ThreeTabs from './ThreeTabs'
//import '../mock/mockdata'
import {
    Row,
    Col,
    Tabs,
    Carousel 
} from 'antd'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            Tabs: [],
        }
    }
render(){
  return(
    <div>
      <MySlider/>
      <ThreeTabs/>

      <Row>
        <Col span={6}></Col>
        <Col span={16}>
        <p>
          这里是home
        </p>
        </Col>

        <Col span={2}></Col>
      </Row>
    </div>
  )
}
}

export default Home;