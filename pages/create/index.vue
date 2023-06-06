<template>
	<view>
		<uni-forms ref="Form" :rules="FormRules" :model="FormData" :border="true" label-position="top">
			<!--
			<uni-forms-item label="标题">
				<uni-easyinput v-model="FormData.name" placeholder="请输入标题" />
			</uni-forms-item>
			-->
			<uni-forms-item label="举报图片" required>
				<uni-file-picker limit="3" title="最多选择3张图片" mode="grid" :image-styles="ImageStyles"></uni-file-picker>
			</uni-forms-item>
			<uni-icons type="location" size="30"></uni-icons>
			<uni-forms-item label="日期时间" required>
				<uni-datetime-picker type="datetime" return-type="timestamp" v-model="FormData.datetime"/>
			</uni-forms-item>
			<uni-forms-item label="举报类别" required name="reports">
				<view>
					<uni-tag class="reports" v-for="item in FormData.reports" :circle="true" :inverted="item.inverted" 
						:text="item.text" type="primary" @click="setInverted(item)"/>
					<uni-easyinput class="reports" v-if="OtherReport" :value="OtherReportValue" placeholder="请输入内容"></uni-easyinput>
				</view>
				
			</uni-forms-item>
			
			</uni-forms>
			<button type="primary" @click="submit('FormData')">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ImageStyles:{
					"height": 100,	// 边框高度
					"width": 100,	// 边框宽度
					"border":{ // 如果为 Boolean 值，可以控制边框显示与否
						"color":"#eee",		// 边框颜色
						"width":"2px",		// 边框宽度
						"style":"solid", 	// 边框样式
						"radius":"8%" 		// 边框圆角，支持百分比
					}
				},
				OtherReport:false,
				OtherReportValue:'',
				FormData:{
					title:'',
					describe:'',
					picture:'',
					licensePlateNum:'',
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
		methods: {
			setInverted(item) {
				item.inverted = !item.inverted
				if(item.text=='其他'){
					this.OtherReport=!this.OtherReport
					//item.text=this.OtherReportValue
					console.log(item)
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
	margin: 5px 5px 5px 5px;
}
</style>
