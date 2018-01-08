import React, { Component } from 'react'

class HomePic extends Component{
    constructor(props){
        super(props)
        this.state={
            Hover:[false,false,false,false,false,false],
            HomePics:[
                {
                    imgSrc:'./src/images/home_img_picture_a_nor.png',
                    title:'医商云标题',
                    text:'统一的申请系统、实时的安全库存预警、集中的采购管理、及时的物流配送、可追溯的患者使用'
                },
                {
                    imgSrc:'./src/images/home_img_picture_b_nor.png',
                    title:'医商云标题',
                    text:'统一的申请系统、实时的安全库存预警、集中的采购管理、及时的物流配送、可追溯的患者使用'
                
                },
                {
                    imgSrc:'./src/images/home_img_picture_c_nor.png',
                    title:'医商云标题',
                    text:'统一的申请系统、实时的安全库存预警、集中的采购管理、及时的物流配送、可追溯的患者使用'
                
                },
                {
                    imgSrc:'./src/images/home_img_picture_d_nor.png',
                    title:'医商云标题',
                    text:'统一的申请系统、实时的安全库存预警、集中的采购管理、及时的物流配送、可追溯的患者使用'
                
                },
                {
                    imgSrc:'./src/images/home_img_picture_e_nor.png',
                    title:'医商云标题',
                    text:'统一的申请系统、实时的安全库存预警、集中的采购管理、及时的物流配送、可追溯的患者使用'
                
                },
                {
                    imgSrc:'./src/images/home_img_picture_f_nor.png',
                    title:'医商云标题',
                    text:'统一的申请系统、实时的安全库存预警、集中的采购管理、及时的物流配送、可追溯的患者使用'
                
                }
            ]
        }
    }
    Over(index){
        
        const Hover=this.state.Hover
        for(let i=0;i<=6;i++){
            Hover[i]=false
            if(i===index){
                Hover[index]=true
            }
        }
        this.setState({Hover})
    }
    Out(index){
        const Hover=this.state.Hover
        for(let i=0;i<=6;i++){
            Hover[i]=false
        }
        this.setState({Hover})
    }

render(){

  return(
        <ul className="HomePics">
                {
                    this.state.HomePics.map((Pic,index)=>{
                        const Picdiscript=this.state.Hover[index]
                        ?<div className="Pic_discript">
                            <h2>{this.state.Hover[index]?Pic.title:null}</h2>
                            <hr/>
                            <p>{Pic.text}</p>
                        </div>
                        :null
                        ;
                        return (
                            <li key={index} className="HomePic"
                            onMouseOver={this.Over.bind(this,index)}
                            onMouseLeave={this.Out.bind(this,index)}
                            >
                            <img src={Pic.imgSrc}/>
                                {Picdiscript}
                            </li>
                        )
                    })
                }
        </ul>
  )
}
}

export default HomePic;