import React, { Component } from 'react'

class ThreeTabs extends Component{
    constructor(props){
        super(props)
        this.state={
            Tabs: [],
            Hover:[false,false,false]
        }
    }
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
        
    }

    Hover(key){
        //console.log(key)
        const Hover=this.state.Hover
        Hover[key]=true
        this.setState({Hover})
        // if(key===0){
        //     this.setState({Hover:[true,false,false]})
        // }else if(key===1){
        //     this.setState({Hover:[false,true,false]})
        // }else if(key===2){
        //     this.setState({Hover:[false,false,true]})
        // }
        
    }
    Out(key){
        // this.setState({Hover:false})
        const Hover=this.state.Hover
        Hover[key]=false
        this.setState({Hover})
    }
render(){
  return(
        <div className="threeTabs">
                {
                    this.state.Tabs.map((tab,index)=>{
                        return (
                            <div key={index} className={this.state.Hover[index]?'threeTabActive':'threeTab'}
                            onMouseOver={this.Hover.bind(this,index)}
                            onMouseLeave={this.Out.bind(this,index)}>
                                <img src={this.state.Hover[index]?tab.imgActive:tab.img}/>
                                <h3>{tab.title}</h3>
                                <p className="threeText">{tab.text}</p>
                            </div>
                        )
                    })
                }
        </div>
  )
}
}

export default ThreeTabs;