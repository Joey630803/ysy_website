import React, { Component } from 'react'
import Underline from './Underline'
import CaseThreeBlocks from './CaseThreeBlocks'

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
class Cases extends Component{
  constructor(){
    super()
    this.state={
      MyText:<span>医商云标题</span>
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
            <div className="ServiceIntroduce">
              <p>由千人基因组计划协会领导的一个国际科学家小组，
                构建出了世界上最大的人类基因组变异目录，可为研究人员提供有<br/>
              价值的线索帮助他们确立一些人容易罹患各种疾病的原因<br/>
              </p>
            </div>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row className="">
        <Col span={3}></Col>
        <Col span={18} className="">
            <CaseThreeBlocks/>
        </Col>
        <Col span={3}></Col>
      </Row>

      <Row className="">
        <Col span={3}></Col>
        <Col span={18} className="">
            <Underline MyText={this.state.MyText}/>
            <div className="ServiceIntroduce">
              <p>由千人基因组计划协会领导的一个国际科学家小组，
                构建出了世界上最大的人类基因组变异目录，可为研究人员提供有<br/>
              价值的线索帮助他们确立一些人容易罹患各种疾病的原因<br/>
              </p>
            </div>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  )
}
}

export default Cases;