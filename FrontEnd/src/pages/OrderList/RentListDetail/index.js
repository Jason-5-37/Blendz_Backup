import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionCreator from '../store/actionCreator';
import { OrderWrapper, Title, OrderInfoWrapper, OrderName, OrderNumber, OrderPrice, OrderInfo} from '../style';

class RentListDetail extends Component {
    render(){
        
        return(
            <OrderWrapper>
            <Title>Rent Detail </Title>
            <OrderInfoWrapper>
                <OrderName><h1>Produc</h1></OrderName>
                <OrderNumber><h1>Quantity</h1></OrderNumber>
                <OrderNumber><h1>Start Date</h1></OrderNumber>
                <OrderNumber><h1>End Date</h1></OrderNumber>
                <OrderPrice><h1>TotalPrice</h1></OrderPrice>
            </OrderInfoWrapper>
            <OrderInfoWrapper>
            {this.getRentDetailList()}
            </OrderInfoWrapper>
            <OrderInfo>OrderID: <h1>{this.props.OrderID}</h1></OrderInfo>
            <OrderInfo>Shipping Address: <h1>{this.props.ShippingAddress}</h1></OrderInfo>
            </OrderWrapper>
        )
    }

    componentDidMount(){
        var storage=window.localStorage;
        var uid = storage.getItem("UID");
        const RentID = this.props.match.params;
        this.props.rentDetail(uid, RentID);
    }

    getRentDetailList(){
        const RentDetail = this.props.RentDetaillist;
        return(
            <>
            <OrderName>{RentDetail.itemID}</OrderName>
            <OrderNumber>{RentDetail.number}</OrderNumber>
            <OrderNumber>{RentDetail.StartDate}</OrderNumber>
            <OrderNumber>{RentDetail.EndDate}</OrderNumber>
            <OrderPrice>{RentDetail.TotalPrice}</OrderPrice>
            {this.props.SetOrderID(RentDetail.orderID)}
            {this.props.SetAddress(RentDetail.ShippingAddress)}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        RentDetaillist: state.getIn(['order','RentDetaillist']),
        OrderID: state.getIn(['order','OrderID']),
        ShippingAddress: state.getIn(['order','ShippingAddress'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        rentDetail(uid, orderID){
            dispatch(actionCreator.getrentDetail(uid, orderID))
        },

        SetOrderID(orderID){
            dispatch(actionCreator.updateOrderID(orderID))
        },

        SetAddress(Address){
            dispatch(actionCreator.updateADDRESS(Address))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(RentListDetail);
