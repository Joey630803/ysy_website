import React from 'react'
import {
    Row,
    Col,
    Menu,
    Icon,
    Form,
    Input,
    Button,
    CheckBox,
    Modal,
    message
    
} from 'antd'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect,
    hashHistory
  } from 'react-router-dom'
import axios from 'axios'

const FormItem=Form.Item
const SubMenu =Menu.SubMenu;
const MenuItemGroup =Menu.ItemGroup



class Header extends React.Component{
    constructor(){
        super()
        this.state={
            current:'home',
            modalVisible:false,
            hasLogined:false,
            username:''
        }
    }
    componentWillMount(){
        if (localStorage.username!=''&&localStorage.username!='undefined') {
            this.setState({hasLogined:true});
            this.setState({username:localStorage.username,userid:localStorage.userid});
        }
        if(localStorage.current){
            this.setState({current:localStorage.getItem('current')})
        }
    }
    setModalVisible(value){
        this.setState({modalVisible:value})
    }

    setHasLogined(value){
        this.setState({hasLogined:value})
    }
    setUserName(value){
        this.setState({username:value})
    }
    logout(){
        localStorage.username = '';
		this.setState({hasLogined:false});
    }
    loginClick(){
        this.setModalVisible(true)
    }
    handleClick(e){
            this.setState({current:e.key})
            this.setModalVisible(false)
            localStorage.setItem('current', e.key)
    }
    handleSubmit(e){
        e.preventDefault();

        var myFetchOptions={
            method:'GET'
        }
        this.props.form.validateFields((err,values)=>{
            if(!err){
                axios.post('http://111.231.146.57:9997/system/user/login',
                {username:values.userName,password:values.passWord}).
                then(res=>{
                    this.setState({username:res.username})
                    if(res.data.code==='000'){
                        this.setModalVisible(false)
                        this.setHasLogined(true)
                        this.setUserName(values.userName)
                        message.success('成功了！');
                        localStorage.username = res.username
                        localStorage.password = res.password
                        
                    }else{
                        message.error(res.msg);
                    }
                })
            }
        })
        
    }
    render(){
        let {getFieldDecorator}=this.props.form;

        const userShow=this.state.hasLogined
        ?
        <span className="login">
            <Button type="primary" htmlType="button">{this.state.username}</Button>
            &nbsp;&nbsp;
            <a onClick={this.logout.bind(this)}><Icon type="user"/>退出</a>
        </span>
        :
        <span className="login">
            <a >注册</a> | <a onClick={this.loginClick.bind(this)}>登录</a>
        </span>
        ;
        return (
            <header className="header">
            <Row><Col span={24} className="logoRow">
                <a href="/" className="logo"><img  src='./src/images/logo.png'/></a>
            </Col></Row>
                <Row>
                    <Col span={9}></Col>

                    <Col span={9}>
                        <Menu className="lis" mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>

                            <Menu.Item key="home" className="li"><NavLink to="/home" activeStyle={{color: '#118eea'}}>首页</NavLink></Menu.Item>
                            <Menu.Item key="jianjie" className="li spaceRight"><NavLink to="/service" activeStyle={{color: '#118eea'}}>医商云服务</NavLink></Menu.Item>
                       
                            <Menu.Item key="lianxi" className="li"><NavLink to="/cases" activeStyle={{color: '#118eea'}}>客户案例</NavLink></Menu.Item>
                            <Menu.Item key="top" className="li"><NavLink to="/news" activeStyle={{color: '#118eea'}}>行业信息</NavLink></Menu.Item>
                            <Menu.Item key="about" className="li"><NavLink to="/about" activeStyle={{color: '#118eea'}}>关于我们</NavLink></Menu.Item>
                       
                        </Menu>
                    </Col>
<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
onCancel={()=>this.setModalVisible(false)} footer={null} width={350}>

        <Form onSubmit={this.handleSubmit.bind(this)}>

            <FormItem label="账户">
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your userName!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} type="text" placeholder="username" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('passWord', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="password" />
                )}
            </FormItem>

            <Button type="primary" htmlType="submit">登录</Button>
        </Form>

</Modal>
                    <Col span={4}>{userShow}</Col>
                </Row>
            </header>
        )
    }
}
export default Header = Form.create()(Header);
