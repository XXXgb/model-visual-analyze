<template>
  <div class="dr-main">
    <data-report-select></data-report-select>
  </div>
</template>

<script>

  import DataReportSelect from './dataReportSelect'
export default {
  components: {DataReportSelect},
  data () {
    return {
      DataReportSelect
    }
  },
  computed:{

  },
  methods: {

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .dr-main{
    width: 100%;
    height: 100%;
    border-left: 1px solid #e8e8e8;
    background-color: #fff;
  }
</style>
