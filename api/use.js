//请求具体使用案例
async login(){
	// 发送请求
	const {data:res} = await this.$myHttp({
		url: 'login',
		data:{
			name:this.username.trim(),
			password:this.$md5(this.password.trim())
		}
	});
	if(res.code != 200) return uni.showToast({
		title:'用户名或密码不正确',
		duration: 1500,
		icon:'none'
	});
	// 将session_id保存到缓存中
	uni.setStorageSync('session_id',res.data.session_id)
	// 登录成功跳转到首页
	uni.switchTab({
		url: '/pages/index/index'
	})
}

// 二、封装思路解析
// 1.请求期间的Loading解析

// 在请求发送前利用uniapp原生的api：uni.showLoading打开Loading样式，在请求完成时再利用uni.hideLoading关闭Loading样式。关闭loading样式的代码放在complete函数中是因为，无论请求成功还是失败，只要请求结束，都要关闭loading样式。

// 2.ajaxTimes变量的解析

// 通常会遇到请求被同时发送的情况，例如在点击按钮之后，在事件处理函数中向后端发送了两次或者以上次数的请求，那么不能在第一次请求结束就关闭了Loading。所以添加了ajaxTimes变量进行控制，每次请求发起时都将变量做++操作，请求结束一次做- -操作，这样当所有请求都结束时ajaxTimes的值又变成了初始定义的0，那么就可以进行Loading的关闭操作。

// 3.请求前是否添加后端需要的请求头验证（在请求头携带token或sessionId，名字不一样而已，不必在意）

// 在用户进行登录请求时，是不需要添加请求头验证的，但是登录之后，每次请求都需要进行身份验证，所以在请求方法中添加了当前操作是否是登录操作：

// if(options.url != 'login'){
//    header["client-identity"] = uni.getStorageSync('session_id');
// }
// 不是登录操作则将保存在缓存中的身份验证下带在请求头中。