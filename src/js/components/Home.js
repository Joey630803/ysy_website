import React, { Component } from 'react';
import Slider from 'react-slick'
import MySlider from './MySlider'
import ThreeTabs from './ThreeTabs'
import Underline from './Underline'
import HomeFourBlocks from './HomeFourBlocks'
import HomePic from './HomePic'

//import '../mock/mockdata'
import {
    Row,
    Col,
    Tabs,
    Carousel 
} from 'antd'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            Tabs: ['普华信联','医商云'],
            // defaultActiveKey:1,
            Actived:[false,true],
            // MyText:(function(){
            //   return(
            //     <p>医商云</p>
            //   )
            // })()
            MyText:<span>医商云</span>
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
  return(
    <div className="HomeWrap">
      <MySlider/>
      <Row className="HomeThreeTabs">
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
            <p>基于云计算架构的综合服务性平台，为医院、供货商、物流商提供一站式解决方案<br/>
            我们能为您做的：<br/>
            资质管理、统计分析、准入管理、溯源管理、科室申请、结算管理、库房管理、产品信息库、采购管理、验收管<br/>
            </p>
      </div>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row className="">
        <Col span={3}></Col>
        <Col span={18} className="">
            <HomeFourBlocks/>
        </Col>
        <Col span={3}></Col>
      </Row>
      <Row className="">
        <Col span={3}></Col>
        <Col span={18} className="">
            <HomePic/>
        </Col>
        <Col span={3}></Col>
      </Row>

      <div className="ServiceIntroduce" style={{borderTop:'1px solid #ccc'}}>
            <p>医商云<br/>
            我们能为您做的：<br/>
            资质管理、统计分析、准入管理、溯源管理、科室申请、结算管理、库房管理、产品信息库、采购管理、验收管<br/>
            </p>
      </div>
    </div>
  )
}
}

export default Home;