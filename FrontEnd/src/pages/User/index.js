import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/index';
import { actionCreator as userActionCreators } from "./store";
import { Button, ProfileTitle, UserInfo, ChangeNameForm, ChangeNameContent ,SmallButton} from "./style";

class User extends Component {
    render(){
        return(
            <div>
            <ProfileTitle>Welcome to your profiles</ProfileTitle>
            <UserInfo>{this.props.username}</UserInfo>
            <UserInfo>{this.props.useremail}</UserInfo>
            <Button onClick={() => this.props.ChangeName()}>Update User Name</Button>
            {this.ChangeName()}
            <Button onClick={() => window.location.href = 'OrderList'}>order List</Button>
            <Button onClick={() => this.props.logout()}>Logout</Button>
            </div>
        )
    }

    componentDidMount(){
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        this.props.getUserinfo(ID);
    }

    ChangeName(){
        var storage=window.localStorage;
        var ID = storage.getItem("UID");
        if(this.props.ChangeNameState === true){
            return(
                <ChangeNameForm>
                    <ChangeNameContent>Please enter your New User Name</ChangeNameContent>
                    <ChangeNameContent>
                        <input ref={(input) => {this.name = input}}/>
                    </ChangeNameContent>
                    <SmallButton onClick={() => this.props.UpdateName(this.name, ID)} ><a href="/user">Submit</a></SmallButton>
                    <SmallButton onClick={() => this.props.CancelChangeName()} >Cancel</SmallButton>
                </ChangeNameForm>
            )
        }else if (this.props.ChangeNameState == false){
            console.log("ChangeName is working");
        }else{
            return (
                <h1>Erro</h1>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login'),
        username: state.getIn(['user', 'name']),
        useremail: state.getIn(['user', 'email']),
        ChangeNameState: state.getIn(['user','ChangeNameState'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.log_out())
        },
        getUserinfo(id){
            dispatch(userActionCreators.getUser(id))
        },
        ChangeName(){
            dispatch(userActionCreators.Changename())
        },
        UpdateName(name, ID){
            dispatch(userActionCreators.updatename(name.value, ID))
        },
        CancelChangeName(){
            dispatch(userActionCreators.CancelChangename())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(User);