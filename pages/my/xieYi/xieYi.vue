<template>
	<view>
		<rich-text :nodes="infoData.content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				page:'', //（1社宾介绍 2服务协议 3隐私策略）
				infoData:{}
			};
		},
		onLoad(options){
			this.options = options
			
			this.init()
			console.log('uni.request',uni.request)
		},
		onShow(){
		},
    methods: {
      init(){
				this.page = this.options.page||''
				let title = ''
				if(this.page==1){
					title='社宾介绍'
				}else if(this.page==2){
					title='服务协议'
				}else if(this.page==3){
					title='隐私策略'
				}
				uni.setNavigationBarTitle({
					title
				})
				this.$request({
					// 服务协议，隐私策略
					url:'association/client/setting/serviceContent.do',
					data: {
						type: this.page
					},
					success: (res) => {
						console.log('ryy-my-request mineInit', res)
						let _data = res.data||{}
						this.infoData = _data
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
