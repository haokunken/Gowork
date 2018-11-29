'use strict';
// import 'babel-polyfill';
import axios from 'axios';

// var md5 = require('../utils/md5.js');
// var sole = 'hsadsgadhjgasdhkg';
// let sole_1 = md5.hexMD5(sole).toLowerCase();
// let sole_2 = sole_1.substring(4, 14);
// const sole_3 = md5.hexMD5(sole_2).toLowerCase();
// let sole_4 = sole_3.substring(6, 16);

// axios.defaults.baseURL = 'http://192.168.31.9:8080/api';
axios.defaults.baseURL = 'http://192.168.31.9:21071';
// axios.defaults.baseURL = 'http://192.168.31.1:8082';
// axios.defaults.baseURL = 'http://192.168.31.9:21071/api';

axios.interceptors.request.use(
	(config) => {
		// loading
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.resolve(error.response);
	}
);

function checkStatus(response) {
	// loading
	// 如果http状态码正常，则直接返回数据
	if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
		return response;
		// 如果不需要除了data之外的数据，可以直接 return response.data
	} else {
	}
	// 异常状态下，把错误信息返回去
	return {
		status: -404,
		msg: '网络异常'
	};
}

function checkCode(res) {
	// 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
	if (res.status === -404) {
		this.$router.push({ name: 'wrong' });
		alert(res.msg);
	}
	if (res.data && !res.data.success) {
		// alert(res.data.error_msg);
	}
	// console.log(res.data);
	return res;
}

export default {
	post(url, data) {
		return axios({
			method: 'post',
			url,
			data: data,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
			.then((response) => {
				return checkStatus(response);
			})
			.then((res) => {
				return checkCode(res);
			})
			.catch((error) => {
				console.log('错误', error);
			});
	},
	get(url, params) {
		return axios({
			method: 'get',
			url,
			params, // get 请求时带的参数
			timeout: 10000,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				user: sole,
				reqMd5No: sole_4
			}
		})
			.then((response) => {
				return checkStatus(response);
			})
			.then((res) => {
				return checkCode(res);
			})
			.catch((error) => {
				console.log('错误', error);
			});
	}
};
