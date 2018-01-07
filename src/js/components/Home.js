import React, { Component } from 'react';
import Slider from 'react-slick'
import MySlider from './MySlider'
import ThreeTabs from './ThreeTabs'
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
    </div>
  )
}
}

export default Home;