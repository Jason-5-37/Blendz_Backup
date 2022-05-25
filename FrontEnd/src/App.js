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
import Payment from "./pages/Payment"
import SuccessPayment from "./pages/SuccessPayment";
import OrderList from "./pages/OrderList";
import OrderDetail from "./pages/OrderList/OrderListDetail";
import RentListDetail from "./pages/OrderList/RentListDetail";
import Administrators from './pages/Administrators';
import ManageProduct from './pages/Administrators/ManageProduct';
import ManageUsers from './pages/Administrators/ManageUsers';
import ManageUser from './pages/Administrators/ManageUsers/ManagerUser';
import ManageProductForm from './pages/Administrators/ManageProduct/ManageProductForm';
import GetAllUser from './pages/Administrators/CheckAllOrder';
import GetAllGetAllUserOrderDetailUser from './pages/Administrators/CheckAllOrder/OrderDetail.js';

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
        <Route path="/payment" component={Payment} />
        <Route path="/user" component={User} />
        <Route path="/shop/detail/:id" component={Detail} />
        <Route path = "/SuccessPayment" component={SuccessPayment}/>
        <Route exact path = "/OrderList" component={OrderList}/>
        <Route path = "/OrderList/OrderDetail/:id" component={OrderDetail}/>
        <Route path = "/OrderList/RentDetail/:id" component={RentListDetail}/>
        <Route exact path="/Administrators" component={Administrators} />
        <Route exact path="/Administrators/ManageProduct" component={ManageProduct} />
        <Route exact path="/Administrators/ManageUser" component={ManageUsers} />
        <Route path="/Administrators/ManageUser/:id" component={ManageUser} />
        <Route path="/Administrators/ManageProduct/:id" component={ManageProductForm} />
        <Route exact path="/Administrators/ManageAllUser" component={GetAllUser} />
        <Route path="/Administrators/ManageAllUser/:id" component={GetAllGetAllUserOrderDetailUser} />
        
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
