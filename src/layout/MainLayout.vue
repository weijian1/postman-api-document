<template>
  <el-container class="main-layout">
    <el-header class="main-header">
      <h3>{{ apiDocInfo.name }}</h3>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <ApiTree :data="apiDocData" @onApiMenuChange="apiMenuChange"></ApiTree>
      </el-aside>

      <el-main class="page-main">
        <el-container>
          <el-main id="main-content">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-main>
    </el-container>

  </el-container>  
</template>

<script>
  import axios from 'axios'
  import ApiTree from './../components/ApiTree'

  export default {
    data() {
      return {

      }
    },

    components: { 
      ApiTree
    },

    methods: {
      apiMenuChange(data) {
        if (data.request) {
          this.$store.dispatch('doSetCurrentApiDoc', data);
          document.getElementById("main-content").scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    },

    computed: {
      apiDocInfo() {
        return this.$store.state.ApiDoc.apiDocInfo;
      },
      apiDocData() {
        return this.$store.state.ApiDoc.apiDocList;
      }
    }
  }
</script>


<style scoped>
  .el-aside {
    padding-top: 10px;
  }
  .main-header {
    background-color: #409eff;
    color: white;
  }
  .main-header h3 {
    margin: 0;
    line-height: 60px;
  }

  .el-container {
    height: 100%;
  }

  .page-main {
    padding: 0;
  }
</style>
