<template>
	<view>
		<view class="title_01">为你优选</view>
		<scroll-view class="scroll-view_H" scroll-x="true"  scroll-left="0">
			<view id="demo1" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/tea.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶</view>
				</view>
			</view>
			<view id="demo2" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/milk.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶高山茶叶买一送三</view>
				</view>
			</view>
			<view id="demo3" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/oil.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶高山</view>
				</view>
			</view>
			<view id="demo3" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/tea02.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶买一送三</view>
				</view>
			</view>
			<view id="demo3" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/tea.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶</view>
				</view>
			</view>
			<view id="demo3" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/oil.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶</view>
				</view>
			</view>
			<view id="demo3" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/tea02.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶</view>
				</view>
			</view>
			<view id="demo3" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/milk.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶</view>
				</view>
			</view>
			<view id="demo3" class="scroll-view-item_H">
				<view class="items">
					<image src="../../../static/tea.jpg" class="pre_img"></image>
					<view class="pretext">高山茶叶</view>
				</view>
			</view>
		</scroll-view>
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
		
	}
}
</script>

<style lang="scss" scoped>
	.title_01{
		line-height: 40rpx;
		padding-left:16rpx;
	}
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
		.scroll-view-item_H {
			display: inline-block;
			width: 180rpx;
			height: 300rpx;
			line-height: 300rpx;
			text-align: center;
			font-size: 36rpx;
			padding: 30rpx;
			box-sizing: border-box;
			margin-right: 20rpx;
			.items{
				display: flex;
				flex-direction: column;
				.pre_img{
					width: 180rpx;
					height: 180rpx;
				}
				.pretext{
					line-height: 80rpx;
					font-size: 26rpx;
					white-space: nowrap; 
					overflow: hidden;
					text-overflow: ellipsis;

				}
			}
			
		}
	
}
</style>