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
function Cases(){
  return(

    <Row>
      <Col span={6}></Col>
      <Col span={16}>
      <p style={{textAlign:'left'}}>
          这里是客户案例
      </p>
      </Col>

      <Col span={2}></Col>
    </Row>
  )
}

export default Cases;