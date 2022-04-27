import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Help from './pages/Help';
import About from './pages/About';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Cart from "./pages/Cart";
import ContactUs from "./pages/ContactUs"
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <GlobalStyle />
      <Header/>
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/resetPassword" component={ResetPassword} />
        <Route path="/cart" component={Cart} />
        <Route path="/user" component={User} />
        <Route path="/shop/detail/:id" component={Detail} />
        <Route exact path="/404" component={NotFound} />
        <Route path="*" component={NotFound} />
      </Switch>
      </Router>
      <Footer/>
    </Provider>
    )
  }
}

export default App;
