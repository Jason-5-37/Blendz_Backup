import React, { Component } from "react";
import { ShopWrapper, ShopNav, ShopNavItem, ShopInforWrapper, ShopNavTitle, ShopInforItem } from "./style";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as actionCreators from './store/actionCreators';

class Shop extends Component {
    render(){
        return(
            <ShopWrapper>
                <ShopNav>
                    <ShopNavTitle>Categories</ShopNavTitle>
                        <ShopNavItem onClick={() => this.props.handleInput()}>Slushy Machine</ShopNavItem>
                        <ShopNavItem onClick={() => this.props.handleInput2()}>Beverages</ShopNavItem>
                        <ShopNavItem onClick={() => this.props.handleInput3()}>Accessories</ShopNavItem>
                </ShopNav>
                <ShopInforWrapper>
                    {this.getList()}
                </ShopInforWrapper>
            </ShopWrapper>
        )
    }
    componentDidMount(){
        this.props.handleInput();
    }
    
    getList(){
        if(this.props.selected === "start"){
            return(
                <h1>Welcome to Shopping page</h1>
            )
        }else if(this.props.selected !== "start"){    
            const {list} = this.props;        
            return list.map((item) =>{
                return (
                    <Link key={item.get('id')} to={`/shop/detail/${item.get('id')}`} >
                    <ShopInforItem>
                        <img src={item.get('imgUrl')} alt=''></img>
                        <p>{item.get('name')}</p>
                        <p>{item.get('price')}</p>
                    </ShopInforItem>
                    </Link>
                );
            });
        }else{
            return (
                <h1>error</h1>
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
            dispatch(actionCreators.getMachineList());
        },
        handleInput2(){
            dispatch(actionCreators.selectBeverages());
            dispatch(actionCreators.getBeveragesList());
        },
        handleInput3(){
            dispatch(actionCreators.selectAccessories());
            dispatch(actionCreators.getAccessoriesList());
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(Shop);