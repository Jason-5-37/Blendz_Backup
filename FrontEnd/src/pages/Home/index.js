import React, { Component } from "react";
import { HomeWrapper, LeftArea, RightArea, RightItem } from "./style";

class Home extends Component {
    render(){
        return(
            <HomeWrapper>
                <RightArea>
                    <RightItem className="title">Welcome to Blendz</RightItem>
                    <RightItem className="text">Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan.</RightItem>
                </RightArea>
                <LeftArea></LeftArea>
            </HomeWrapper>
        )
    }
}

export default Home;