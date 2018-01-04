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

class About extends Component{

  render(){

  
  return(

    <Row>
      <Col span={6}></Col>
      <Col span={16}>
        <p style={{textAlign:'left'}}>
            这里是about
        </p>
      </Col>

      <Col span={2}></Col>
    </Row>
  )
}
}

export default About;