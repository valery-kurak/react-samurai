import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, requestUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            { this.props.isFetching && <Preloader /> }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers })
)(UsersContainer);