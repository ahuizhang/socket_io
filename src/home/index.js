import React from 'react'
import Login from './login'
import { canvasBG } from '../tool/canver'
import {connect} from 'react-redux'
@connect()
class Home extends React.Component {
    componentDidMount() {
        canvasBG()
    }
    render() {
        return (
            <div className="homeIndex" style={{ overflow: "hidden", position: "relative" }}>
                <canvas id="canvas" style={{ width: "100vw", height: "99vh" }} />
                <div className="loginCompoment" style={{ position: "absolute", top: "0", left: "40vw" }}>
                    <Login {...this.props}/>
                </div>
            </div>
        )
    }
}

export default Home;