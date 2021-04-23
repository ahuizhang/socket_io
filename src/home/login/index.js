import React from 'react'
import './index.css'
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux';


@connect(state => ({ loginRes: state.userReducer }))
class Login extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            if (nextProps.loginRes.loginRes.code === 0) {
                this.props.history.push('/chatroom')
            } else {
                message.info(nextProps.loginRes.loginRes.msg)
            }
        }
    }
    render() {
        const onFinish = (values) => {
            console.log('Success:', values);
            const { dispatch } = this.props
            dispatch({ type: "USER_LOGIN", payload: values })
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        const jump = () => {
            this.props.history.push('/register')
        }
        return (
            <div className="loginContailter">
                <Form
                    name="basic"
                    initialValues={{ remember: true, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: '请输入账号!', },]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            { required: true, message: '请输入密码!', },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>登入</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" style={{ width: "100%" }} onClick={jump}>注册</Button>
                    </Form.Item>
                </Form>
            </div >
        );
    }
}

export default Login;