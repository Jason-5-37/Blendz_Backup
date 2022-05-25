import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, TitleWrapper, TitleContent, ProductFrom, ProductFromWrapper,Input, Button} from "../../style";
import { StyledTextArea } from "../../../ContactUs/style";
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actionCreator';

class ManageProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "done",
            DisplayPrice: "",
            priceforPay: "",
            imgUrl: " ",
            pdfUrl: "",
            videoUrl: "",
            description: "",
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDisplayPriceChange = this.handleDisplayPriceChange.bind(this);
        this.handlepriceforPayChange = this.handlepriceforPayChange.bind(this);
        this.handleimgUrlChange = this.handleimgUrlChange.bind(this);
        this.handlepdfUrlChange = this.handlepdfUrlChange.bind(this);
        this.handlevideoUrlChange = this.handlevideoUrlChange.bind(this);
        this.handledescriptionChange = this.handledescriptionChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({Name: event.target.value});
    }
    handleDisplayPriceChange(event) {
        this.setState({DisplayPrice: event.target.value});
    }
    handlepriceforPayChange(event) {
        this.setState({priceforPay: event.target.value});
    }
    handleimgUrlChange(event) {
        this.setState({imgUrl: event.target.value});
    }
    handlepdfUrlChange(event) {
        this.setState({pdfUrl: event.target.value});
    }
    handlevideoUrlChange(event) {
        this.setState({VideoUrl: event.target.value});
    }
    handledescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        var params = this.props.match.params.id;
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <TitleWrapper>
                    <TitleContent>Product From</TitleContent>
                    </TitleWrapper>
                    <ProductFromWrapper>
                    <ProductFrom>
                            Product Name: <Input 
                            ref={(input) => {this.name = input}}
                            value = {this.state.Name}
                            onChange={this.handleChange}
                            placeholder="Name of the product" required/>
                    </ProductFrom>
                    <ProductFrom>                        
                            Display Price: <Input ref={(input) => {this.DisplayPrice = input}}
                            value = {this.state.DisplayPrice}
                            onChange={this.handleDisplayPriceChange}
                            placeholder="$16.00" required/>
                    </ProductFrom>
                    <ProductFrom>
                            Price for Pay: <Input type="number" ref={(input) => {this.PriceToPay = input}}
                            value = {this.state.priceforPay}
                            onChange={this.handlepriceforPayChange}
                            placeholder="16.00" required/>
                    </ProductFrom>
                    <ProductFrom>
                            ImgUrl: <Input ref={(input) => {this.ImgUrl = input}} 
                            value = {this.state.imgUrl}
                            onChange={this.handleimgUrlChange}
                            required/>
                    </ProductFrom>
                    <ProductFrom>
                            pdf Url: <Input ref={(input) => {this.pdfUrl = input}} 
                            value = {this.state.pdfUrl}
                            onChange={this.handlepdfUrlChange}
                            required/>
                    </ProductFrom>
                    <ProductFrom>
                            Video Url: <Input ref={(input) => {this.VideoUrl = input}} 
                            value = {this.state.VideoUrl}
                            onChange={this.handlevideoUrlChange}
                            required/>
                    </ProductFrom>
                    <ProductFrom>
                            Description (Please use &lt;br&gt;to start a new line):
                            <StyledTextArea name="message" ref={(input) => {this.des = input}}
                            value = {this.state.description}
                            onChange={this.handledescriptionChange}
                            placeholder="For example: New product <br> Name:new product <br>" required/>
                    </ProductFrom>
                    <Button onClick={() => this.props.AddProduct(
                        this.name.value, 
                        this.DisplayPrice.value,
                        this.PriceToPay.value,
                        this.ImgUrl.value,
                        this.pdfUrl.value,
                        this.VideoUrl.value,
                        this.des.value,
                        params)}>Submit</Button>
                    </ProductFromWrapper>
                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }

    componentDidMount(){
        var params = this.props.match.params.id;
        this.props.getProductDetail(params);
    }

    componentDidUpdate(){
        const productInfo = this.props.productdetail;
        if(this.state.Name === "done") {
            this.setState({
                Name: productInfo.name,
                DisplayPrice: productInfo.price,
                priceforPay: productInfo.priceforPay,
                imgUrl: productInfo.imgUrl,
                pdfUrl: productInfo.pdfUrl,
                VideoUrl: productInfo.VideoUrl,
                description: productInfo.description
            });
        }
        
    }
}

const mapStateTothis= (state) => {
    return {
        productdetail:state.getIn(['Admin','productdetail'])
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        AddProduct(name, dprice, PriceToPay, ImgUrl, pdfUrl, VideoUrl, des, params){
            dispatch(actionCreators.updateProduct(name, dprice, PriceToPay, ImgUrl, pdfUrl, VideoUrl, des, params))
        },
        getProductDetail(params){
            dispatch(actionCreators.getProduct(params));
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(ManageProductForm);