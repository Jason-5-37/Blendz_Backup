import React, { Component } from "react";
import { Redirect, Link} from "react-router-dom";
import { Wrapper, TitleWrapper, TitleContent, ProductWrapper, ShopInforItem ,Button, ProdutcTitleContent, Button2} from "../style";
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreator';

class AdministratorsPendding extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        var type = storage.getItem("Type");
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <TitleWrapper>
                    <Button2><a href="http://localhost:3000/Administrators/ManageProduct/AddProduct">Add Product to</a></Button2>
                    <ProdutcTitleContent onClick={() => this.props.handleInput("Machine")}><button>Slushy Machine</button></ProdutcTitleContent>
                    <ProdutcTitleContent onClick={() => this.props.handleInput("Beverage")}><button>Beverages</button></ProdutcTitleContent>
                    <ProdutcTitleContent onClick={() => this.props.handleInput("Accessories")}><button>Accessories</button></ProdutcTitleContent>
                    </TitleWrapper>
                    <ProductWrapper>
                    {this.getList()}
                    </ProductWrapper>
                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }

    componentDidMount(){
        this.props.handleInput("Machine");
    }

    getList(){
            const {productlist} = this.props;        
            return productlist.map((item) =>{
                return (
                    <>
                    <div key={item.get('id')}>
                    <ShopInforItem>
                        <Link to={`/Administrators/ManageProduct/${item.get('id')}`} ><img src={item.get('imgUrl')} alt=''></img></Link>
                        <p>{item.get('name')}</p>
                        <p>{item.get('price')}</p>
                        <button onClick={() => this.props.deletProduct(item.get('id'))}>Delete</button>
                    </ShopInforItem>
                    </div>
                    </>
                );
            });
    }

}

const mapStateTothis= (state) => {
    return {
        productlist: state.getIn(['Admin','Productlist'])
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        handleInput(Type){
            dispatch(actionCreators.getProductList(Type));
        },
        postTodb(){
            dispatch(actionCreators.updateProduct())
        },
        deletProduct(id){
            dispatch(actionCreators.deletItem(id))
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(AdministratorsPendding);