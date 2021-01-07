import * as actionTypes from './actionTypes';
import { getRequest } from '../service/http';
import { employeeService, mockEmployeeService } from '../config/microServiceUrl';

export const showLoader = (showLoaderStatus) => {
	return {
		type: actionTypes.SHOW_LOADER,
		payload: showLoaderStatus,
	};
};

const fetchMasterDataPending = () => ({
	type: actionTypes.FETCH_MASTER_DATA_PENDING,
});
const fetchMasterDataCompleted = (payload) => ({
	type: actionTypes.FETCH_MASTER_DATA_SUCCESS,
	payload,
});
const fetchMasterDataFailed = (error) => ({
	type: actionTypes.FETCH_MASTER_DATA_FAILED,
	error,
});

export const getMasterData = (data) => {
	return (dispatch) => {
		dispatch(fetchMasterDataPending());
		return getRequest(employeeService, data)
			.then((response) => {
				if (response.status === 200) {
					dispatch(fetchMasterDataCompleted(response.data));
				} else {
					dispatch(fetchMasterDataFailed('error'));
				}
			})
			.catch((error) => {
				console.log(error);
				dispatch(fetchMasterDataFailed(error));
			});
	};
};
export const getMockMasterData = (data) => {
	return (dispatch) => {
		dispatch(fetchMasterDataPending());
		return getRequest(mockEmployeeService, data)
			.then((response) => {
				if (response.status === 200) {
					dispatch(fetchMasterDataCompleted(response.data));
				} else {
					dispatch(fetchMasterDataFailed('error'));
				}
			})
			.catch((error) => {
				console.log(error);
				dispatch(fetchMasterDataFailed(error));
			});
	};
};
