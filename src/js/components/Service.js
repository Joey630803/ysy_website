import React, { Component } from 'react';
import {Row,Col} from 'antd'
import MySlider from './MySlider'
function Service(){
  return(
    <div>
      <MySlider/>
      <Row>
        <Col span={6}></Col>
        <Col span={16}>
        <p>
          这里是服务
        </p>
        

        </Col>

        <Col span={2}></Col>
      </Row>
    </div>
  )
}

export default Service;