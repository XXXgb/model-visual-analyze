<template>
  <div class="no-model-main">
    <Icon type="md-cube" size="200" color="#ddd" />
    <div class="no-model-body">
      <i class="iconfont icon-leftarrow" style="font-size: 80px;color: #ddd;"></i>
      <span>{{noModelValue.title}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['noModelValue'],
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.no-model-main{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .no-model-body{
    display: flex;
    align-items: center;
    & span{
      color: #ddd;
      font-size: 20px;
    }
  }
}
</style>
