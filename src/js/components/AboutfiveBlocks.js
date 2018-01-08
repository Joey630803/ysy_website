import React, { Component } from 'react'

class AboutfiveBlocks extends Component{
    constructor(props){
        super(props)
        this.state={
            Hover:[false,false,false],
            Departments:[
                {
                    src:'./src/images/we_develop_icon_nor.png',
                    text:'开发部门'
                },
                {
                    src:'./src/images/we_product_icon_nor.png',
                    text:'产品部门'
                },
                {
                    src:'./src/images/we_construction_icon_nor.png',
                    text:'实施部门'
                },
                {
                    src:'./src/images/we_operate_icon_nor.png',
                    text:'运营部门'
                },
                {
                    src:'./src/images/we_manage_icon_nor.png',
                    text:'行政部门'
                }
            ]
        }
    }

render(){
  return(
        <div className="AboutfiveBlocks">
                {
                    this.state.Departments.map((Dep,index)=>{
                        return (
                            // <div key={index} style={{backgroundImage:'url(' + {Dep.src} + ')',width:'3rem',height:'3rem'}}>
                            <div key={index} className="AboutfiveBlock">
                            <div>
                            <img src={Dep.src}/>
                            </div>
                            <p>{Dep.text}</p>
                            </div>
                        )
                    })
                }
        </div>
  )
}
}

export default AboutfiveBlocks;