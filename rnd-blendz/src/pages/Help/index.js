import React, { Component } from "react";
import { Answer, Button, HelpWrapper, Question, QuestionWrapper } from "./style";
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Help extends Component {
    render(){
        return(
            <HelpWrapper>
                <QuestionWrapper>
                <Button className="left" onClick={this.props.handleonClickOn}>ON</Button>
                <Button className="right" onClick={this.props.handleonClickOFF}>OFF</Button>
                {this.getQuestion(this.props.switch)}
                </QuestionWrapper>
            </HelpWrapper>
        )
    }
    
    getQuestion() {
        if(this.props.switch){
            return console.log(123);
        }
        else{
            return console.log(456);
        }
    }
}

const mapStateTothis= (state) => {
    return {
        a: state.get('help').get('switch')
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        handleonClickOn(){
            dispatch(actionCreators.questionON());
        },

        handleonClickOFF(){
            dispatch(actionCreators.questionOFF());
        }
    }
}

export default connect(mapStateTothis, mapDispathTothis)(Help);