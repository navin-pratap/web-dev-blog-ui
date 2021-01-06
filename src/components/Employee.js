import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Employee extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Employee Details</h1>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		...state.commonReducer,
// 	};
// };
// const mapDispatchToProps = (dispatch) => ({
// 	showLoader: (data) => dispatch(showLoader(data)),
// 	getMasterData: (data) => dispatch(getMasterData(data)),
// });
export default Employee;
