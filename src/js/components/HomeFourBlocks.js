import React, { Component } from 'react'

class HomeFourBlocks extends Component{
    constructor(props){
        super(props)
        this.state={
            FourBlocks:[
                {
                    imgSrc:'./src/images/home_icon_saas_nor.png',
                    text:'SAAS服务'
                },
                {
                    imgSrc:'./src/images/home_icon_security_nor.png',
                    text:'安全稳定'
                },
                {
                    imgSrc:'./src/images/home_icon_intelligence_nor.png',
                    text:'智能操作'
                },
                {
                    imgSrc:'./src/images/home_icon_data_nor.png',
                    text:'大数据分析'
                }
            ]
        }
    }

render(){
  return(
        <div className="HomeFourBlocks">
                {
                    this.state.FourBlocks.map((FB,index)=>{
                        return (
                            <div key={index} className="FB">
                                <div className="FBcontent">
                                    <div>
                                    <img src={FB.imgSrc}/>
                                    </div>
                                    <h1>{FB.text}</h1>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
  )
}
}

export default HomeFourBlocks;