import wx from 'weixin-js-sdk';
import axios from 'axios';

export const wxconfig = (path, parameter) => {
	let data = {
		appid: 'wxb1b6b0f628f124d2',
		mch_id: '1395483902',
		nonce_str: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS'
	};
	return axios({
		method: 'post',
		url: 'https://api.mch.weixin.qq.com/pay/unifiedorder',
		data: data //向服务端提供授权url参数，并且不需要#后面的部分
	}).then((res) => {
		console.log();
	});
};
