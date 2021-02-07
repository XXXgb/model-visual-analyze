<template>
  <div style="height: 100%;width: 100%;">
    <Row class="wrapper-height">
      <Col span="24" class="wrapper-height">
        <router-view></router-view>
      </Col>
    </Row>
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      selectModelValue: {},
      showAddConnect: false,
      showModelDetail: true,
      showConnectAdd: false,
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
