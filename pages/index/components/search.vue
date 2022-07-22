<template>
	<view>
	<!-- 定位 -->
		<view class="positions">
			<image src="../../../static/positions.png" class="posiimg"></image>
			<view class="add">阿里巴巴淘宝城2期产业园</view>
		</view>
		<view class="searchs">
			<view class="sear">
				<image src="../../../static/fangda.png" class="searchimg" @tap="gotosearch" ></image>
				<input type="text" class="mainsearch" placeholder="火锅" />
			</view>
		</view>
		<swiper class="swiper" :indicator-dots="indicatorDots" indicator-color="#dddddd" indicator-active-color="#ffa850">
			<swiper-item @tap="godetail">
				<view class="swiper-item">
					<view class="scrollone" >
						<view class="scrollitems" >
							<image src="../../../static/run.png" class="scrlimg"></image>
							<view class="one_text">美食</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/hospital.png" class="scrlimg"></image>
							<view class="one_text">超市便利</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/news.png" class="scrlimg"></image>
							<view class="one_text">蔬菜水果</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shang.png" class="scrlimg"></image>
							<view class="one_text">美团专送</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shop.png" class="scrlimg"></image>
							<view class="one_text">跑腿代购</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shop.png" class="scrlimg"></image>
							<view class="one_text">夜宵</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shang.png" class="scrlimg"></image>
							<view class="one_text">津贴联盟</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/run.png" class="scrlimg"></image>
							<view class="one_text">甜点饮品</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/hospital.png" class="scrlimg"></image>
							<view class="one_text">龙虾烧烤</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/news.png" class="scrlimg"></image>
							<view class="one_text">甜蜜蛋糕</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item @tap="godetail">
				<view class="swiper-item">
					<view class="scrollone">
						<view class="scrollitems">
							<image src="../../../static/run.png" class="scrlimg"></image>
							<view class="one_text">美食</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/hospital.png" class="scrlimg"></image>
							<view class="one_text">超市便利</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/news.png" class="scrlimg"></image>
							<view class="one_text">蔬菜水果</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shang.png" class="scrlimg"></image>
							<view class="one_text">美团专送</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shop.png" class="scrlimg"></image>
							<view class="one_text">跑腿代购</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shop.png" class="scrlimg"></image>
							<view class="one_text">夜宵</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shang.png" class="scrlimg"></image>
							<view class="one_text">津贴联盟</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/run.png" class="scrlimg"></image>
							<view class="one_text">甜点饮品</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/hospital.png" class="scrlimg"></image>
							<view class="one_text">龙虾烧烤</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/news.png" class="scrlimg"></image>
							<view class="one_text">甜蜜蛋糕</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item @tap="godetail">
				<view class="swiper-item">
					<view class="scrollone">
						<view class="scrollitems">
							<image src="../../../static/run.png" class="scrlimg"></image>
							<view class="one_text">美食</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/hospital.png" class="scrlimg"></image>
							<view class="one_text">超市便利</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/news.png" class="scrlimg"></image>
							<view class="one_text">蔬菜水果</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shang.png" class="scrlimg"></image>
							<view class="one_text">美团专送</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shop.png" class="scrlimg"></image>
							<view class="one_text">跑腿代购</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shop.png" class="scrlimg"></image>
							<view class="one_text">夜宵</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/shang.png" class="scrlimg"></image>
							<view class="one_text">津贴联盟</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/run.png" class="scrlimg"></image>
							<view class="one_text">甜点饮品</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/hospital.png" class="scrlimg"></image>
							<view class="one_text">龙虾烧烤</view>
						</view>
						<view class="scrollitems">
							<image src="../../../static/news.png" class="scrlimg"></image>
							<view class="one_text">甜蜜蛋糕</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
			data() {
				return {
					indicatorDots: true
				}
			},
			onLoad() {
	
			},
			methods: {
				changeIndicatorDots(e) {
					this.indicatorDots = !this.indicatorDots
				},
				changeAutoplay(e) {
					this.autoplay = !this.autoplay
				},
				intervalChange(e) {
					this.interval = e.target.value
				},
				durationChange(e) {
					this.duration = e.target.value
				},
				gotosearch(){
					
					this.$emit('gosearchmain');
				},
				godetail(){
					this.$emit('godetail');
				}
			}
			
		}
</script>

<style lang="scss" scoped>
.positions{
	height: 30rpx;
	line-height: 30rpx;
	display: flex;
	flex-direction: row;
	padding-left: 16rpx;
	padding-bottom: 30rpx;
	background-color: #ff902e;
	.posiimg{
		width: 30rpx;
		height:30rpx;
		padding-right: 30rpx;
	}
	.add{
		height: 30rpx;
		line-height: 30rpx;
		padding-bottom: 30rpx;
	}
	
}
.searchs{
	width: 100%;
	padding-left: 18rpx;
	padding-right: 18rpx;
	box-sizing: border-box;
	padding-bottom: 20rpx;
	background-color: #ff902e;
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
			width: 42rpx;
			height: 42rpx;
			margin-left: 18rpx;
			
		}
	}
	
}
.swiper {
	height: 360rpx;
	padding-top:14rpx;
}
.swiper-item {
	display: block;
	height: 340rpx;
	text-align: center;
	width: 750rpx;
	.scrollone{
		width: 750rpx;
		height: 340rpx;
		display: flex;
		flex-direction: row;
		flex-wrap:wrap;
		.scrollitems{
			width: 150rpx;
			font-size: 28rpx;
			box-sizing: border-box;
			.scrlimg{
				width: 90rpx;
				height: 90rpx;
			}
			.one_text{
				line-height: 40rpx;
			}
		}
	}
}
.swiper-list {
	margin-top: 40rpx;
	margin-bottom: 0;
}
.uni-common-mt {
	margin-top: 60rpx;
	position: relative;
}
.info {
	position: absolute;
	right: 20rpx;
}
.uni-padding-wrap {
	width: 550rpx;
	padding: 0 100rpx;
}

</style>