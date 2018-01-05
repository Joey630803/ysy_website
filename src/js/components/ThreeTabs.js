import React, { Component } from 'react';
import Slider from 'react-slick'
import {
    Row,
    Col,
    Tabs,
    Carousel 
} from 'antd'



class ThreeTabs extends Component{
    componentDidMount(){
        // const myFetchOptions={
        //     method:'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        // fetch('/threeTabs',myFetchOptions)
        fetch('/threeTabs')
        .then(res=>{
            return res.json()
        })
        .then(data=>this.setState({Tabs: data}))
        console.log(Tabs)
        
    }
    constructor(props){
        super(props)
        this.state={
            Tabs: [],
        }
    }
render(){
  return(
      <Row >
        <Col span={5}></Col>
        <Col span={14}>
        <div className="threeTabs">
                {
                    this.state.Tabs.map((tab,index)=>{
                        return (
                            <div key={index} className="threeTab">
                                <img src={tab.img}/>
                                
                                <h3>{tab.title}</h3>

                                <p className="threeText">{tab.text}</p>

                            </div>
                        )
                    })
                }
        </div>
        </Col>
        <Col span={5}></Col>
      </Row>
  )
}
}

export default ThreeTabs;