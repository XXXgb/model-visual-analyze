<template>
  <Row class="report-side wrapper-height">
    <Col span="12" class="wrapper-height">
      <side-left></side-left>
    </Col>
    <Col span="12" class="wrapper-height">
      <side-right></side-right>
    </Col>
  </Row>
</template>

<script>
import SideLeft from '@/components/sideLeft';
import SideRight from '@/components/sideRight';
export default {
  components: {
    SideLeft,
    SideRight
  },
  data () {
    return {

    }
  },
  computed:{

  },
  methods: {

  },

}
</script>

<style lang="scss" scoped>
.report-side{

}
</style>
