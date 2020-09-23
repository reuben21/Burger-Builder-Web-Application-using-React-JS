import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.module.css';
import Layout from './components/Layout/Layout';
import Orders from "./containers/Orders/Orders";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";

class App extends Component {
    state = {
        show: true
    };


    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/checkout" component={Checkout}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/auth" component={Auth}/>
                        <Route path="/" exact component={BurgerBuilder}/>
                        <Route path="/logout" exact component={Logout}/>
                    </Switch>
                </Layout>
            </div>
        );
    }

}

export default App;
