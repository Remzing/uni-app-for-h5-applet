// 公共函数
import globalData from '@/common/utils/config';

const util = {
	//图片上传
	upImages(count, uploadImages, callback) {
	  uni.chooseImage({
	    count: count - uploadImages.length, // 默认9
	    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
	    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
	    success: function(res) {
	      if (res.errMsg == "chooseImage:ok"){
	        callback(res)
	      }
	    },
	    fail: function() {}
	  })
	},
	// 上传文件
	uploadFile(options = {}){
		uni.showLoading({
			mask:true,
		})
		uni.uploadFile({
			url: globalData.uploadImgUrl, //
			filePath: options.filePath ,
			name: 'file',
			success: (uploadFileRes) => {
				let _data = JSON.parse(uploadFileRes.data)
				 if (_data.errcode > -1 || _data.error>-1) {
          if (typeof options.success == "function") {
            options.success(_data);
          }
        } else {
					uni.showModal({
						content: _data.errmsg || '上传失败！',
						showCancel: false
					});
          
        }
			},
			complete:()=> {
				uni.hideLoading()
			}
		});
	},
	showModal(data){
		uni.showModal({
			content: data.content || '操作错误，请重试！',
			showCancel: false
		});
	},
	showToast(data){
		uni.showToast({
			title: data.title+'',
			icon: data.icon||'none',
			mask: true,
			duration: data.duration ||1500
		});
	}
}

export default util