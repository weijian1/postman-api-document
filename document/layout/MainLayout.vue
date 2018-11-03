<template>
	<el-container class="main-layout">
	  <el-header class="main-header">
	  	<div class="header-item">
	  		<h3>postman-api-doc</h3>
	  		<a href="https://github.com/weijian1/postman-api-document" target="_blank">
	  			<font-awesome-icon :icon="['fab', 'github']" size="2x"></font-awesome-icon>
	  		</a>
	  	</div>
	  </el-header>
	  <el-container>
	    <el-aside width="200px">
			<el-menu :router="true" :default-index="currentRoute">
			  <el-menu-item index="/home">
			    <span slot="title">首页</span>
			  </el-menu-item>
			  <el-menu-item index="/postman-tutorial">
			    <span slot="title">Postman编写文档</span>
			  </el-menu-item>
			  <el-menu-item index="/generate-doc">
			    <span slot="title">生成文档</span>
			  </el-menu-item>
			</el-menu>
	    </el-aside>
	    <el-main>
	    	<router-view></router-view>
	    </el-main>
	  </el-container>
	</el-container>
</template>

<script>
	export default {
		computed: {
			currentRoute() {
				return this.$route.fullPath;
			}
		}
	}
</script>


<style scoped>
  .main-layout, .main-layout .el-container, .main-layout aside, .main-layout .el-menu {
  	height: 100%;
  }

  .main-header {
    background-color: #409eff;
    color: white;
  }
  .main-header h3 {
    margin: 0;
    line-height: 60px;
  }

  .header-item {
  	display: flex;
  	flex-flow: row nowrap;
  	justify-content: space-between;
  	align-items: center;
  }
</style>