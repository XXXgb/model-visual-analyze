<template>
  <Row class="wrapper-height model-list-wrapper" :style="fromC == 1 ? {background: '#fff'} : fromC == 2 ? {background: '#f9fafc'} : ''">
    <Col span="24" class="model-list-title">
      <h2>{{formData.name}}</h2>
      <div class="model-title-icon-wrapper">
        <Dropdown trigger="click" style="margin-left: 20px" placement="bottom-start">
          <a href="javascript:void(0)">
            <i class="iconfont icon-add-select iconfont-style"></i>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem @click.native="addReport()" v-if="fromC == 2">新建报告</DropdownItem>
            <DropdownItem>新建文件夹</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Icon type="md-funnel" size="14px" color="#103ffa" />
      </div>
    </Col>
    <Col span="24" class="model-list-input">
      <Input placeholder="搜索">
        <Select slot="prepend" style="width: 50px" v-if="fromC == 1">
          <Option value="名称">名称</Option>
          <Option value="创建人">创建人</Option>
          <Option value="字段名称">字段名称</Option>
        </Select>
      </Input>
    </Col>
    <Col span="24" class="model-list-tree-wrapper">
      <Tree
        :data="data1"
        select-node
        @on-select-change="selectChange"></Tree>
    </Col>
  </Row>
</template>

<script>

export default {
  props: ['fromC'],
  data () {
    return {
      data1: [
        {
          title: '金融行业',
          expand: true,
          render: (h, {root, node, data}) => {
            return h('span', {}, [
              h('span', [
                h('Icon', {
                  props: {
                    type: 'ios-folder-outline'
                  },
                  style: {
                    marginRight: '8px'
                  }
                }),
                h('span', data.title)
              ])
            ]);
          },
          children: [
            {
              title: '超市500',
              expand: true,
              render: (h, {root, node, data}) => {
                return h('span', {
                  style: {
                    display: 'inline-block',
                    width: '100%'
                  }
                }, [
                  h('span', [
                    h('i', {
                      class: 'iconfont icon-database',
                      style: {
                        fontSize: '14px',
                        marginRight: '8px'
                      }
                    }),
                    h('span', data.title)
                  ])
                ]);
              },

            }
          ]
        }
      ],
      formData: {
        name: '',
      },

    }
  },
  computed: {

  },
  mounted(){
    switch (this.fromC) {
      case 1:
        this.formData.name = '数据模型';
        break;
      case 2:
        this.formData.name = '报告';
        break;
    }
  },
  methods: {
    selectChange(nodeArr,currentNode){
      console.log(nodeArr);
      console.log(currentNode);
      this.$emit('selectModelNode',currentNode)
    },

    addReport(){
      this.$emit('addReportStatus',true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .model-list-wrapper{
    padding: 0 16px;
  }
  .model-list-title{
    height: 48px;
    display: flex;
    align-items: center;
  }
  .model-list-input{
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .model-list-tree-wrapper{
    height: calc(100% - 96px);
    display: flex;
    overflow: auto;
  }
  .iconfont-style{
    font-size: 14px;
    color: #103ffa;
  }
  .model-title-icon-wrapper{
    margin-left: auto;
  }
</style>
