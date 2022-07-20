<template>
		<view class="searchs">
			<view class="sear">
				<input type="text" class="mainsearch" placeholder="火锅"  />
				<text class="sousuo" @tap="goback">搜索</text>
			</view>
			<view class="title">搜索历史</view>
			<view class="result">
				<view>烧烤</view>
				<view>水煮鱼</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goback(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.searchs{
	width: 100%;
	padding-left: 18rpx;
	padding-right: 18rpx;
	box-sizing: border-box;
	padding-bottom: 20rpx;
	
	.sear{
		
		display: flex;
		flex-direction: row;
		width: 100%;
		// align-items: center;
		justify-content: space-between;
		.mainsearch{
			width: 580rpx;
			padding-left: 20rpx;
			line-height: 58rpx;
			height: 58rpx;
			color: #666666;
			font-size: 26rpx;
			background-color: #e1e1e1;
			border-radius: 10rpx;
		}
		.sousuo{
			padding-right: 30rpx;
			font-size: 30rpx;
			line-height: 58rpx;
			height: 58rpx;
		}
		
	}
	.title{
		height: 120rpx;
		line-height: 120rpx;
		font-weight: 600;
	}
	.result{
		height: 50rpx;
		line-height: 50rpx;
		display: flex;
		flex-direction: row;
		
		view{
			line-height: 50rpx;
			font-size: 30rpx;
			padding-right: 40rpx;
			color:#565656;
		}
	}
}
</style>
