import React, { Component } from 'react';
import {Row,Col} from 'antd'
import MySlider from './MySlider'
import ThreeTabs from './ThreeTabs'
import Underline from './Underline'
class  Service extends Component{
  constructor(){
    super()
    this.state={
    }
  }

  render(){


  return(
    <div>
      <MySlider/>

        <Underline MyText={this.state.MyText}/>

      <Row style={{borderBottom:'1px solid #ccc',padding:'1.5rem 0'}}>
        <Col span={3}></Col>
        <Col span={18} className="Services">
        <div className="ServiceText">
        <h2 >
          医疗机构
        </h2>
        <div>
          <p><label>资质管理：</label>资质证照数据化、动态化、可视化管理；人性化的信息提醒</p>

          <p><label>准入管理：</label>卫生耗材遴选、招标；医用材料卫生技术评估</p>

          <p><label>申请管理：</label>模板备货、多条件搜索；常备货品提醒、同周期用量提醒；需求多级审核</p>

          <p><label>库房管理：</label>模板备货、多条件搜索；同周期安全库存提醒；一键出库、盘存</p>

          <p><label>采购管理：</label>归口管理，统一采购；订单全程状态跟踪；系统制单、水印防伪</p>

          <p><label>验收管理：</label>统一扫码验收；多部门相互监督</p>

          <p><label>结算管理：</label>定期审批采购、定期结算</p>

          <p><label>追溯管理：</label>高值耗材一物一码；打通消毒追溯系统、HIS计费系统；扫码备货、扫码登记、计费，避免漏费、错费、<br/>重复收费等风险</p>

          <p><label>统计分析：</label>立体的数据挖掘；多维度的数据分析；可视化的数据展示</p>
        </div>
        </div>
        <div className="ServiceImg">
          <img src="./src/images/service_img_a_nor.jpg"/>
        </div>
        

        </Col>

        <Col span={3}></Col>
      </Row>
      <Row style={{padding:'1.5rem 0'}}>
        <Col span={3}></Col>
        <Col span={18} className="Services">
        <div>
          <img src="./src/images/service_img_b_nor.jpg"/>
        </div>

        <div className="ServiceText ServiceImg">
        <h2 >
          医疗机构
        </h2>
        <div>
          <p><label>资质管理：</label>资质证照数据化、动态化、可视化管理；人性化的信息提醒</p>

          <p><label>准入管理：</label>卫生耗材遴选、招标；医用材料卫生技术评估</p>

          <p><label>申请管理：</label>模板备货、多条件搜索；常备货品提醒、同周期用量提醒；需求多级审核</p>

          <p><label>库房管理：</label>模板备货、多条件搜索；同周期安全库存提醒；一键出库、盘存</p>

          <p><label>采购管理：</label>归口管理，统一采购；订单全程状态跟踪；系统制单、水印防伪</p>

          <p><label>验收管理：</label>统一扫码验收；多部门相互监督</p>

          <p><label>结算管理：</label>定期审批采购、定期结算</p>

          <p><label>追溯管理：</label>高值耗材一物一码；打通消毒追溯系统、HIS计费系统；扫码备货、扫码登记、计费，避免漏费、错费、<br/>重复收费等风险</p>

          <p><label>统计分析：</label>立体的数据挖掘；多维度的数据分析；可视化的数据展示</p>
        </div>
        </div>
        </Col>

        <Col span={3}></Col>
      </Row>
      <div >
        <img style={{width:'100%'}} src="./src/images/service_img_c_nor.jpg"/>
      </div>
      <Underline MyText={this.state.MyText}/>
      <div className="ServiceIntroduce" >
            <p>我们是面向医院、供应商、物流商、生产商的一款基于云计算架构的综合服务性平台<br/>
              通过数据信息标准化，<br/>
              与his计费系统、消毒追溯系统、<br/>
              财务系统的无缝对接<br/>
              最终实现全流程的闭环，完成从需求到生产的生态链<br/>
            </p>
      </div>
      <div className="ServiceFooterImg">
        <img src="./src/images/service_img_d_nor.jpg"/>
      </div>
    </div>
  )
}
}

export default Service;