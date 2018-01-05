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
function Cases(){
  return(
    <div>
      <MySlider/>
      <Row>
        <Col span={6}></Col>
        <Col span={16}>
        <p>
          这里是客户案例
        </p>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
  )
}

export default Cases;