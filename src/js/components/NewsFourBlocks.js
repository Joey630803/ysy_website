import React, { Component } from 'react'

class NewsFourBlocks extends Component{
    constructor(props){
        super(props)
        this.state={
            FourBlocks:[
                {
                    imgSrc:'./src/images/industry_icon_aa_nor.png',
                    title:'SAAS服务',
                    text:'人脑是进化的最高杰作，而细菌则是一些低等个体，两者之间有着天壤之别，而如今加州大学圣迭戈分校的老师们'
                },
                {
                    imgSrc:'./src/images/industry_icon_bb_nor.png',
                    title:'安全稳定',
                    text:'人脑是进化的最高杰作，而细菌则是一些低等个体，两者之间有着天壤之别，而如今加州大学圣迭戈分校的老师们'
                    
                },
                {
                    imgSrc:'./src/images/industry_icon_cc_nor.png',
                    title:'智能操作',
                    text:'人脑是进化的最高杰作，而细菌则是一些低等个体，两者之间有着天壤之别，而如今加州大学圣迭戈分校的老师们'
                    
                },
                {
                    imgSrc:'./src/images/industry_icon_dd_nor.png',
                    title:'大数据分析',
                    text:'人脑是进化的最高杰作，而细菌则是一些低等个体，两者之间有着天壤之别，而如今加州大学圣迭戈分校的老师们'
                    
                }
            ]
        }
    }

render(){
  return(
        <div className="NewsFourBlocks">
                {
                    this.state.FourBlocks.map((FB,index)=>{
                        return (
                            <div key={index} className="NFB">
                                    <div>
                                    <img src={FB.imgSrc}/>
                                    </div>
                                    
                                    <h3>{FB.title}</h3>
                                    <hr/>
                                    <p>{FB.text}</p>
                            </div>
                        )
                    })
                }
        </div>
  )
}
}

export default NewsFourBlocks;