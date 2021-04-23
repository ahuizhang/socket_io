import React from 'react'
import { connect } from 'react-redux'
import io from "socket.io-client";
import './index.css'
import leftAvatar from '../static/leftAvatar.jfif';
import rightAvatar from '../static/rightAvatar.jpg';
import { Button, Input } from 'antd';
import UserList from './userList'
const socket = io()
@connect(state => ({ list: state }))
class ChatRoom extends React.Component {

    state = {
        text: '',
        otherID: '',
        chatList: [],
        uid: ''
    }
    componentDidMount() {
        this.props.dispatch({ type: "GET_CHATLIST" })
        socket.on('globalMsg', (data) => {
            this.setState({
                chatList: [...this.state.chatList, data]
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                chatList: nextProps.list.chatReducer.magsList
            })
        }
    }
    sendMsg = () => {
        socket.emit('sendMsg', {
            msg: this.state.text,
            to: this.state.otherID,
            from: this.props.list.userReducer.uid
        })
        this.setState({
            text: ''
        })
    }
    handleMsg = (e) => {
        if (!e.target.value) return
        this.setState({
            text: e.target.value
        })
    }
    getOtherID = (otherID) => {
        this.setState({
            otherID
        })
    }
    render() {
        const { text, otherID, chatList } = this.state
        const { uid } = this.props.list.userReducer
        return (
            <div className="chatRoomContailter">
                <div className="userList">
                    <UserList getOtherID={this.getOtherID} />
                </div>
                {otherID && <div className="chatRightList">
                    <div className="chatContent">
                        {chatList.map((item => {
                            if (item.from !== uid) {
                                return (
                                    <div className="chatLeft" key={item._id}>
                                        <img src={leftAvatar} alt="" />
                                        <div className="leftText">
                                            <span className="leftTitle">tom</span>
                                            <span className="leftTx">{item.content}</span>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="chatRight" key={item._id}>
                                        <img src={rightAvatar} alt="" />
                                        <div className="rightText">
                                            <span className="rightTitle">terr</span>
                                            <span className="RightText">{item.content}</span>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        ))
                        }
                    </div>
                    <div className="chatRoomFooter">
                        <Button type="primary" className="chatSendButton" onClick={this.sendMsg}>发送</Button>
                        <Input className="chatSendContent" placeholder="请输入内容......" value={text} onChange={this.handleMsg} />
                    </div>

                </div>}
            </div>
        );
    }
};
export default ChatRoom;