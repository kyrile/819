import React, {Component} from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import { reqLogin } from '../../api'

class Login extends Component {
    render(){
        return (
            <div className="login-containner">
                <header className="login-top">
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1505383445,3241798045&fm=26&gp=0.jpg" alt=""/>
                    <h1>G.E.M后台管理系统</h1>
                </header>
                <article className="login-middle">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登  录
                            </Button>
                        </Form.Item>
                    </Form>
                </article>
            </div>
        )
    }
     onFinish = async (values) => {
        const {username, password} = values
        const result = await reqLogin(username,password)
        if(result.status === 200){
            message.success('登录成功')
            console.log(result)
            this.props.history.replace('/')
        }else{
            console.log(result)
        }
    }
}
export default Login;