<template>
	<view class="content">
		<transition>
			<view class="searchs" v-if="shows">
				<view class="sear">
					<image src="../../static/fangda.png" class="searchimg"></image>
					<input type="text" class="mainsearch" placeholder="火锅"  />
				</view>
				<view class="neartitle" >
					<view class="title01">
						<view class="titlea" @tap="godeli('delia')">综合排序</view>
						<view class="titlea" @tap="godeli('delib')">销量高</view>
						<view class="titlea" @tap="godeli('delic')">速度快</view>
						<view class="titlea" @tap="godeli('delid')">津贴联盟</view>
					</view>
					<view class="shaixuan" @tap="godeli('delie')">筛选</view>
				</view>
			</view>
		</transition>
		<Search></Search>
		<Preference ></Preference>
		<Near></Near>
		<Shaixuan id="demo"></Shaixuan>
		<Shoose></Shoose>
		<Main></Main>
		
	</view>
</template>

<script>
	import Search from "./components/search.vue"
	import Preference from './components/preference.vue'
	import Near from './components/near.vue'
	import Shaixuan from './components/shaixuan.vue'
	import Shoose from './components/shoose.vue'
	import Main from './components/main.vue'
	import Xitopinput from './components/xitopsearch.vue'
	import Xitopselect from './components/xitopselect.vue'
	export default {
		data() {
			return {
				topinput:false,
				topselect:false,
				rect:'',    //页面滚动距离
				menutop:0, //组件距离顶部的距离
				isfixed:false,
				newtops:0
				
				
			}
		},
		mounted () {
			
			let query = uni.createSelectorQuery().in(this);
			query.select('#demo').boundingClientRect(data => {
				
				this.menutop = data.top;
				
			}).exec();
		},
		computed:{
			shows(){
				return  this.newtops >= this.menutop ? true:false;
			}
		},
		methods: {
			godeli(num){
				
			}
		},
		onPageScroll(e) {
				
				this.newtops=e.scrollTop;
				
		},
		components:{
			Search,
			Preference,
			Near,
			Shoose,
			Main,
			Shaixuan,
			Xitopinput,
			Xitopselect
		},
		
	}
</script>

<style lang="scss" scoped>
 /*隐藏enter  到  显示enter-to*/
    .v-enter{
      opacity: 0
    }
    .v-enter-active{
      transition: opacity 0.1s
    }
    .v-enter-to{
      opacity: 1  /*这个是默认值，可写可不写*/
    }

.searchs{
		width: 100%;
		padding-left: 18rpx;
		padding-right: 18rpx;
		box-sizing: border-box;
		background-color: #ffa850;
		top:44px;
		position: fixed;
		/*  #ifdef  MP-WEIXIN  */
		top:0;
		/*  #endif  */
		
		left: 0;
		z-index: 999999;
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
				line-height: 72rpx;
				padding-left:16rpx;
				box-sizing: border-box;
			}	
		}
		.shaixuan{
				
				line-height: 72rpx;
				padding-right: 24rpx;
				
		}
	}
</style>
