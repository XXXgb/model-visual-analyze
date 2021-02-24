<template>
  <div class="layout">
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">
        <Menu mode="horizontal" theme="dark" :active-name="activeName" @on-select="selectMenu" ref="menuRef">
          <!--<div class="layout-logo"></div>-->
          <div class="layout-nav">
            <MenuItem name="dataOrigin">
              <Icon type="ios-navigate"></Icon>
              数据源
            </MenuItem>
            <MenuItem name="dataReport">
              <Icon type="ios-keypad"></Icon>
              报告
            </MenuItem>
            <MenuItem name="dataScreen">
              <Icon type="ios-analytics"></Icon>
              数据大屏
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              数据门户
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <div class="index-wrapper">
        <router-view/>
      </div>
    </Layout>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      activeName: 'dataOrigin',
    }
  },
  mounted(){
    this.selectMenu(this.$route.name);
    console.log(this.$route.name)
  },
  methods: {
    selectMenu(name){
      this.activeName = name;
      switch (name) {
        case 'dataModel':
        case 'dataOrigin':
          this.activeName = 'dataOrigin';
          this.$router.push({path: '/dataOrigin/dataModel'});
          break;
        case 'dataReport':
          this.activeName = 'dataReport';
          this.$router.push({path: '/dataReport'});
          break;
        case 'editorReport':
          this.activeName = 'dataReport';
          this.$router.push({path: '/editorReport'});
          break;
        case 'dataScreen':
          this.activeName = 'dataScreen';
          this.$router.push({path: '/screenView'});
          break;
      }
      this.initMenu();

    },

    initMenu(){
      this.$nextTick(()=>{
        this.$refs.menuRef.updateActiveName();
      })
    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .layout{
    height: 100%;
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    .ivu-layout{
      height: 100%;
    }
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    /*width: 420px;*/
    /*margin: 0 auto;*/
  }
  .layout-footer-center{
    text-align: center;
  }
  .ivu-layout-header{
    background: #141720;
    display: flex;
    justify-content: center;
    .ivu-menu-dark{
      background: #141720;
    }
  }
  .index-wrapper{
    position: absolute;
    top: 64px;
    width: 100%;
    height: calc(100% - 64px);
  }
</style>
