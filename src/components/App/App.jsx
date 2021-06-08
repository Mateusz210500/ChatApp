import {Route, Switch} from "react-router-dom"
import { Login, Signup, Chat } from 'components'

export const App = () => {

 return (
    <div className="app">
        <Switch>
            <Chat exact path ='/' exact component={Chat} />
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup} />
        </Switch>
    </div>
    );
};
