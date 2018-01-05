import React, { Component } from 'react';
import Slider from 'react-slick'

import {Carousel} from 'antd'

import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

class MySlider extends Component{
    constructor(props){
        super(props)
        this.state={
            bigPics:[
                './src/images/1.png',
                './src/images/2.png',
                './src/images/3.png'
            ]
        }
    }
    render(){
    
    const settings={
        dots:true,
        dotsClass:'dotsClass',
        pauseOnHover:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        accessibility:true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        
    }
  return(
        <div className="carousel">
            <Slider {...settings} autoplay>
                {
                    this.state.bigPics.map((item,index)=>{
                        return <img className="banner" src={item} key={index}/>
                    })
                }
            </Slider>
        </div>
  )
}
}

export default MySlider;