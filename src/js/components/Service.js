import React, { Component } from 'react';
import {Row,Col} from 'antd'
function Service(){
  return(

    <Row>
      <Col span={6}></Col>
      <Col span={16}>
      <p>
        这里是服务
      </p>

      </Col>

      <Col span={2}></Col>
    </Row>
  )
}

export default Service;