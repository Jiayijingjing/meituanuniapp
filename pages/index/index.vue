<template>
	<view class="content">
		<transition>
			<view class="searchs" v-show="shows" @touchmove.stop.prevent="disabledScroll">
				<view class="sear" id="inputh" @touchmove.stop.prevent="disabledScroll">
					<image src="../../static/fangda.png" class="searchimg"></image>
					<input type="text" class="mainsearch" placeholder="火锅"  />
				</view>
				<view class="neartitle" id="selecth" @touchmove.stop.prevent="disabledScroll">
					<view class="title01">
						<view class="titlea" @tap="backsearch">综合排序</view>
						<view class="titlea" @tap="backsearch">销量高</view>
						<view class="titlea" @tap="backsearch">速度快</view>
						<view class="titlea" @tap="backsearch">津贴联盟</view>
					</view>
					<view class="shaixuan" @tap="backsearch">筛选</view>
				</view>
				<view class="selectmain" @touchmove.stop.prevent="disabledScroll" v-if="tapshow">
					<view class="buttons">
						<view class="clears" @tap="golist">清空</view>
						<view class="finishs" @tap="golist">完成</view>
					</view>
				</view>
				<view id="meng" :style="{height:mengheight+'px'}" v-if="tapshow" @touchmove.stop.prevent="disabledScroll" @tap="backmeng"></view>
			</view>
		</transition>
		<Search></Search>
		<Preference ></Preference>
		<Near></Near>
		<Shaixuan id="demo" @tap.native="godeli"></Shaixuan>
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
	export default {
		data() {
			return {
				menutop:0, //组件距离顶部的距离
				isfixed:false,
				newtops:0,
				setWidth:0,
				mengheight:0,
				shows:false,
				tapshow:false
			}
		},
		mounted () {
			uni.pageScrollTo({
			    scrollTop: 0,
			    duration: 0
			});
			
			let aa = 0;
			let bb = 0;
			let query = uni.createSelectorQuery().in(this);
			query.select('#demo').boundingClientRect(data => {				
				this.menutop = data.top;
	
			}).exec();
			
			query.select('#inputh').boundingClientRect(data => {
				
				aa = data.height;
				
			}).exec();
			query.select('#selecth').boundingClientRect(data => {
				
				bb = data.height;
				
			}).exec();
			
			uni.getSystemInfo({
			  success: (res) =>{
				  
				this.setWidth = res.windowHeight ;
				this.mengheight = res.windowHeight-44-aa-bb;
				
			  }
			})
			
		},
		computed:{
			
		},
		methods: {
			godeli(){
				
				uni.pageScrollTo({
				    scrollTop: this.menutop,
				    duration: 0
				});
				this.shows = true;
				this.tapshow = true;
			},
			disabledScroll(){
				return;
			},
			backsearch(){
				
				this.tapshow = true;
				
			},
			golist(){
				
				this.tapshow = false;
				uni.pageScrollTo({
				    scrollTop: this.menutop,
				    duration: 0
				});
				
			},
			backmeng(){
				this.tapshow = false;
			}
			

		},
		onPageScroll(e) {
				
			this.newtops=e.scrollTop;
			if(this.newtops >= this.menutop){
				this.shows = true;
			}else{
				this.shows = false;
			}
		},
		components:{
			Search,
			Preference,
			Near,
			Shoose,
			Main,
			Shaixuan
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
	    box-sizing: border-box;
		width: 750rpx;
		// margin-left: 18rpx;
		// margin-right: 18rpx;
		box-sizing: border-box;
		// background-color: #ffa850;
		background-color: #FFFFFF;
		top:44px;
		position: fixed;
		/*  #ifdef  MP-WEIXIN  */
		top:0;
		/*  #endif  */
		
		left: 0;
		z-index: 999999;
		.sear{
			background-color: #dfdfdf;
			border-radius: 10rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			margin-left: 18rpx;
			margin-right: 18rpx;
			margin-top:18rpx;
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
	.selectmain{
		box-sizing: border-box;
		width: 750rpx;
		height: 700rpx;
		background-color: white;
		z-index: 999999;
		position: relative;
		padding-left:16rpx;
		padding-right: 16rpx;
		.buttons{
			bottom: 0;
			left: 0;
			display: flex;
			position: absolute;
			flex-direction: row;
			view{
				width: 372rpx;
				height: 60rpx;
				line-height: 60rpx;
				border: 1px solid #ccc;
				text-align: center;
				
			}
		}
	}
	.finishs{
		background-color: #ffa850;
	}
	#meng{
		width: 750rpx;
	
		background-color:#000000;
		opacity: 0.2;
		z-index: 999999;
	}
</style>
