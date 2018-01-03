import React from 'react'
import {Row,Col} from 'antd'


export default class Footer extends React.Component{
    render(){
        return (
            <footer>
                <Row className="footerRow">
                    <Col span={4}>
                    </Col>
                    <Col span={16} className="footerCenter">
                    <div>&copy;&nbsp;2015 普华信联(武汉)科技有限公司</div>                    
                    <div>
                        <img  src='./src/images/logo.png'/>
                        <p>网址 : www.ysy.com</p>
                        <p>电话 : 027-5956-6545</p>
                        <p>地址 : 武汉市江岸区台北一路环亚大厦B座1001</p>
                    </div>
                    <div>鄂ICP备 14015938号</div> 
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </footer>
        )
    }
}
