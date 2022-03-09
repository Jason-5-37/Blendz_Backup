import React, { Component } from "react";
import './About.css'

class About extends Component {
    render(){
        return(
            <div className="AboutWrapper">
                <div className="InfoWrapper">
                    <h1 className="title">We are Blendz</h1>
                    <p className="content">Blendz is the New Zealand and South Pacific distributor of slushy machines from Elmeco in Italy.<br />
              We offer machine sales and support, rentals, servicing, spare parts, slushy concentrate and accessories as a complete hassle free solution.<br />
              The ideas for Blendz are constantly being developed and tested to provide a range of unique and interesting beverages.<br />
              '2 Mix it' was conceived in conjunction with Blendz, as the vehicle in which the blended beverages can be administered.<br />
              On this site you will see our dispensing machinery and accessories which allows you to make this happen for your business.</p>
                </div>
            </div>
        )
    }
}

export default About;