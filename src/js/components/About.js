import React, { Component } from 'react';
import {
  Row,
  Col,
  Menu,
  Icon,
  Form,
  Input,
  Button,
  CheckBox,
  Modal,
  message
  
} from 'antd'
import MySlider from './MySlider'
import Underline from './Underline'
import AboutfiveBlocks from './AboutfiveBlocks'


class About extends Component{
    constructor(){
      super()
      this.state={
        MyText:<span>我们的团队</span>
      }
  }
  render(){
    return(
      <div>
        <MySlider/>
        <Row className="">
          <Col span={3}></Col>
          <Col span={18} className="">
              <Underline MyText={this.state.MyText}/>
          </Col>
          <Col span={3}></Col>
        </Row>

        <Row className="">
          <Col span={3}></Col>
          <Col span={18} className="">
              <AboutfiveBlocks />
          </Col>
          <Col span={3}></Col>
        </Row>

      </div>
    )
}
}

export default About;