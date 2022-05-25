import React, { Component } from "react";
import { CartWrapper, CartHeader,CartHeaderTitle, CartHeaderContent, 
    CartContentWrappet, CartItemWrapper, Item, CartItem, 
    Button, SummaryWrapper, Summarytext, Disappear, CartItemTitle,
    AddressWrapper, Input, Img} from "./style";
import { connect } from 'react-redux';
import { actionCreator as userActionCreators } from ".././User/store";
import { actionCreators as cartActionCreators } from "./store/index";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypalCheckoutButton from "../Payment/PaypalCheckoutButton";
import  PaypalCheckoutButton2 from "../Payment/PaypalCheckoutRentButton";

class Cart extends Component {
    render(){
        var storage=window.localStorage;
        var Islogin = storage.getItem("Islogin");
        var ID = storage.getItem("UID");
        this.props.getUserinfo(ID);
        if (Islogin === "login"){
        return(
            <CartWrapper>
                <CartHeader>
                <CartHeaderTitle>Cart</CartHeaderTitle>            
                <CartHeaderContent>User: <a href="/user">{this.props.username}</a></CartHeaderContent>
                </CartHeader>

                    <CartContentWrappet>
                        <h1>{this.getRentListTitle()}</h1>
                        <h1>{this.getRentList()}</h1>
                    </CartContentWrappet>

                    
                    <CartContentWrappet>
                            <h1>{this.getApproveListTitle()}</h1>
                            <h1>{this.getApproveList()}</h1>
                            {this.ChechIsEmpty(this.props.ApproverentlistState)}
                    </CartContentWrappet>

                    {this.CheckIsRent()}

                    <CartContentWrappet>
                        <h1>{this.getPenddingListTitle()}</h1>
                        <h1>{this.getPenddingList()}</h1>
                    </CartContentWrappet>
                    

                    <CartContentWrappet>
                        <h1>{this.getCartListTitle()}</h1>
                        <h1>{this.getCartList()}</h1>
                    </CartContentWrappet>
                    <SummaryWrapper>
                    
                    {this.CheckIsAddressNull()}
                    </SummaryWrapper>
                    
            </CartWrapper>
        )
        }else{
            return(
                <CartWrapper>
                    <h1>Please Login</h1> 
                </CartWrapper>
            )
        }
    }

    componentDidMount(){
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        this.props.getUserinfo(ID);
        this.props.getcartInfo(ID);
        this.props.getpenddingInfo(ID);
        this.props.getrentInfo(ID);
        this.props.getApproverent(ID);
    }

