<template>
	<view class="main">
		<view   class="head">
			<view class="titleimg">
				<image src="../../static/tea02.jpg" ></image>
			</view>
			<view class="title">
				<view class="name">皇冠餐厅</view>
				<view class="distance">配送约20分钟</view>
			</view>
		</view>
		<view class="titletwo">
			<view class="first">点菜</view>
			<view >评价</view>
			<view>商家</view>
		</view>
		<view class="scroll" :style="{height:scrollheigh+'px'}">
			<scroll-view scroll-y="true" class="scrolla" >
				<view  class="scroll-view-item " @tap="goto">小吃</view>
				<view  class="scroll-view-item " @tap="goto">火锅</view>
				<view class="scroll-view-item " @tap="goto">荤素</view>
				<view  class="scroll-view-item " @tap="goto">小吃</view>
				<view  class="scroll-view-item " @tap="goto">火锅</view>
				<view class="scroll-view-item " @tap="goto">荤素</view>
				<view  class="scroll-view-item " @tap="goto">小吃</view>
				<view  class="scroll-view-item " @tap="goto">火 锅</view>
				<view class="scroll-view-item " @tap="goto">荤素</view>
				<view  class="scroll-view-item " @tap="goto">小吃</view>
				<view  class="scroll-view-item " @tap="goto">火锅</view>
				<view class="scroll-view-item " @tap="goto">荤素</view>
				<view  class="scroll-view-item " @tap="goto">小吃</view>
				<view  class="scroll-view-item " @tap="goto">火锅</view>
				<view class="scroll-view-item " @tap="goto">荤素</view>
				
				
			</scroll-view>
			<scroll-view scroll-y="true" class="scrollb" :scroll-top="scrollTop" @scroll="scroll">
				<view  class="scroll-view-item ">1</view>
				<view  class="scroll-view-item">2</view>
				<view  class="scroll-view-item ">3</view>
				<view  class="scroll-view-item ">4</view>
				<view  class="scroll-view-item">5</view>
				<view  class="scroll-view-item ">6</view>
				<view  class="scroll-view-item ">7</view>
				<view  class="scroll-view-item">8</view>
				<view  class="scroll-view-item ">9</view>
				<view  class="scroll-view-item ">10</view>
				<view  class="scroll-view-item">11</view>
				<view  class="scroll-view-item ">12</view>
				<view  class="scroll-view-item ">13</view>
				<view  class="scroll-view-item">14</view>
				<view  class="scroll-view-item ">15</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollheigh:0,
				scrollTop:0,
				old: {
						scrollTop: 0
					 }
			}
		},
		mounted(){
			uni.getSystemInfo({
			  success: (res) =>{			  
				this.scrollheigh = res.windowHeight -158;
				
				this.$store.state.clienth = res.windowHeight;
			  }
			})
			
		},
		methods:{
			goto(){
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		
	.head{
		width: 750rpx;
		display: flex;
		flex-direction: row;
		background: -webkit-linear-gradient(bottom,rgba(0,0,0,0) 2%, #ffa850 98%);   
		padding-left: 20rpx;
		padding-right: 20rpx;
		.titleimg{
			width: 200rpx;
			height: 200rpx;
			image{
				width: 160rpx;
				height: 160rpx;
				margin-top:20rpx;
			}
		}
		.title{
			height: 200rpx;
			.name{
				padding-top: 24rpx;
				height: 100rpx;
				font-size: 36rpx;
			}
			.juli{
				line-height: 80rpx;
				font-size: 24rpx;
			}
		}
	}
	.titletwo{
		display: flex;
		flex-direction: row;
		padding-left: 20rpx;
		padding-right: 20rpx;
		text-align: center;
		
		view{
			margin-left: 24rpx;
			margin-right: 24rpx;
			line-height: 70rpx;
			font-size: 32rpx;
		}
		.first{
			border-bottom: 2px solid #ffa850;
		}
	}
	.scroll{
		
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
		
		.scrolla view{
			width: 220rpx;
			text-align: center;
			height: 100rpx;
		}
		.scrollb view{
			width: 530rpx;
			height: 200rpx;
			background-color: azure;
			margin-bottom: 20rpx;
			padding: 20rpx;
		}
	}
}
</style>
