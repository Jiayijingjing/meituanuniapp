<template>
<view class="scrolly" >
	<view id="demo1" class="scroll-view-item ">
		<view class="items">
			<image src="../../../static/aoliao.jpg" class="itemimg"></image>
			<view class="itemtext">
				<view class="texta">九丰土菜馆</view>
				<view class="textb">
					<view class="textb_a">月销200</view>
					<view class="textb_b">约10分钟</view>
				</view>
				<view class="textc">起送￥1 &nbsp;配送￥1 &nbsp;人均￥10</view>
				<view class="textd">江浙菜</view>
			</view>
		</view>
	</view>
	<view id="demo2" class="scroll-view-item ">
		<view class="items">
			<image src="../../../static/aoliao.jpg" class="itemimg"></image>
			<view class="itemtext">
				<view class="texta">九丰土菜馆</view>
				<view class="textb">
					<view class="textb_a">月销200</view>
					<view class="textb_b">约10分钟</view>
				</view>
				<view class="textc">起送￥1 配送￥1 人均￥10</view>
				<view class="textd">江浙菜</view>
			</view>
		</view>
	</view>
	<view id="demo3" class="scroll-view-item ">
		<view class="items">
			<image src="../../../static/aoliao.jpg" class="itemimg"></image>
			<view class="itemtext">
				<view class="texta">九丰土菜馆</view>
				<view class="textb">
					<view class="textb_a">月销200</view>
					<view class="textb_b">约10分钟</view>
				</view>
				<view class="textc">起送￥1 &nbsp;配送￥1 &nbsp;人均￥10</view>
				<view class="textd">江浙菜</view>
			</view>
		</view>
	</view>
	<view id="demo4" class="scroll-view-item ">
		<view class="items">
			<image src="../../../static/aoliao.jpg" class="itemimg"></image>
			<view class="itemtext">
				<view class="texta">九丰土菜馆</view>
				<view class="textb">
					<view class="textb_a">月销200</view>
					<view class="textb_b">约10分钟</view>
				</view>
				<view class="textc">起送￥1 &nbsp;配送￥1 &nbsp;人均￥10</view>
				<view class="textd">江浙菜</view>
			</view>
		</view>
	</view>
	<view id="demo5" class="scroll-view-item ">
		<view class="items">
			<image src="../../../static/aoliao.jpg" class="itemimg"></image>
			<view class="itemtext">
				<view class="texta">九丰土菜馆</view>
				<view class="textb">
					<view class="textb_a">月销200</view>
					<view class="textb_b">约10分钟</view>
				</view>
				<view class="textc">起送￥1 &nbsp;配送￥1 &nbsp;人均￥10</view>
				<view class="textd">江浙菜</view>
			</view>
		</view>
	</view>
	<view id="demo6" class="scroll-view-item ">
		<view class="items">
			<image src="../../../static/aoliao.jpg" class="itemimg"></image>
			<view class="itemtext">
				<view class="texta">九丰土菜馆</view>
				<view class="textb">
					<view class="textb_a">月销200</view>
					<view class="textb_b">约10分钟</view>
				</view>
				<view class="textc">起送￥1 &nbsp;配送￥1 &nbsp;人均￥10</view>
				<view class="textd">江浙菜</view>
			</view>
		</view>
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

.scrolly {
	height: 1800rpx;
	padding-left: 16rpx;
	padding-right: 16rpx;
	.items{
		width: 750rpx;
		height: 280rpx;
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
		padding-bottom: 20rpx;
		box-sizing: border-box;
		.itemimg{
			width: 250rpx;
			height: 250rpx;
			margin-right: 20rpx;
		}
		.itemtext{
			line-height: 64rpx;
			font-size: 30rpx;
			width: 430rpx;
			
			.textb{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
}
</style>