<template>
	<view class="content">
		<view class="t-wrap">
			<view class="t-jf">
				<view class="t-jf-points">
					<view class="t-jf-title">我的积分</view>
					<view class="t-jf-info">
						<view class="t-jf-num">5000</view>
						<view class="t-jf-detail" hover-class="t-hc" @click="toDetail">
							<text>积分明细</text>
							<image src="/static/images/mine/icon-right.png"></image>
						</view>
					</view>
				</view>
				<view class="t-jf-history" hover-class="t-hc" @click="toHistory">
					兑换历史
				</view>
			</view>
		</view>
		<view class="t-goods" v-if="goodsList&&goodsList.length>0">
			<view class="t-goods-item" v-for="(item,index) in goodsList" :key="index">
				<image class="t-goods-img" :src="item.goodsUrl"></image>
				<view class="t-goods-title t-text-oneline">{{item.goodsDesc}}</view>
				<view class="t-goods-score t-flex-row-s">
					<text>{{item.goodsScore}}</text>
					<text>积分</text>
				</view>
				<view class="t-dh t-flex-row" bindtap="toTips" hover-class="t-click-class">我要兑换</view>
			</view>
		</view>
		<view class="t-more t-flex-row">
			我也是有底线的哦~
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: [{
						goodsUrl: '/static/images/goods/1.png',
						goodsDesc: '多功能晴雨伞一把',
						goodsScore: 1000
					},
					{
						goodsUrl: '/static/images/goods/2.png',
						goodsDesc: '万用充电线一条',
						goodsScore: 3000
					},
					{
						goodsUrl: '/static/images/goods/3.png',
						goodsDesc: '保温壶一个',
						goodsScore: 5000
					},
					{
						goodsUrl: '/static/images/goods/4.png',
						goodsDesc: '400ML水杯一个',
						goodsScore: 2000
					},
					{
						goodsUrl: '/static/images/goods/5.png',
						goodsDesc: '万用切刀一把',
						goodsScore: 6000
					},
					{
						goodsUrl: '/static/images/goods/6.png',
						goodsDesc: '小巧手电筒一个',
						goodsScore: 1000
					},
					{
						goodsUrl: '/static/images/goods/7.png',
						goodsDesc: '800ML杯子一个',
						goodsScore: 7000
					},
					{
						goodsUrl: '/static/images/goods/8.png',
						goodsDesc: '600ML保温杯一个',
						goodsScore: 12000
					},
				]
			}
		},
		onLoad() {
		},
		onNavigationBarButtonTap(e) {
				uni.navigateTo({
					url: `/pages/mine/exchange/settings`
				})
			},
		methods: {
			
			//签到点击
			toSign() {
				if (!this.isSigned) {
					//这里写签到逻辑，这里模拟成功后操作
					this.showSignBox = true;
				}
			},
			//关闭签到弹框--签到成功后点击
			closeSign() {
				this.showSignBox = false;
				this.isSigned = true;
			},
			//打开签到弹框
			openRule() {
				this.showRuleBox = true;
			},
			//关闭签到弹框
			closeRule() {
				this.showRuleBox = false;
			},
			//跳转积分明细
			toDetail() {
				uni.navigateTo({
					url: '/pages/mine/exchange/detail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		box-sizing: border-box;
		padding-bottom: 20rpx;
		background: #fff;
		min-width: 100vw;
		min-height: 100vh;
	}

	.t-hc {
		opacity: 0.7;
	}

	.t-wrap {
		height: 280rpx;
		width: 100%;
		box-sizing: border-box;

		.t-jf {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			padding-bottom: 40rpx;
			background:#3c96f3;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.t-jf-points {
				padding-left: 70rpx;

				.t-jf-title {
					font-size: 32rpx;
					color: #fff;
				}

				.t-jf-info {
					margin-top: 20rpx;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: flex-end;

					.t-jf-num {
						font-size: 56rpx;
						font-weight: bold;
						color: #fff;
						line-height: 56rpx;
					}

					.t-jf-detail {
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;

						text {
							font-size: 24rpx;
							color: #fff;
							margin-left: 20rpx;
						}

						image {
							width: 18rpx;
							height: 18rpx;
							margin-left: 6rpx;
						}
					}
				}
			}

			.t-jf-history {
				margin-right: 70rpx;
				padding: 15rpx 30rpx;
				background: #fff;
				border-radius: 50rpx;
				color: #3c96f3;
			}
		}

		.t-bg-wrap {
			position: relative;
			align-self: flex-start;
			top: 54rpx;

			.t-bg {
				--width: 440vw;
				position: absolute;
				height: var(--width);
				width: var(--width);
				left: calc(var(--width)*-1/2 + 50vw - 40rpx);
				top: calc(var(--width)*-1 + 1vw);
				border-radius: 50%;
				z-index: -1;
				background: linear-gradient(to bottom, #18ba7a, #88bf87);
			}
		}
	}

	.t-sign-con {
		width: 100%;
		box-sizing: border-box;
		position: relative;
		padding: 0rpx 30rpx;

		.wrap {
			width: 100%;
			height: 360rpx;
			border-radius: 10rpx;
			background-color: #fff;
			position: relative;
			top: -50rpx;
			box-sizing: border-box;
			box-shadow: 0 30rpx 50px rgba(0, 0, 0, .4);

			.t-sign-top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				width: 100%;
				padding: 28rpx 20rpx;

				.lx {
					font-size: 32rpx;
					color: #333;

					text {
						color: #18ba7a;
						margin: 0rpx 3rpx;
					}
				}

				.gz {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					font-size: 28rpx;
					color: #999;

					image {
						width: 28rpx;
						height: 28rpx;
						margin-left: 8rpx;
					}
				}
			}

			.t-sign-body {
				height: 124rpx;
				width: 100%;
				box-sizing: border-box;
				padding: 0rpx 20rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.t-sign-item {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					height: 100%;
					box-sizing: border-box;
					padding: 0rpx 12rpx;
					border-radius: 10rpx;

					&.signed {
						background: #27ba76;

						text {
							color: #fff !important;
						}
					}

					.t-img-con {
						width: 56rpx;
						height: 56rpx;
						border-radius: 50%;
						background: #57da78;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;

						.t-img {
							width: 40rpx;
							height: 40rpx;
							border-radius: 50%;
							background: #27ba76;
							display: flex;
							flex-direction: row;
							justify-content: center;
							align-items: center;

							image {
								width: 24rpx;
								height: 24rpx;
							}
						}
					}

					text {
						font-size: 20rpx;
						color: #777;
						margin-top: 12rpx;
					}
				}
			}

			.t-sign-btn {
				width: 514rpx;
				height: 80rpx;
				text-align: center;
				line-height: 80rpx;
				border-radius: 50rpx;
				background-color: #17ba7a;
				font-size: 32rpx;
				color: #fff;
				margin: 32rpx auto 0rpx;

				&.t-signed {
					background-color: #b8b8b8 !important;
				}
			}
		}
	}

	.t-o-wrap {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;

		.t-sign-bg {
			width: 550rpx;
			border-bottom-left-radius: 20rpx;
			border-bottom-right-radius: 20rpx;
		}

		.t-g-jf {
			position: relative;
			top: -220rpx;
			font-size: 36rpx;
			color: #17ba7a;
		}

		.t-g-desc {
			position: relative;
			top: -200rpx;
			font-size: 28rpx;
			color: #999;
		}

		.close-btn {
			position: relative;
			top: -173rpx;
			width: 300rpx;
			height: 60rpx;
			border-radius: 50rpx;
			background: #17ba7a;
			text-align: center;
			line-height: 60rpx;
			font-size: 28rpx;
			color: #fff;
		}

		.t-rule {
			width: 690rpx;
			background: #fff;
			border-radius: 20rpx;
			padding: 30rpx;
			box-sizing: border-box;

			.title {
				text-align: center;
				color: #333;
				font-size: 32rpx;
				margin-top: 10rpx;
			}

			.desc {
				text-align: justify;
				margin-top: 20rpx;
				white-space: pre-line;
				font-size: 32rpx;
				color: #666;
				line-height: 50rpx;
			}
		}

		.t-close {
			width: 60rpx;
			height: 60rpx;
			margin-top: 40rpx;
			padding: 10rpx;
		}
	}
	.t-goods {
			width: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: flex-start;
			padding: 16rpx 18rpx 0rpx;
	}
	
	.t-goods-item {
		width: 350rpx;
		height: 576rpx;
		background: #fff;
		border-radius: 10rpx;
		margin-top: 14rpx;
	}
	
	.t-goods-img {
		width: 350rpx;
		height: 350rpx;
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		display: block;
	}
	
	.t-goods-title {
		width: 308rpx;
		margin: 30rpx auto 0rpx;
		font-size: 28rpx;
		color: #272727;
	}
	
	.t-goods-score {
		margin-top: 16rpx;
		height: 32rpx;
		line-height: 32rpx;
		margin-left: 20rpx;
	}
	
	.t-goods-score text:first-child {
		font-size: 32rpx;
		color: #D41428;
		font-weight: bold;
	}
	
	.t-goods-score text:last-child {
		font-size: 28rpx;
		color: #17ba7a;
		margin-left: 4rpx;
	}
	
	.t-dh {
		width: 310rpx;
		height: 70rpx;
		background: #17ba7a;
		border-radius: 35rpx;
		font-size: 32rpx;
		color: #FFFFFF;
		margin: 20rpx auto 0rpx;
	}
	
	.t-more {
		font-size: 28rpx;
		color: #888888;
		line-height: 40rpx;
		margin-top: 50rpx;
		margin-bottom: 85rpx;
	}
	.t-click-class {
		opacity: 0.7;
	}
	
	.t-flex-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.t-flex-row-s {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
</style>