import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../home'
import Register from '../register'
import Chatroom from '../chatroom'


const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/register'} component={Register} />
                <Route path={'/chatroom'} component={Chatroom} />
            </Switch>
        </Router>
    )
}
export default Routers