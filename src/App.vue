<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html, body{
  width: 100%;
  height: 100%;
}
body, ul, li, ol, p, h1, h2, h3, h4, h5, h6, img, form, div{
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: 0;
  font-size: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(64,64,64);
  font-size: 14px;
  width: 100%;
  height: 100%;
}
.wrapper-height{
  height: 100%;
}
/*设置mysql连接基本信息--start*/
.connect-setting-wrapper{
  margin: 16px 16px 16px 20px;
  & .setting-title{
    font-size: 16px;
    margin: 16px 0;
  }
  .connect-setting-form .ivu-input-wrapper{
    width: 550px;
  }
}
/*设置mysql连接基本信息--end*/
/*设置添加数据连接类型选择对话框--start*/
.connect-type-modal{
  /deep/ .ivu-modal-body{
    height: calc(100vh - 300px);
    padding: 35px 36px;
    display: flex;
    justify-content: center;
    overflow: auto;
  }
}
/*设置添加数据连接类型选择对话框--end*/
/*设置新增模型选择数据连接对话框--start*/
.select-connect-modal{
  /deep/ .ivu-modal-body{
    height: calc(100vh - 300px);
    padding: 35px 36px;
    overflow: auto;
  }
}
/*设置新增模型选择数据连接对话框--end*/
</style>
