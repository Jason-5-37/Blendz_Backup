import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Header from './common/header/index.js';
import Footer from './common/footer/index.js';
import Home from './pages/home';
import Shop from './pages/Shop/index';
import Help from './pages/Help/index';
import About from './pages/About/index';
import Login from './pages/login/login.js';
import Register from "./pages/Register";

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <Header/>
      <Router>
        <Routes>
        <Route path="/" exact element={<Home />}> </Route>
        <Route path="/shop" element={<Shop />}> </Route>
        <Route path="/help" exact element={<Help />}> </Route>
        <Route path="/about" exact element={<About />}> </Route>
        <Route path="/login" exact element={<Login />}> </Route>
        <Route path="/register" exact element={<Register />}> </Route>
        </Routes>
      </Router>
      <Footer/>
    </Provider>
    )
  }
}

export default App;