import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Wrapper, Title, UserWrapper, UserListWrapper} from "../style";
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreator';

class GetAllUser extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");      
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <Title>All User</Title>
                    <UserListWrapper>
                        {this.showUserList()}
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

    showUserList(){
        const {userList} = this.props;
        return userList.map((item) =>{
            return (
            <UserWrapper>
                <Link key={item.get('id')} to={`/Administrators/ManageAllUser/${item.get('id')}`} >
                    <p>{item.get('name')}</p>
                    <p>{item.get('email')}</p>
                    </Link>
            </UserWrapper>
            );
            
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


export default connect(mapStateTothis, mapDispathTothis)(GetAllUser);