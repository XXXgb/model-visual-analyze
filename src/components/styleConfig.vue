<template>
  <div class="style-config-box">
    <ColorPicker v-model="color4" transfer recommend @on-change="changeColor" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      color4: '#19be6b',
    }
  },
  methods: {
    changeColor(data){
      this.$store.commit('updateNode',{
        [this.$store.state.currentNode.id]: {
          ...this.$store.state.nodeData[this.$store.state.currentNode.id],
          chartConfig: {
            ...this.$store.state.nodeData[this.$store.state.currentNode.id].chartConfig,
            color: data
          }
        }
      })
      console.log(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.style-config-box{
  height: 100%;
  overflow: auto;
}
</style>
