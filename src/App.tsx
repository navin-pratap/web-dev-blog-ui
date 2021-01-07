import React, { Component } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showLoader, getMasterData } from './action/common';
import Employee from './components/Employee';

export interface AppProps {
	loaderStatus: Boolean;
	listMasterDataResult: any;
	showLoader: (status: any) => {};
	getMasterData: (data: any) => {};
}

export interface AppState {}

class App extends Component<AppProps, AppState> {
	render() {
		const props = this.props;

		return (
			<Box className='App'>
				<Box>
					<Typography variant='h4' color='primary'>
						Welcome to React App with typescript.
					</Typography>
				</Box>
				<Box>
					<Typography variant='body1' color='textPrimary'>
						Loader Status: {props.loaderStatus ? 'Yes' : 'No'}
					</Typography>
					<Button color='primary' onClick={() => props.showLoader(!props.loaderStatus)}>
						Click Me!!
					</Button>
					<Button color='secondary' onClick={() => props.getMasterData({ test: 'a' })}>
						Click Me for API call!!
					</Button>
					<Employee listMasterDataResult={props.listMasterDataResult} />
				</Box>
			</Box>
		);
	}
}

const mapStateToProps = (state: any) => ({
	...state.commonReducer,
});

const mapDispatchToProps = (dispatch: any) =>
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
