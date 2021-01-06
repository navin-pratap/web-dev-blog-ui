import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showLoader, getMasterData } from './action/common';
import Employee from './components/Employee';

class App extends Component {
	render() {
		const props = this.props;
		console.log(props);
		return (
			<div className='App'>
				{/* <header className='App-header'> */}
				<p>Loader Status: {props.loaderStatus ? 'Yes' : 'No'}</p>
				<button onClick={() => props.showLoader(!props.loaderStatus)}>Click Me!!</button>
				<button onClick={() => props.getMasterData({ test: 'a' })}>Click Me for API call!!</button>
				<Employee listMasterDataResult={props.listMasterDataResult} />
				{/* </header> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	...state.commonReducer,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			showLoader,
			getMasterData,
		},
		dispatch
	);
// const mapDispatchToProps = (dispatch) => ({
// 	showLoader: (data) => dispatch(showLoader(data)),
// 	getMasterData: (data) => dispatch(getMasterData(data)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(App);
