<template>
  <div class="dm-title">
    <div v-if="flag == 1">
      <span>
        {{title}}
        <Poptip placement="bottom" trigger="hover" width="400">
        <Icon type="md-cube" color="#103ffa" />
        <div class="api" slot="content">
          <p>创建: 2021年1月28日 11时16分</p>
          <p>最近修改: 2021年1月29日 11时16分</p>
        </div>
      </Poptip>
      </span>
      <Button type="primary" @click="editorModel">编辑模型</Button>
      <Button>刷新数据</Button>
    </div>
    <div style="width: 100%;display: flex;" v-if="flag == 2">
      <Input v-model="title" style="width: 50%;" />
      <Button style="margin-left: auto;" @click="noSave">取消</Button>
      <Button @click="saveModel" type="primary">保存</Button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      flag: 1,  // 1.模型详情  2.编辑模型
      title: '超市500'
    }
  },
  computed:{

  },
  methods: {
    editorModel(){
      // this.$router.push({path: '/dataOrigin/editorModel'})
      this.flag = 2;
      this.$emit('getEditStatus',this.flag);
      // this.$store.commit('changeModelEditorStatus',true);
    },

    saveModel(){
      // this.$router.push({path: '/dataOrigin/dataModel'})
      // this.$store.commit('changeModelEditorStatus',false);
      this.$emit('saveConfig',true);
      setTimeout(()=>{
        this.flag = 1;
        this.$emit('getEditStatus',this.flag);
      },200)

    },

    noSave(){
      this.flag = 1;
      this.$emit('getEditStatus',this.flag);
      this.$emit('saveConfig',false)
    },

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dm-title{
  height: 45px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e8e8e8;
  & span{
    font-size: 18px;
  }
  & button{
    margin: 0 0 0 20px;
  }
}
</style>
