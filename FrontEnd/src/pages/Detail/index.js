import React, { Component } from "react";
import { connect } from 'react-redux';
import { DetailWrapper, Itemimg, ItemInfo, Description, Button, InputWrapper, InputButton ,Input, Request, RentInput} from "./style";
import * as actionCreators from './store/actionCreators';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '1'};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeplusone = this.handleChangeplusone.bind(this);
        this.handleChangeminusone = this.handleChangeminusone.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleChangeplusone(event) {
        let plus = this.state.value;
        plus++;
        this.setState({value: plus})
        this.props.updateQuantity(plus);
    }

    handleChangeminusone(event){
        let minus = this.state.value;
        if (minus === 1) {
            this.setState({value: 1})
        }else if (minus >= 2){
            minus--;
            this.setState({value: minus})
            this.props.updateQuantity(minus);
        }
    }

    render(){
        //console.log(this.props.data.VideoUrl)
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        let Price = this.props.data.priceforPay;
        let Type = this.props.data.type;
        return(
            <DetailWrapper>
                <Itemimg>
                    <img src={this.props.data.imgUrl} alt=''/>
                </Itemimg>
                <ItemInfo>         
                    <h1>{this.props.data.name}</h1>
                    <p>{this.props.data.price}</p>
                    <h2>Quantity</h2>
                    <InputWrapper>
                        <InputButton onClick={this.handleChangeminusone}>-</InputButton>
                        <Input value={this.props.Quantity} onChange={this.handleChange}> {this.props.Quantity} </Input>
                        <InputButton onClick={this.handleChangeplusone}>+</InputButton>
                    </InputWrapper>
                    <Button onClick={() => this.props.putIteminCart(UID,this.props.match.params.id, this.props.Quantity , Price, Type)}>
                        Put it in Cart</Button>
                        {this.CheckIfMachine(this.props.data.type)}
                </ItemInfo>
                {this.RequestforRent(UID, this.props.match.params.id)}
                <Description> 
                    <h1>Description</h1>
                    {this.getDesc()}
                </Description>
                <Description>{this.getPdf()}</Description>
                <iframe src={this.props.data.VideoUrl}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        var storage=window.localStorage;
        var Select = storage.getItem("Select");
        if (Select === "Machine"){
            this.props.getMachine(this.props.match.params.id);
        }else if (Select === "Beverage"){
            this.props.getBeverage(this.props.match.params.id);
        }else if(Select === "Accessorie"){
            this.props.getAccessorie(this.props.match.params.id);
        }else{
            return console.log("error to get detail");
        }
    }

    CheckIfMachine(type){
        if(type === "machine"){
            return(
                <Button onClick={() => this.props.openRequest()}>Reqest for Rent</Button>
            )
        }
    }

    getPdf(){
        const pdf = this.props.data.pdfUrl;
        if(typeof pdf == "undefined" || pdf == null || pdf == ""){
        }else{
            return(
                <a href={this.props.data.pdfUrl} type="application/pdf">About the machine</a>
            )
        }
    }

    getDesc() {
        const des = this.props.data.description;
        if(typeof des == "undefined" || des == null || des == ""){
            return(
                <h1>No description</h1>
            )
        }else{
            return(
                <div dangerouslySetInnerHTML={{__html: des}}/>
            )
        }
    }

    RequestforRent(UID, itemID){
        const RequestState = this.props.Request;
        if(RequestState === true){
            return(
                <Request>
                    <h1>Rent request</h1>
                    Quantity:<RentInput type="number" ref={(input) => {this.RentQuantity = input}}/>
                    From
                    <RentInput type="date" ref={(input) => {this.RentStartDate = input}}></RentInput>
                    To
                    <RentInput type="date" ref={(input) => {this.RentEndDate = input}}></RentInput>
                    <button onClick={() => this.props.handleRentRequest(
                        UID,
                        itemID,
                        this.RentQuantity.value,
                        this.RentStartDate.value,
                        this.RentEndDate.value)}>Submit</button>
                    <button onClick={() => this.props.cancelRequest()}>Cancel</button>
                </Request>
            )
        }else{
        }
    }
}

const mapStateTothis= (state) =>{
    return{
        Quantity: state.getIn(['detail', 'Quantity']),
        data: state.getIn(['detail', 'data']),
        Request: state.getIn(['detail','RequestState']),
        Type: state.getIn(['shop','selected'])
    }
}
const mapDispathTothis = (dispatch) =>({
    getMachine(id){
        dispatch(actionCreators.getMachineDetail(id));
    },
    getBeverage(id){
        dispatch(actionCreators.getBeverageDetail(id));
    },
    getAccessorie(id){
        dispatch(actionCreators.getAccessorieDetail(id));
    },
    putIteminCart(UID, itemID, number, Price, Type){
        dispatch(actionCreators.postItem(UID, itemID, number, Price, Type));
    },
    updateQuantity(number){
        dispatch(actionCreators.QUANTITY(number));
    },
    openRequest(){
        dispatch(actionCreators.RequestRent());
    },
    cancelRequest(){
        dispatch(actionCreators.CancelRequestRent());
    },
    handleRentRequest(UID, itemID, Quantity, StartDate, EndDate){
        dispatch(actionCreators.handinRentRquest(UID, itemID, Quantity, StartDate, EndDate));
    }
})

export default connect(mapStateTothis, mapDispathTothis)(Detail);