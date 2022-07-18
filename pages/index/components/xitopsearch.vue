<template>
	<view class="searchs">
		<view class="sear">
			<image src="../../../static/fangda.png" class="searchimg"></image>
			<input type="text" class="mainsearch" placeholder="火锅"  />
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	onLoad() {
	
	},
	methods:{
		
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
		background-color: #ffa850;
		.sear{
			background-color: #fafafa;
			border-radius: 10rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			
			.mainsearch{
				width: 640rpx;
				line-height: 58rpx;
				height: 58rpx;
				color: #666666;
				font-size: 26rpx;
			}
			.searchimg{
				width: 30rpx;
				height: 30rpx;
				margin-left: 18rpx;
				
			}
		}
		
	}
</style>