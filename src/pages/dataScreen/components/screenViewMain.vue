<template>
  <div class="ds-main-wrapper">
    <data-report-title></data-report-title>
    <!--<data-report-detail></data-report-detail>-->
  </div>
</template>

<script>
  import DataReportTitle from './screenTitle'
  // import DataReportDetail from './dataReportDetail'
export default {
  components: {
    DataReportTitle,
    // DataReportDetail
  },
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
.ds-main-wrapper{
  width: 100%;
  height: 100%;
  border-left: 1px solid #e8e8e8;
  background-color: #fff;
}
</style>
