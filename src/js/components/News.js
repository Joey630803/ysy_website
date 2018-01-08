import React from 'react'
import {
    Row,
    Col,
    Tabs,
    Carousel 
} from 'antd'
const TabPane=Tabs.TabPane
import axios from 'axios'

import MySlider from './MySlider'

import ThreeTabs from './ThreeTabs'

import Underline from './Underline'

import NewsFourBlocks from './NewsFourBlocks'


export default class News extends React.Component{
    constructor(){
        super()
        this.state={
          Tabs: ['官方网站医商云网','医商云'],
          // defaultActiveKey:1,
          Actived:[false,true],
          MyText:<span>医商云标题</span>
        }
    }
    twoTabsClick(key){
      const Actived=this.state.Actived
      for(let i=0;i<=1;i++){
        Actived[i]=false
        if(i===key){
          Actived[key]=true
        }
      }
      this.setState({Actived})
    }
    render(){
      const shadeTabs={
        twoTabsActive:{
          color:'#118EEA',
          background:'rgba(255, 255, 255, 0.3)'
        },
        twoTabs:{
          color:'#888',
          background:'rgba(255, 255, 255, 0)'
        }
      }
        return (
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
      <Row className="NewsThreeTabs">
        <Col span={5}></Col>
        <Col span={14}>
        <ThreeTabs/>
      </Col>
        <Col span={5}></Col>
      </Row>
      <Row className="shade">
        <Col span={3}></Col>
        <Col span={18} className="shade_middle">
          <img src="./src/images/home_img_shading_nor.png"/>
          <div className="shade_tabs">
            {
              this.state.Tabs.map((item,index)=>{
                return <div key={index} style={this.state.Actived[index]?shadeTabs.twoTabsActive:shadeTabs.twoTabs}
                        onClick={this.twoTabsClick.bind(this,index)}
                        >
                        {item}
                        </div>
              })
            }
          </div>
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

      <Row className="">
        <Col span={3}></Col>
        <Col span={18} className="">
            <NewsFourBlocks/>
        </Col>
        <Col span={3}></Col>
      </Row>


      <div className="ServiceFooterImg">
        <img src="./src/images/industry_img_cc_nor.jpg"/>
      </div>
    </div>
        )
    }
}

