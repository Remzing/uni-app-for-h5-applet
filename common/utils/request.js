import globalData from '@/common/utils/config';

export function request (options){
	// console.log('ryy-globalData', globalData)
// 	if(typeof options.data === 'object'){
// 		options.data.session = globalData.session
// 	}else{
// 		options.data = {}
// 		options.data.session = globalData.session
// 	}
	uni.request({
		url: globalData.requestDomain +options.url,
		method: "POST",
		dataType: "json",
		header: {
			"content-type": "application/x-www-form-urlencoded",
			"token": globalData.session||'',
		},
		data: options.data||{},
		success: (res) => {
			// console.log('request success', res)
			if(res.data=='noLogin'){
				console.log('request noLogin')
				login()
				return
			}
			if (res.statusCode != 200) {
				uni.showModal({
					content: res.statusCode + ' 服务器请求错误',
					showCancel: false
				});
				return
			}
			globalData.session = res.data.session
			if (res.data.errcode > 0) {
				if (typeof options.success == "function") {
					options.success(res.data);
				}
			} else {
				if (res.data.errmsg=="用户被禁用") {
					uni.showModal({
						content: res.data.errmsg || '服务器返回错误！',
						showCancel: false
					});
					return;

				}
				uni.showModal({
					content: res.data.errmsg || '服务器返回错误！',
					showCancel: false
				});
				return;
			}
		},
		fail: (err) => {
			// console.error('request fail', err);
			if (typeof options.fail == "function") {
				options.fail(err);
			} else if (typeof options.fail == "string") { //请求失败的弹框提示
				uni.showModal({
					content: options.fail,
					showCancel: false
				});
				
			} else{
				uni.showModal({
					content: err.errMsg,
					showCancel: false
				});
			}
		},
		complete:() => {
			// console.log('request complete');
			if (typeof options.complete == "function") {
				options.complete();
			}
		}
	});
}


export async function asyncRequest(url,data = {}){
	return new Promise((res,rej)=>{
		request({
			url, data,
			success: rep => res(rep),
			fail: err => rej(err)
		})
	})
}

export function fetchDomain() {
  return new Promise((resolve, reject) => {
    request({
      // 获取domain等信息
      url: 'association/client/login/getDomain.do',
      data: {},
      success: res => {
        // Vue.prototype.$domain = res.data.domain
        // setTimeout(()=>{
        resolve(res.data.domain)

        // },5000)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}
function login (callback){
	request({
		url: 'association/client/login/getCodeUrl.do',
		data: {
			type:'2',
			// mobile_model:''
		},
		success: (res) => {
			console.log('request success', res)
			// if(res.data&&res.data.data){
				console.log('request success2', res.data.code_url)
				window.location.href = res.data.code_url
				console.log('request success3', res.data.code_url)
			// }
		},
		fail: (err) => {
			
		},
		complete: () => {
		}
	});
}
// function wxlogin (){
// 	let APPID = 'wx3723bdf8e284b04c',
// 			REDIRECT_URI = 'my/wxlogin/wxlogin',
// 			code = '',
// 			SCOPE = 'snsapi_userinfo',
// 			STATE = 'ryy-';
// 			
// 	let url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+APPID+'&redirect_uri='+REDIRECT_URI+'&response_type='+code+'&scope='+SCOPE+'&state='+STATE+'#wechat_redirect'
// }