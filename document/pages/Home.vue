<template>
	<div>
		<h3>一个快速生成接口文档的工具</h3>
		<p>做后端接口开发的伙伴都知道，在开发接口的时候都需要附上一份接口文档给前端的伙伴进行对接。对于后端来说写接口文档是件很枯燥的事情，而且也要花费一定的时间进行编写，接口文档也悄悄的转向了自动化方向。虽然现在有许多可以快速生成接口文档的项目，但经过实践后，发现这些工具生成出来的接口文档还没达到目前的需求。</p>
		<p>由于在开发接口的过程中，我们时常都需要用Postman进行调试。<strong>假如我们能在边调试接口的同时，顺便也生成一份接口文档，那该多好啊！</strong>能减少后端开发人员不少工作量，提升了工作的效率。根据此思路，项目就这样诞生了。</p>

		<p>Demo：<a target="_blank" style="color: #409eff;" href="https://weijian1.github.io/postman-api-document/example">Online Demo</a></p>
		<p>&nbsp;</p>

		<h3>截图</h3>
		<img :src="require('~/assets/images/demo.png')">
		<p>&nbsp;</p>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.img-demo {
		margin: 0 auto;
		width: 80%;
		height: 500px;
	}

	.feature-wrapper {
		text-align: center;
	}
</style>