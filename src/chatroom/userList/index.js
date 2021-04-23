import React from 'react'
import { List, Avatar } from 'antd';
import { connect } from 'react-redux'
@connect(state => ({ list: state.userReducer }))
class UserList extends React.Component {
    state = {
        userList: []
    }
    componentDidMount() {
        this.props.dispatch({ type: 'USER_LIST' })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                userList: nextProps.list.userList.userList
            })
        }
    }
    handleUserClick = (id) => {
        this.props.getOtherID(id)
    }
    render() {
        const { userList } = this.state
        const {uid} = this.props.list
        return (
            <>
                {userList && <List
                    itemLayout="horizontal"
                    dataSource={userList}
                    renderItem={item => {
                        if (uid !== item._id) {
                            return (
                                <List.Item onClick={() => this.handleUserClick(item._id)}>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={item.username}
                                        description="个性签名"
                                    />
                                </List.Item>
                            )
                        }
                    }}
                />
                }
            </>
        )
    }
}
export default UserList