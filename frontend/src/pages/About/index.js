import React, { Component } from "react";
import { AboutWrapper, InfoWrapper, Title, Content } from "./style";

class About extends Component {
    render(){
        return(
            <AboutWrapper>
                <InfoWrapper>
                    <Title>WELCOME TO BLENDZ</Title>
                    <Content> 
                        <p><strong>Blendz</strong> is the New Zealand and South Pacific distributor of slushy machines from <a href="http://www.elmeco.com/en/" target="_blank">Elmeco</a> in Italy.</p>
                        <p>We offer machine sales and support, rentals, servicing, spare parts, slushy concentrate and accessories as a complete hassle free solution.</p>
                        <p> The ideas for <strong>Blendz</strong> are constantly being developed and tested to provide a range of unique and interesting beverages.</p>
                        <p>'2 Mix it' was conceived in conjunction with <strong>Blendz</strong>, as the vehicle in which the blended beverages can be administered.</p>
                        <p>On this site you will see our dispensing machinery and accessories which allows you to make this happen for your business.</p>
                    </Content>
                </InfoWrapper>
            </AboutWrapper>
        )
    }
}

export default About;