import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreator from './store/actionCreator';
import { OrderWrapper, Title, OrderButton } from './style';

class OrderList extends Component {
    render(){
        return(
            <OrderWrapper>
            <Title>Order List</Title>
            <div>{this.getOrderList()}</div>
            <Title>Rent List</Title>
            <div>{this.getRentList()}</div>
            </OrderWrapper>
        )
    }

    componentDidMount(){
        var storage=window.localStorage;
        var uid = storage.getItem("UID");
        this.props.OrderList(uid);
        this.props.RentList(uid);
    }

    getOrderList(){
            const {Orderlist} = this.props;
            console.log(Orderlist.size);
            return Orderlist.map((item) =>{
                return (
                    <OrderButton>
                    <Link key={item.get('id')} to={`/OrderList/OrderDetail/${item.get('id')}`}>
                    <div>
                        <p>{item.get('id')}</p>
                    </div>
                    </Link>
                    </OrderButton>
                );
            });
    }

    getRentList(){
        const {Rentlist} = this.props;
        console.log(Rentlist.size);
        return Rentlist.map((item) =>{
            const State = item.get('State');
            if(State === "Paid"){
                return (
                    <OrderButton>
                    <Link key={item.get('id')} to={`/OrderList/RentDetail/${item.get('id')}`}>
                    <div>
                        <p>{item.get('id')}</p>
                    </div>
                    </Link>
                    </OrderButton>
                );
            }            
        });
}
}

const mapStateToProps = (state) => {
    return {
        Orderlist: state.getIn(['order','Orderlist']),
        Rentlist: state.getIn(['order','Rentlist'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        OrderList(uid){
            dispatch(actionCreator.getOrderList(uid))
        },
        RentList(uid){
            dispatch(actionCreator.getRentList(uid))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(OrderList);