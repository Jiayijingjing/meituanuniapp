<template>
	<view>
		<view class="neartitle">
			<view class="title01">
				<view class="titlea" @tap="godeli('delia')">综合排序</view>
				<view class="titlea" @tap="godeli('delib')">销量高</view>
				<view class="titlea" @tap="godeli('delic')">速度快</view>
				<view class="titlea" @tap="godeli('delid')">津贴联盟</view>
			</view>
			<view class="shaixuan" @tap="godeli('delie')">筛选</view>
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
		methods: {
			godeli(a){
				this.$emit('godeli');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.neartitle{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		font-size: 28rpx;
		color: #646464;
		.title01{
			display: flex;
			flex-direction: row;
			
			.titlea{
				line-height: 60rpx;
				padding-left:16rpx;
				box-sizing: border-box;
			}
			
		}
		.shaixuan{
				
				line-height: 60rpx;
				padding-right: 24rpx;
				
		}
	}
</style>