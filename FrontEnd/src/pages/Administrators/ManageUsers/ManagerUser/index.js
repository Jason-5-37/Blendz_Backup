import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Wrapper, Title} from "../../style";
import { CartItemTitle , CartItemWrapper, CartItem,Item, Button, CartContentWrappet} from "../../../Cart/style";
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreator';

class ManageUser extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        //console.log(this.props.list);
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <Title>Manage User pendding</Title>
                        <CartContentWrappet>
                        {this.getPenddingListTitle()}
                        {this.getPenddingList()}
                        </CartContentWrappet>
                        <CartContentWrappet>
                        {this.getRentListTitle()}
                        {this.getRentList()}
                        {this.showinput()}
                        </CartContentWrappet>
                        <CartContentWrappet>
                            {this.getApproveListTitle()}
                            {this.getApproveList()}
                        </CartContentWrappet>

                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
    componentDidMount(){
        this.props.GetUser(this.props.match.params.id);
        this.props.GetRent(this.props.match.params.id);
        this.props.GetApproveList(this.props.match.params.id);
    }

    getPenddingListTitle(){
        const PenddinglistSize = this.props.list.size;
        if(PenddinglistSize === 0){
            return (
                <h1>Nothing in Pendding</h1>
            )
        }else if (PenddinglistSize > 0){
            return[
                <div>
                <CartItemTitle>
                Pendding
                </CartItemTitle>
                <CartItemWrapper>
                <CartItem>Product name</CartItem>
                <CartItem>Quantity</CartItem>
                <CartItem>Price</CartItem>
                <CartItem>Total Price</CartItem>
                </CartItemWrapper>
                </div>
            ]
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getPenddingList(){
        const{list} = this.props;
        var ID = this.props.match.params.id;
        const PenddinglistSize = this.props.list.size;
        //console.log(PenddinglistSize);
        if(PenddinglistSize === 0 ){
            this.props.updatePenddingState(ID);
        }else if (PenddinglistSize > 0){
            this.props.updatePenddingState2(ID);
            return list.map((item) => {
                return(
                    <Item>
                            <CartItemWrapper key={item.get('id')}>
                                <CartItem>{item.get('id')}</CartItem>
                                <CartItem>{item.get('number')}</CartItem>
                                <CartItem>{item.get('Price')}</CartItem>
                                <CartItem>{item.get('number') * item.get('Price')}</CartItem>
                            </CartItemWrapper>
                            <Button onClick={() => this.props.approveItem(
                                ID,
                                item.get('id'),
                                item.get('number'),
                                item.get('Price'))}>Approve</Button>
                    </Item>
                )
            })
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }


    getRentListTitle(){
        const rentlistSize = this.props.rentlist.size;
        if(rentlistSize === 0){
            return (
                <h1>Nothing in rent list</h1>
            )
        }else if (rentlistSize > 0){
            return[
                <div>
                <CartItemTitle>
                Rent Request
                </CartItemTitle>
                <CartItemWrapper>
                <CartItem>Product name</CartItem>
                <CartItem>Quantity</CartItem>
                <CartItem>Start date</CartItem>
                <CartItem>End date</CartItem>
                <CartItem>TotalPrice</CartItem>
                <CartItem></CartItem>
                </CartItemWrapper>
                </div>
            ]
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getRentList(){
        const{rentlist} = this.props;
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        const rentlistSize = this.props.rentlist.size;
        if(rentlistSize === 0 ){
            this.props.updateRentState(ID);
        }else if (rentlistSize > 0){
            this.props.updateRentState2(ID);
            return rentlist.map((item) => {
                return(
                    <>
                    
                    <Item>
                            <CartItemWrapper key={item.get('id')}>
                                <CartItem>{item.get('id')}</CartItem>
                                <CartItem>{item.get('number')}</CartItem>
                                <CartItem>{item.get('StartDate')}</CartItem>
                                <CartItem>{item.get('EndDate')}</CartItem>
                                <CartItem>{item.get('TotalPrice')}</CartItem>
                                <CartItem></CartItem>
                                <button onClick={() => this.props.ChangeTotalPriceState()}>Select price</button>
                            </CartItemWrapper>
                            <Button onClick={() => this.props.updatePrice(
                                ID,
                                item.get('id'),
                                this.props.TotalPrice
                            )}>Update</Button>

                            {this.CheckisSetTotoalPrice(
                            ID,
                            item.get('id'),
                            item.get('number'),
                            item.get('StartDate'),
                            item.get('EndDate'),
                            item.get('TotalPrice'))}
                            
                    </Item>
                    </>
                )
            })
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    showinput(){
        if(this.props.TotalPriceState === true){
            var TotalPrice = prompt("Total Price for rent this machine is :");
            this.props.getTotalPrice(TotalPrice);
            this.props.ResetTotalPriceState();
        }
    }

    CheckisSetTotoalPrice(UID, itemID, number,StartDate, EndDate, TotalPrice){
        if(TotalPrice == null){
            return "Please update the price";
        }else{
            return(
                <Button onClick={() => this.props.Approve(UID, itemID, number,StartDate, EndDate, TotalPrice)}>Approve</Button>
            )
        }
    }
    
    getApproveListTitle(){
        const ApproveListSize = this.props.ApproveList.size;
        if(ApproveListSize === 0){
            return (
                <h1>Nothing in Pendding</h1>
            )
        }else if (ApproveListSize > 0){
            return[
                <div>
                <CartItemTitle>
                Approve Rent
                </CartItemTitle>
                <CartItemWrapper>
                <CartItem>Product name</CartItem>
                <CartItem>Quantity</CartItem>
                <CartItem>Start date</CartItem>
                <CartItem>End date</CartItem>
                <CartItem>TotalPrice</CartItem>
                <CartItem>State</CartItem>
                <CartItem></CartItem>
                </CartItemWrapper>
                </div>
            ]
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getApproveList(){
        const{ApproveList} = this.props;
        var ID = this.props.match.params.id;
        const ApproveListSize = this.props.ApproveList.size;
        //console.log(ApproveList);
        if(ApproveListSize === 0 ){
        }else if (ApproveListSize > 0){
            return ApproveList.map((item) => {
                return(
                    <Item>
                    <CartItemWrapper key={item.get('id')}>
                        <CartItem>{item.get('id')}</CartItem>
                        <CartItem>{item.get('number')}</CartItem>
                        <CartItem>{item.get('StartDate')}</CartItem>
                        <CartItem>{item.get('EndDate')}</CartItem>
                        <CartItem>{item.get('TotalPrice')}</CartItem>
                        <CartItem>{item.get('State')}</CartItem>
                        <CartItem></CartItem>
                    </CartItemWrapper>
                    </Item>
                )
            })
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }
    
}


const mapStateTothis= (state) => {
    return {
        list:state.getIn(['Admin','penddingList']),
        rentlist:state.getIn(['Admin','rentlist']),
        TotalPriceState:state.getIn(['Admin','TotalPriceState']),
        TotalPrice:state.getIn(['Admin','TotalPrice']),
        ApproveList:state.getIn(['Admin','ApproveList'])        
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        GetUser(id){
            dispatch(actionCreators.getUserdetail(id));
        },
        GetRent(id){
            dispatch(actionCreators.getRentdetail(id));
        },
        approveItem(uid, itemID, number, Price){
            dispatch(actionCreators.postToCart(uid, itemID, number, Price));
        },
        updatePrice(uid, itemID,TotalPrice){
            dispatch(actionCreators.RentpostToCart(uid, itemID,TotalPrice));
        },
        updatePenddingState(uid){
            dispatch(actionCreators.DeletePendding(uid));
        },
        updatePenddingState2(uid){
            dispatch(actionCreators.AddePendding(uid));
        },
        updateRentState(uid){
            dispatch(actionCreators.DeleteRentstate(uid));
        },
        updateRentState2(uid){
            dispatch(actionCreators.AddeRentstate(uid));
        },
        ChangeTotalPriceState(){
            dispatch(actionCreators.SetPriceState());
        },
        getTotalPrice(TotalPrice){
            dispatch(actionCreators.GetTotalPrice(TotalPrice));
        },
        ResetTotalPriceState(){
            dispatch(actionCreators.RestPrice());
        },
        Approve(UID, itemID, number,StartDate, EndDate, TotalPrice){
            dispatch(actionCreators.PostToApprove(UID, itemID, number,StartDate, EndDate, TotalPrice));
        },
        GetApproveList(UID){
            dispatch(actionCreators.GETApprovelist(UID));
        }

    }
}


export default connect(mapStateTothis, mapDispathTothis)(ManageUser);