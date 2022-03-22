import React, { Component } from "react";
import { ShopWrapper, ShopNav, ShopNavItem, ShopInforWrapper, ShopNavTitle, ShopInforItem, ShopInforTitle } from "./style";
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';

class Shop extends Component {
    render(){ 
        return(
            <ShopWrapper>
                <ShopNav>
                    <ShopNavTitle>Categories</ShopNavTitle>
                        <ShopNavItem onClick={() => this.props.handleInput()}>Machine</ShopNavItem>
                        <ShopNavItem onClick={() => this.props.handleInput2()}>Beverages</ShopNavItem>
                        <ShopNavItem onClick={() => this.props.handleInput3()}>Accessories</ShopNavItem>
                </ShopNav>
                <ShopInforWrapper>
                    {this.getList()}
                </ShopInforWrapper>
            </ShopWrapper>
        )
    }

    getList(){
        if(this.props.selected === "Machine"){
            return(
                <div>
                <ShopInforTitle>Machine</ShopInforTitle>
                {this.props.list.map((item) => {
                    return <ShopInforItem key={item}>{item}</ShopInforItem>
                })}
                </div>
            )
        }else if (this.props.selected === "Beverages"){
            return 2;
        }else if (this.props.selected === "Accessories") {
            return 3;
        }else{
            return(
                <h1>Welcome to Blendz</h1>
            )
        }
    }
}

const mapStateTothis= (state) => {
    return {
        selected: state.getIn(['shop','selected']),
        list: state.getIn(['shop','list'])
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        handleInput(){
            dispatch(actionCreators.selectMachine());
            dispatch(actionCreators.getList());
        },
        handleInput2(){
            dispatch(actionCreators.selectBeverages());
        },
        handleInput3(){
            dispatch(actionCreators.selectAccessories());
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(Shop);