<template>
  <div class="dr-detail-footer">
    <Tooltip content="缩放比例" placement="top">
      <span class="zoom-margin">{{zoomValue}}%</span>
    </Tooltip>
    <Divider type="vertical" />
    <Icon class="zoom-margin" @click="reduce" type="md-remove" />
    <Slider v-model="zoomValue" :step="10" class="slider zoom-margin" :min="10" :max="400" @on-change="changeZoom"></Slider>
    <Icon class="zoom-margin" @click="add" type="md-add" />
    <Divider type="vertical" />
    <Tooltip content="自适应宽度" placement="top-end">
      <Icon class="zoom-margin" type="md-contract" />
    </Tooltip>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed:{
    zoomValue:{
      get(){
        return this.$store.state.zoomValue;
      },
      set(){

      }

    }
  },
  methods: {
    changeZoom(data){
      console.log(data);
      this.$store.commit('changeZoom',data);
    },

    reduce(){
      if(this.$store.state.zoomValue > 10){
        let zoom = this.$store.state.zoomValue - 10;
        this.$store.commit('changeZoom',zoom);
      }
    },

    add(){
      if(this.$store.state.zoomValue < 400){
        let zoom = this.$store.state.zoomValue + 10;
        this.$store.commit('changeZoom',zoom);
      }
    }
  },

}
</script>

<style lang="scss" scoped>
.dr-detail-footer{
  width: 100%;
  height: 32px;
  position: absolute;
  bottom: 0;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #fff;
  .slider{
    width: 100px;
  }
  .zoom-margin{
    margin: 0 5px;
  }
}
</style>
