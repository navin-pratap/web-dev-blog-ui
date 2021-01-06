import * as actionTypes from '../action/actionTypes';

const INITIAL_STATE = {
	loaderStatus: false,
	listMasterDataPending: false,
	listMasterDataSuccess: false,
	listMasterDataError: {},
	listMasterDataResult: [],
};

export default function commonReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case actionTypes.SHOW_LOADER:
			return { ...state, loaderStatus: action.payload };
		case actionTypes.FETCH_MASTER_DATA_PENDING:
			return {
				...state,
				listMasterDataPending: true,
				listMasterDataSuccess: false,
			};
		case actionTypes.FETCH_MASTER_DATA_SUCCESS:
			return {
				...state,
				listMasterDataPending: false,
				listMasterDataSuccess: true,
				listMasterDataResult: action.payload.data,
			};
		case actionTypes.FETCH_MASTER_DATA_FAILED:
			return {
				...state,
				listMasterDataPending: false,
				listMasterDataSuccess: false,
				listMasterDataError: action.error,
			};
		default:
			return { ...state };
	}
}