    CheckIsAddressNull(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        if(this.props.AddressState === false && this.props.CartTotalPrice !== 0){
            return(
                <>
                <Summarytext>Total: ${this.props.CartTotalPrice}</Summarytext>
                    <h1>Shipping Address:</h1>
                    <Input placeholder="Please fill your address" ref={(input) => {this.address = input}}></Input>
                    <Button onClick={() => this.props.updateAddress(UID, this.address.value)}>Pay</Button>
                </>
            )
        }else if(this.props.AddressState === true && this.props.CartTotalPrice !== 0){
            return(
            <SummaryWrapper>
            <Summarytext>Total: ${this.props.CartTotalPrice}</Summarytext>
                {this.CheckTotalPrice()}
            </SummaryWrapper>
            )
        }else if(this.props.CartTotalPrice === 0){
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    CheckIsRent(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        if(this.props.TotalrentPrice > 0 && this.props.AddressState === false){
            return(
                <SummaryWrapper>
                    <Summarytext>Total: ${this.props.TotalrentPrice}</Summarytext>
                    <h1>Shipping Address:</h1>
                    <Input placeholder="Please fill your address" ref={(input) => {this.address = input}}></Input>
                    <Button onClick={() => this.props.updateAddress(UID, this.address.value)}>Pay</Button>
                </SummaryWrapper>
            )
        }else if(this.props.TotalrentPrice > 0 && this.props.AddressState === true){
            return(
                <SummaryWrapper>
                <Summarytext>Total: ${this.props.TotalrentPrice}</Summarytext>
                {this.CheckRentPrice()}
                </SummaryWrapper>
            )
        }
    }

    CheckRentPrice(){
        if(this.props.TotalrentPrice === 0){
            return (
                <h1>Noting To Pay</h1>
            )
        }else if (this.props.TotalrentPrice > 0){
            return(
                <PayPalScriptProvider 
                options={{ "client-id": "AZM_MzL_PrjRYM9QMPq8p69xf4-fK8MR7WpTcH4mSGk-IwY2ZJLkziRc7qGf_sfzOXhkSajfBcXd5UQS&currency=NZD" }}>
                    <PaypalCheckoutButton2 product={this.props.TotalrentPrice} />
                </PayPalScriptProvider>
            )
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    CheckTotalPrice(){
        if(this.props.CartTotalPrice === 0){
            return (
                <h1>Noting To Pay</h1>
            )
        }else if (this.props.CartTotalPrice > 0){
            return(
                <PayPalScriptProvider 
                options={{ "client-id": "AZM_MzL_PrjRYM9QMPq8p69xf4-fK8MR7WpTcH4mSGk-IwY2ZJLkziRc7qGf_sfzOXhkSajfBcXd5UQS&currency=NZD" }}>
                    <PaypalCheckoutButton product={this.props.CartTotalPrice} />
                </PayPalScriptProvider>
            )
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getCartListTitle(){
        const cartlistSize = this.props.cartlist.size;
        if(cartlistSize === 0){
            return (
            <Img src="https://firebasestorage.googleapis.com/v0/b/blendz-1e3a0.appspot.com/o/EmptyCart.png?alt=media&token=ad201776-061b-492f-b10a-f43b42ed8b86" 
            alt=''/>
            )
        }else if (cartlistSize > 0){
            return[
                <div>
                <CartItemTitle>
                    Cart
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

    getCartList(){
        const{cartlist} = this.props;
        const cartlistSize = this.props.cartlist.size;
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        var Single = 0;
        var Total = 0;
        Total = Total + Single
        if(cartlistSize === 0){
            this.props.updateTotalPrice(ID, 0);
        }else if (cartlistSize > 0){

            return cartlist.map((item) => {

                return[
                    <Item>
                        <CartItemWrapper key={item.get('id')}>
                            <CartItem>{item.get('id')}</CartItem>
                            <CartItem>{item.get('number')}</CartItem>
                            <CartItem>{item.get('Price')}</CartItem>
                            <CartItem>{Single = item.get('number') * item.get('Price')}</CartItem>
                        </CartItemWrapper>
                            <Disappear>{Total = Total + Single}</Disappear>
                            {this.getTotalPrice(Total)}
                            <Button onClick={() => this.props.deleteitem(ID,item.get('id'))}><a href="/cart">Delete</a></Button>
                    </Item>
                ]
            }
            )
        }else{
            return (
                <h1>Error</h1>
            )
        }
    }

    getTotalPrice(Totalprice){
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        this.props.updateTotalPrice(ID, Totalprice);
    }

    getPenddingListTitle(){
        const PenddinglistSize = this.props.penddinglist.size;
        if(PenddinglistSize === 0){
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
        const{penddinglist} = this.props;
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        const PenddinglistSize = this.props.penddinglist.size;
        if(PenddinglistSize === 0 ){
            //console.log("Noting in pendding list")
        }else if (PenddinglistSize > 0){
            return penddinglist.map((item) => {
                return(
                    <Item>
                            <CartItemWrapper key={item.get('id')}>
                                <CartItem>{item.get('id')}</CartItem>
                                <CartItem>{item.get('number')}</CartItem>
                                <CartItem>{item.get('Price')}</CartItem>
                                <CartItem>{item.get('number') * item.get('Price')}</CartItem>
                            </CartItemWrapper>
                            <Button onClick={() => this.props.deletependdingitem(ID,item.get('id'))}><a href="/cart">Delete</a></Button>

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
        }else if (rentlistSize > 0){
            return[
                <div>
                <CartItemTitle>
                Rent Request
                </CartItemTitle>
                <CartItemWrapper>
                <CartItem>Product name</CartItem>
                <CartItem>Quantity</CartItem>
                <CartItem>Total Price</CartItem>
                <CartItem>Start date</CartItem>
                <CartItem>End date</CartItem>
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
            //console.log("Noting in pendding list")
        }else if (rentlistSize > 0){
            return rentlist.map((item) => {
                return(
                    <Item>
                            <CartItemWrapper key={item.get('id')}>
                                <CartItem>{item.get('id')}</CartItem>
                                <CartItem>{item.get('number')}</CartItem>
                                <CartItem>To be Updated</CartItem>
                                <CartItem>{item.get('StartDate')}</CartItem>
                                <CartItem>{item.get('EndDate')}</CartItem>
                            </CartItemWrapper>
                            <Button onClick={() => this.props.deleteRentrequest(ID,item.get('id'))}><a href="/cart">Delete</a></Button>
                    </Item>
                )
            })
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    getApproveListTitle(){
        if(this.props.TotalrentPrice === 0){
        }else if (this.props.TotalrentPrice > 0){
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
        const{Approverentlist} = this.props;
        const ApproveListSize = this.props.Approverentlist.size;
        //console.log(ApproveListSize);
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        var Single = 0;
        var Total = 0;
        Total = Total + Single
        if(ApproveListSize === 0 ){
        }else if (ApproveListSize > 0){
            return Approverentlist.map((item) => {
                const State = item.get('State');
                //console.log(State);
                if(State === "NotPay"){
                    return(
                        <Item>
                        <CartItemWrapper key={item.get('id')}>
                            <CartItem>{item.get('id')}</CartItem>
                            <CartItem>{item.get('number')}</CartItem>
                            <CartItem>{item.get('StartDate')}</CartItem>
                            <CartItem>{item.get('EndDate')}</CartItem>
                            <CartItem>{Single = item.get('TotalPrice') *1}</CartItem>
                            <CartItem></CartItem>
                        </CartItemWrapper>
                        <Disappear>{Total = Total + Single}</Disappear>
                        {this.getTotalRentPrice(Total)}
                        {this.props.updateRentApproveState()}
                        <Button onClick={() => this.props.deleteApproveRentitem(ID,item.get('id'))}><a href="/cart">Delete</a></Button>
                        </Item>
                    )
                }
            })
        }else{
            return(
                <h1>Error</h1>
            )
        }
    }

    ChechIsEmpty(RentState){
        if( RentState === false){
            this.getTotalRentPrice(0);
        }
    }

    getTotalRentPrice(Totalprice){
        var storage=window.localStorage;
        //console.log(Totalprice);
        var ID = storage.getItem("UID");
        this.props.updateTotalRentPrice(ID, Totalprice);
    }
}



const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login'),
        username: state.getIn(['user', 'name']),
        useremail: state.getIn(['user', 'email']),
        cartlist: state.getIn(['cart','cartlist']),
        penddinglist: state.getIn(['cart','penddinglist']),
        rentlist: state.getIn(['cart','rentlist']),
        CartTotalPrice: state.getIn(['user','CartTotalPrice']),
        TotalrentPrice: state.getIn(['user','TotalrentPrice']),
        Approverentlist:state.getIn(['cart','Approverentlist']),
        ApproverentlistState:state.getIn(['cart','NullApproveRentList']),
        AddressState:state.getIn(['cart','AddressState'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        getUserinfo(id){
            dispatch(userActionCreators.getUser(id))
        },
        getcartInfo(id){
            dispatch(cartActionCreators.getCart(id))
        },
        deleteitem(uid, itemID){
            dispatch(cartActionCreators.deleteCartitem(uid, itemID))
        },
        getpenddingInfo(id){
            dispatch(cartActionCreators.getPendding(id))
        },
        deletependdingitem(uid, itemID){
            dispatch(cartActionCreators.deletePenddingitem(uid, itemID))
        },
        updateTotalPrice(uid, TotalNumber){
            dispatch(cartActionCreators.updateTotalPrice(uid, TotalNumber))
        },
        getrentInfo(id){
            dispatch(cartActionCreators.getRentdetail(id));
        },
        deleteRentrequest(uid, itemID){
            dispatch(cartActionCreators.deleteRentRequest(uid, itemID))
        },
        getApproverent(id){
            dispatch(cartActionCreators.GETApprovelist(id));
        },
        deleteApproveRentitem(uid, itemID){
            dispatch(cartActionCreators.deleteApproveRent(uid, itemID))
        },
        updateTotalRentPrice(uid, TotalNumber){
            dispatch(cartActionCreators.updateTotalrent(uid, TotalNumber))
        },
        updateRentApproveState(){
            dispatch(cartActionCreators.updateNOTNULL())

        },
        updateAddress(UID, address){
            dispatch(cartActionCreators.updateAddressState(UID, address))

        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(Cart);