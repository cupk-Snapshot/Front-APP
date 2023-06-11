<template>
	<view>
		<uni-group title="举报图片" mode="card">
			<uni-file-picker ref="files" :auto-upload="false" limit="6" title="最多上传6张图片"
			file-mediatype="image" mode="grid" :image-styles="ImageStyles" :value="img"></uni-file-picker>
			<button type="primary" size="mini" @click="upload()">上传文件</button>
		</uni-group>
		<button @click="carInputClick">打开车牌输入</button>
		<keyboard-plate ref="plateNumber" :plateNum.sync='plateNum' @change="getPlateNum"  isShow></keyboard-plate>
		<uni-group title="详细信息" mode="card">
			<uni-forms ref="Form" :rules="FormRules" :model="FormData" :border="true" label-position="left">
				
				<uni-forms-item label="位置" required>
					<uni-easyinput prefixIcon="location" v-model="FormData.location" placeholder="点击左侧图标选择位置 或 手动输入"
					maxlength="60" clearable @iconClick="getLocation()"></uni-easyinput>
				</uni-forms-item>
				
				
				<uni-forms-item label="时间" required>
					<uni-datetime-picker type="datetime" return-type="timestamp" v-model="FormData.datetime"/>
				</uni-forms-item>
				<uni-forms-item label="类别" required name="reports">
						<uni-tag class="reports" v-for="item in FormData.reports" :circle="true" :inverted="item.inverted" 
							:text="item.text" type="primary" @click="setInverted(item)"/>
				</uni-forms-item>
				<uni-easyinput v-if="OtherReport" :value="OtherReportValue" placeholder="请输入内容"></uni-easyinput>
			</uni-forms>
				<button type="primary" @click="submit('FormData')">提交</button>
		</uni-group>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				ImageStyles:{
					"height": 103,	// 边框高度
					"width": 103,	// 边框宽度
					"border":{ // 如果为 Boolean 值，可以控制边框显示与否
						"color":"#eee",		// 边框颜色
						"width":"2px",		// 边框宽度
						"style":"solid", 	// 边框样式
						"radius":"8%" 		// 边框圆角，支持百分比
					}
				},
				img:{
				},
				imageBase64:'',
				OtherReport:false,
				OtherReportValue:'',
				plateNum:'',
				FormData:{
					title:'',
					describe:'',
					datetime:'',
					carType:'',
					location:'',
					// 多选数据源
					//inverted: true代表空心标签，即用户未选中
					//用户选中为false
					reports: [{
						text: '开车打电话',
						inverted: true,
					}, {
						text: '压线变道',
						inverted: true
					}, {
						text: '违章停车',
						inverted: true
					}, {
						text: '闯红灯',
						inverted: true
					}, {
						text: '逆行',
						inverted: true
					}, {
						text: '其他',
						inverted: true
					}],
				},
				FormRules:{
					title: {
						rules: [{
							required: true,
							errorMessage: '标题不能为空'
						}]
					},
					picture: {
						rules: [{
							required: true,
							errorMessage: '图片不能为空'
						}]
					},
					
				}
				
			}
		},
		watch:{
		    plateNum(e){
		        console.log(e)
		    }
		},
		methods: {
			upload(){
				this.$refs.files.upload()
			},
			//获取车牌
			getPlateNum(e){
				console.log('车牌号是：'+ e.value)
			},
			// 打开车牌选择器
			carInputClick() {
				this.$refs.plateNumber.open();
			},
			async postImage() {
				const request = require('request')
				const AK = "G5Z8oHQ4qbBefmdRjFUBL4yo"
				const SK = "ejzzFY6NRen107zVQQYtZytGY6cxWV3G"
			    var options = {
			        'method': 'POST',
			        'url': 'https://aip.baidubce.com/rest/2.0/ocr/v1/license_plate?access_token=' + await getAccessToken(),
			        'headers': {
			                'Content-Type': 'application/x-www-form-urlencoded',
			                'Accept': 'application/json'
			        },
			        form: {
						'image': this.imageBase64,
						//'multi_detect'
						//'multi_scale'
			        }
			    };
			
			    request(options, function (error, response) {
			        if (error) throw new Error(error);
			        console.log(response.body);
			    });
			},
			/**
			 * 使用 AK，SK 生成鉴权签名（Access Token）
			 * @return string 鉴权签名信息（Access Token）
			 */
			getAccessToken() {
				const request = require('request')
				const AK = "G5Z8oHQ4qbBefmdRjFUBL4yo"
				const SK = "ejzzFY6NRen107zVQQYtZytGY6cxWV3G"
			    let options = {
			        'method': 'POST',
			        'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + AK + '&client_secret=' + SK,
			    }
			    return new Promise((resolve, reject) => {
			        request(options, (error, response) => {
			            if (error) { reject(error) }
			            else { resolve(JSON.parse(response.body).access_token) }
			        })
			    })
			},

			getLocation(){
				let that=this
				uni.getLocation({
					type: 'gcj02',
					highAccuracyExpireTime: 3500,
					isHighAccuracy: true,
					success: function (res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						uni.chooseLocation({
							latitude: latitude,
							longitude: longitude,
							success: function (res) {
								console.log('详细地址：' + res.address);
								console.log('纬度：' + res.latitude);
								console.log('经度：' + res.longitude);
								that.FormData.location=res.address
							}
						});
					},
					fail: function(){
						
					}
				});
			},
			setInverted(item) {
				item.inverted = !item.inverted
				if(item.text=='其他'){
					this.OtherReport=!this.OtherReport
					//item.text=this.OtherReportValue
				}
			},
			fileToBase64(file, callback) {
			    // 创建FileReader对象（不兼容IE）
			    let reader = new FileReader();
			    // 将file转为base64 （异步操作）
			    reader.readAsDataURL(file); 
			    // 转换成功
			    reader.onload = () => {
					const response = {
						status: true,
						data: reader.result
			    }
			    callback(response);
			    };
			    // 转换失败
			    reader.onerror = function () {
					const response = {
						status: false,
						data: reader.error
			        }
					callback(response);
			    };
			},

		}
	}
</script>

<style>
page {
	background-color: #fff;
}
.reports{
	
}

</style>
