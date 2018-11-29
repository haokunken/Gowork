import http from '../utils/https.js';

export const marketInterface = (path, parameter) => {
	return http.post(path, parameter);
};
