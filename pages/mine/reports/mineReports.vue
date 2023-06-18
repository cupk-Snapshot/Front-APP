<template>
	<view >
		<view v-for="(item, index) in reportList">
			<uni-card :title="item.time" :extra="item.location">
				<view class="imageContant">
					<img class="image" v-if="item.imageList.url1" :src="item.imageList.url1">
					<img class="image" v-if="item.imageList.url1" :src="item.imageList.url2">
					<img class="image" v-if="item.imageList.url1" :src="item.imageList.url3">
				</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reportList:{
					content:'123',
					time:'2020-12-20',
					location:'安定路355号',
					imageList:{
						url1:'https://xqimg.imedao.com/188cbc67e2342dc33fe79538.jpg!800.jpg',
						url2:'https://xqimg.imedao.com/188cbc67e2342dc33fe79538.jpg!800.jpg',
						url3:'https://xqimg.imedao.com/188cbc67e2342dc33fe79538.jpg!800.jpg',
					}
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.imageContant{
	display: flex;
}
.image{
	width: 150px;
	height: 150px;
}
</style>
