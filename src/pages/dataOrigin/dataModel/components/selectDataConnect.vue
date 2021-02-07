<template>
  <div class="select-data-connect">
    <Input prefix="ios-contact" placeholder="请输入关键词搜索" />
    <Tree
      :data="data1"
      select-node
      @on-select-change="selectChange"></Tree>
  </div>
</template>

<script>

export default {
  data () {
    return {
      data1: [
        {
          title: 'test',
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
                      class: 'iconfont icon-excel',
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
              title: '球员数据',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
              title: '32强国家',
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
                      class: 'iconfont icon-excel',
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
    }
  },
  methods: {
    selectChange(nodeArr,currentNode){
      console.log(nodeArr);
      console.log(currentNode);
      this.$emit('selectDataConnect',nodeArr);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.select-data-connect{

}
</style>
