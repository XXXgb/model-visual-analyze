<!--维度表-->
<template>
  <div class="dt-main">
    <div class="dt-header">
      <span>{{tableTitle}}</span>
    </div>
    <div class="dt-tree">
      <draggable v-model="arr1" group="site" v-if="flag == 2">
        <transition-group>
          <!--<Tree :data="data1" expand-node></Tree>-->
          <div v-for="(item,index) in arr1" :key="index" class="dimension-draggable-li">
            <i :class="['iconfont','icon-' + item.type]"></i>
            <span>{{item.name}}</span>
          </div>
        </transition-group>
      </draggable>
      <div v-for="(item,index) in arr2" :key="index" class="dimension-li" v-else>
        <i :class="['iconfont','icon-' + item.type]"></i>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
export default {
  props: ['flag','configType','saveStatus'],
  components: {
    draggable
  },
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
              title: '产品_ID',
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

            },
            {
              title: '产品名称',
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

            },
            {
              title: '发货日期',
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

            },
            {
              title: '国家',
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

            },
            {
              title: '地区',
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

            },
            {
              title: '城市',
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

            },
            {
              title: '子类别',
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

            },
            {
              title: '客户_ID',
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

            },
            {
              title: '客户名称',
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

            },
            {
              title: '省自治区',
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

            },
            {
              title: '类别',
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

            },
            {
              title: '细分',
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

            },
            {
              title: '行_ID',
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

            },
            {
              title: '订单_ID',
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

            },
            {
              title: '订单日期',
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

            },
            {
              title: '邮寄方式',
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

            },
          ]
        }
      ],
      arr1:[],
      arr2:[],
    }
  },
  computed: {
    tableTitle:{
      get(){
        if(this.configType == 'dimensionality'){
          return '维度';
        }else if(this.configType == 'measurement'){
          return '度量';
        }
      },
      set(){}
    }
  },
  watch: {
    'flag': function (val) {
      console.log('改变flag')
      if(this.flag == 2){
        if(this.configType == 'dimensionality'){
          this.arr1 = JSON.parse(localStorage.getItem('dimensionality'));
        }else if(this.configType == 'measurement'){
          this.arr1 = JSON.parse(localStorage.getItem('measurement'));
        }
      }else{
        if(this.configType == 'dimensionality'){
          this.arr2= JSON.parse(localStorage.getItem('dimensionality'));
        }else if(this.configType == 'measurement'){
          this.arr2 = JSON.parse(localStorage.getItem('measurement'));
        }
      }
    },

    'saveStatus': function (val) {
      if(val){
        if(this.configType == 'dimensionality'){
          window.localStorage.setItem('dimensionality',JSON.stringify(this.arr1));
        }else if(this.configType == 'measurement'){
          window.localStorage.setItem('measurement',JSON.stringify(this.arr1));
        }
      }
      console.log('保存完成');
    }
  },
  mounted(){
    /*window.localStorage.setItem('dimensionality',JSON.stringify([
      {name:'订单号',type: 'num',code: 'dingdanid',dataSourceType: '',dataType: 'string',id: '',length: '',tableId: ''},
      {name:'年份',type: 'textformat_abc',code: 'nianfen',dataSourceType: '',dataType: 'string',id: '',length: '',tableId: ''},
      {name:'省',type: 'date',code: 'sheng',dataSourceType: '',dataType: 'string',id: '',length: '',tableId: ''},
      {name:'收货人手机',type: 'geolocalizator',code: 'shouhuorenshouji',dataSourceType: '',dataType: 'string',id: '',length: '',tableId: ''},
      {name:'订单总金额',type: 'geolocalizator',code: 'dingdanzongjiner',dataSourceType: '',dataType: 'string',id: '',length: '',tableId: ''},
      {name:'支付时间',type: 'geolocalizator',code: 'zhifushijian',dataSourceType: '',dataType: 'string',id: '',length: '',tableId: ''},
      {name:'收货人',type: 'textformat_abc',code: 'shouhuoren',dataSourceType: '',dataType: 'string',id: '',length: '',tableId: ''}
    ]));
    window.localStorage.setItem('measurement',JSON.stringify([{name:'订单号',type: 'num',code: 'dingdanid',dataSourceType: '',dataType: 'string',id: '',length: '',tableId: ''}]));*/

    if(this.configType == 'dimensionality'){
      this.arr1 = JSON.parse(localStorage.getItem('dimensionality'));
      this.arr2= JSON.parse(localStorage.getItem('dimensionality'));
    }else if(this.configType == 'measurement'){
      this.arr1 = JSON.parse(localStorage.getItem('measurement'));
      this.arr2 = JSON.parse(localStorage.getItem('measurement'));
    }
    },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dt-main{
  height: 100%;
  .dt-header{
    height: 24px;
    background-color: #efefef;
    padding: 0 0 0 10px;
    line-height: 24px;
    & span{
      font-size: 12px;
    }
  }
  .dt-tree{
    height: calc(100% - 24px);
    overflow: auto;
    padding: 0 0 0 10px;
  }
  .dimension-draggable-li{
    cursor: pointer;
    margin: 5px 0;
    padding-left: 5px;
  }
  .dimension-draggable-li:hover{
    background-color: #f5f5f5;
  }
  .dimension-li{
    margin: 5px 0;
    padding-left: 5px;
  }
  .dimension-li:hover{
    background-color: #f5f5f5;
  }
}
</style>
