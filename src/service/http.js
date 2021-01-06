import axios from 'axios';

axios.interceptors.response.use(null, (error) => {
	console.warn(error);
	return Promise.reject(error);
});

const request = async (path, data, method) => {
	let headers = {
		'Content-Type': 'application/json',
	};

	return axios({
		method,
		url: path,
		headers: headers,
		data,
	});
};

export const getRequest = (path, data) => request(path, data, 'GET');
