import React, { Component } from "react";
import { ShopIcon, ShopIconWrapper, ShopWrapper, Title } from "./style";

class Shop extends Component {
    render(){
        return(
            <ShopWrapper>
                <Title>What are you looking for today?</Title>
                <ShopIconWrapper>
                    <ShopIcon className="icon1"></ShopIcon>
                    <ShopIcon className="icon2"></ShopIcon>
                    <ShopIcon className="icon3"></ShopIcon>
                </ShopIconWrapper>
            </ShopWrapper>
        )
    }
}

export default Shop;