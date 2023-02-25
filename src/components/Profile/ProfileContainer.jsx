import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import { getUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to='/login'></Navigate>

        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));