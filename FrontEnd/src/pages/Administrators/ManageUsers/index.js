import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Wrapper, Title, UserWrapper, UserListWrapper} from "../style";
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreator';

class ManageUsers extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");      
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <Title>Manage User pendding</Title>
                    <UserListWrapper>
                        pendding
                        {this.showPenddingUserList()}
                    </UserListWrapper>
                    <UserListWrapper>
                        Rent Request
                        {this.showRentRequestUserList()}                    
                    </UserListWrapper>

                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
    componentDidMount(){
        this.props.GetAllUsers();
    }

    showPenddingUserList(){
        const {userList} = this.props;
        return userList.map((item) =>{
            const Pendding = item.get('Pendding');
            if(Pendding === "Yes"){
                return (
                    <UserWrapper>
                        <Link key={item.get('id')} to={`/Administrators/ManageUser/${item.get('id')}`} >
                            <p>{item.get('name')}</p>
                            <p>{item.get('email')}</p>
                        </Link>
                    </UserWrapper>
                        );
            }else{
            }
        });
    }

    showRentRequestUserList(){
        const {userList} = this.props;
        return userList.map((item) =>{
            const RentRequest = item.get('RentRequest');
            if(RentRequest === "Yes"){
                return (
                    <UserWrapper>
                        <Link key={item.get('id')} to={`/Administrators/ManageUser/${item.get('id')}`} >
                            <p>{item.get('name')}</p>
                            <p>{item.get('email')}</p>
                        </Link>
                    </UserWrapper>
                        );
            }else{
            }
        });
    }
}

const mapStateTothis= (state) => {
    return {
        userList: state.getIn(['Admin','userList'])
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        GetAllUsers(){
            dispatch(actionCreators.getUserList());
        }
    }
}


export default connect(mapStateTothis, mapDispathTothis)(ManageUsers);