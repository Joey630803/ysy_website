import React, { Component } from 'react'

class CaseThreeBlocks extends Component{
    constructor(props){
        super(props)
        this.state={
            Hover:[false,false,false],
            ThreeBlocks:[
                {
                    imgSrc:'./src/images/case_img_xiehe_nor.jpg',
                    title:'武汉协和医院',
                    text:<p>华中科技大学同济医学院附属协和医院,<br/>建院于1866年，历史悠久</p>
                },
                {
                    imgSrc:'./src/images/case_img_xinhua_nor.png',
                    title:'山东新华制药股份有限公司',
                    text:<p>新华医疗创建于1942年，<br/>2002年公司在上海证交所成功上市</p>
                    
                },
                {
                    imgSrc:'./src/images/case_img_guoyao_nor.jpg',
                    title:'国药控股股份有限公司',
                    text:<p>中国最大的药品及医疗保健品分销商，<br/>及领先的供应链服务商</p>
                    
                }
            ]
        }
    }
    Hover(key){
        //console.log(key)
        const Hover=this.state.Hover
        Hover[key]=true
        this.setState({Hover})
    }
    Out(key){
        // this.setState({Hover:false})
        const Hover=this.state.Hover
        Hover[key]=false
        this.setState({Hover})
    }

render(){
  return(
        <div className="CaseThreeBlocks">
                {
                    this.state.ThreeBlocks.map((TB,index)=>{
                        return (
                            <div key={index} className={this.state.Hover[index]?'CFBActive':'CFB'}
                            onMouseOver={this.Hover.bind(this,index)}
                            onMouseLeave={this.Out.bind(this,index)}
                            >
                                    <div>
                                    <img src={TB.imgSrc}/>
                                    </div>
                                    
                                    <h2>{TB.title}</h2>
                                    {TB.text}
                            </div>
                        )
                    })
                }
        </div>
  )
}
}

export default CaseThreeBlocks;