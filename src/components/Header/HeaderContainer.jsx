import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderComponent extends React.Component {
  render() {
    return <Header {...this.props}/>
  }
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login

})
export default connect(mapStateToProps, {getAuthUserData, logout}) (HeaderComponent)