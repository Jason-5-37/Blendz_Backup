import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionCreator from '../store/actionCreator';
import { OrderWrapper, Title, OrderInfoWrapper, OrderName, OrderNumber, OrderPrice, OrderInfo} from '../style';

class OrderListDetail extends Component {
    render(){
        
        return(
            <OrderWrapper>
            <Title>Order Detail </Title>
            <OrderInfoWrapper>
                <OrderName><h1>Produc</h1></OrderName>
                <OrderNumber><h1>Quantity</h1></OrderNumber>
                <OrderPrice><h1>Price</h1></OrderPrice>
            </OrderInfoWrapper>
            <div>{this.getOrderDetailList()}</div>
            <OrderInfo>OrderID: <h1>{this.props.OrderID}</h1></OrderInfo>
            <OrderInfo>Shipping Address: <h1>{this.props.ShippingAddress}</h1></OrderInfo>
            </OrderWrapper>
        )
    }

    componentDidMount(){
        var storage=window.localStorage;
        var uid = storage.getItem("UID");
        const orderID = this.props.match.params;
        this.props.OrderList(uid, orderID);
    }

    getOrderDetailList(){
        const {OrderDetaillist} = this.props;        
        return OrderDetaillist.map((item) =>{
            return (
                <div key={item.get('id')}>
                <div>
                    <OrderInfoWrapper>
                        <OrderName>{item.get('id')}</OrderName>
                        <OrderNumber>{item.get('number')}</OrderNumber>
                        <OrderPrice>{item.get('Price')}</OrderPrice>
                        {this.props.SetOrderID(item.get('orderID'))}
                        {this.props.SetAddress(item.get('ShippingAddress'))}
                    </OrderInfoWrapper>
                </div>
                </div>
            );
        });
    }
}

const mapStateToProps = (state) => {
    return {
        OrderDetaillist: state.getIn(['order','OrderDetaillist']),
        OrderID: state.getIn(['order','OrderID']),
        ShippingAddress: state.getIn(['order','ShippingAddress'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        OrderList(uid, orderID){
            dispatch(actionCreator.getOrderDetail(uid, orderID))
        },

        SetOrderID(orderID){
            dispatch(actionCreator.updateOrderID(orderID))
        },

        SetAddress(Address){
            dispatch(actionCreator.updateADDRESS(Address))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(OrderListDetail);
