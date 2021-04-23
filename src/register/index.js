import React from 'react'
import { Form, Input, Button, message, } from 'antd';
import { connect } from 'react-redux';
import './index.css'
@connect(state => ({ registerRes: state.userReducer }))
class Register extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            if (nextProps.registerRes.registerRes.code === 0) {
                this.props.history.push('/chatroom')
            } else {
                message.info(nextProps.registerRes.registerRes.msg)
            }
        }
    }
    render() {
        const onFinish = (values) => {
            const { dispatch } = this.props
            dispatch({ type: 'REGISTER_PARAMS', payload: values })
        };
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="registerContailter">
                <div className="registerForm">
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
                        <Form.Item >
                            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>注册</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Register;