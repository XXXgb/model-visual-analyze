<template>
  <div class="dr-detail">
    <detail-body></detail-body>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
  import DetailBody from './detailBody';
  import DetailFooter from './detailFooter';
export default {
  components: {
    DetailFooter,
    DetailBody
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
.dr-detail{
  height: calc(100% - 45px);
  display: flex;
  align-items: center;
  position: relative;
}
</style>
