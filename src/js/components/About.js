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
class About extends Component{

  render(){
    return(
      <div>
        <MySlider/>
        <Row>
          <Col span={6}></Col>
          <Col span={16}>
          <p>
            这里是关于我们
          </p>
          

          </Col>

          <Col span={2}></Col>
        </Row>
      </div>
    )
}
}

export default About;