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

        <h1 style={{textAlign:'center',marginTop:'1rem'}}>关于我们</h1>

        <Row className="Abouts">
          <Col span={3}></Col>
          <Col span={18} >
              <div className="About">
                <img src="./src/images/we_img_a_nor.jpg"/>
                <img src="./src/images/we_img_b_nor.jpg"/>
              </div>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row className="AboutsText">
          <Col span={3}></Col>
          <Col span={18} >
              <div className="Abouttext">
              <h1>医商云网致力于成为国内最大的医用材料供应服务平台</h1>
            <p>普华信联（武汉）科技有限公司，2013年创立于湖北武汉，是一家医疗互联网服务型企业，
              兼具医疗信息化平台开发能力、整体运营能力的技术型服务平台；<br/>
              其核心骨干均来自于传统医疗行业与互联网行业，对行业、技术有着丰富的经验。<br/>
              公司凭借领先的技术和丰富的行业经验，推出的医商云网服务平台为医疗机构、供应商、
              生产商、物流商、提供基于云计算架构的综合服务型平台及行业解决方案；<br/>
              并专注于以云平台为中心、建立行业标准化信息、从而打通需求、供应、监管、使用、
              生产全流程的生态链。
            </p>
              </div>
          </Col>
          <Col span={3}></Col>
        </Row>
      </div>
    )
}
}

export default About;